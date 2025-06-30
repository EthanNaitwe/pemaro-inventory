/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Empty, Pagination } from 'antd';
import { isEmpty, toUpper } from 'lodash';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import plus from '../../assets/img/icons/plus.svg';
import { dataPaginationFn } from '../../config/helpers/dataHelpers';
import { getProductsRequest, setProductsPageNo, setSingleProduct } from '../../config/store/actions/productActions';
import { getSettings, setProductVED } from '../../config/store/actions/settingsActions';
import { getAllUsers } from '../../config/store/actions/userActions';
import WithNoDataLoader from '../common/loaders/WithNoDataLoader';

const ProductsList = () => {
    const dispatch = useDispatch();
    const { allUsers } = useSelector((state) => state.users);
    const { allProducts, loading, productsPageNo } = useSelector((state) => state.products);
    const { systemSettings, systemSettings: { showAddProduct } } = useSelector((state) => state.settings);

    const [pageItems] = useState(10);

    const onPagination = (page) => dispatch(setProductsPageNo(page));

    useEffect(() => {
        dispatch(getProductsRequest());
        if (isEmpty(allUsers)) dispatch(getAllUsers());
        if (isEmpty(systemSettings)) dispatch(getSettings());
    }, []);

    return (
        <div className='page-wrapper'>
            <div className='content'>
                <div className='page-header'>
                    <div className='page-title'>
                        <h4>Product List</h4>
                        <h6>Manage your products</h6>
                    </div>
                    {showAddProduct && <div className='page-btn'>
                        <div className='btn btn-added' onClick={() => {
                            dispatch(setProductVED('add-product'))
                        }}>
                            <img src={plus} alt='img'
                                className='me-1' />
                            Add New Product
                        </div>
                    </div>}
                </div>

                <div className='card'>
                    {/* {!isEmpty(allProducts) && loading && <WithDataLoader />} */}
                    <div className='card-body'>
                        {isEmpty(allProducts) && !loading && <Empty />}
                        {isEmpty(allProducts) && loading && <WithNoDataLoader />}
                        {!isEmpty(allProducts) &&
                            <div className='table-responsive'>
                                <table className='table datanew'>
                                    <thead>
                                        <tr>
                                            <th>S/N</th>
                                            <th>Art Number</th>
                                            <th>Product Name</th>
                                            <th>Price (UGX)</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dataPaginationFn(allProducts, pageItems, productsPageNo).map((item) => {
                                            return (
                                                <tr key={item.index}>
                                                    <td>{toUpper(item.index + 1)}</td>
                                                    <td>{toUpper(item.artNumber)}</td>
                                                    <td className='productimgname'>
                                                        {/* <span className='product-img'>
                                                            {item.img ? <img src={item.img} alt='product' /> : <i className="product-img-def fas fa-solid fa-person-dress fa-xl"></i>}
                                                        </span> */}
                                                        {item.name}
                                                    </td>
                                                    <td>{`${parseInt(item.minimum_price, 10).toLocaleString()} /=`}</td>
                                                    <td>
                                                        <Button disabled variant="dashed" className='px-4' size="small" onClick={() => {
                                                            dispatch(setProductVED('view-product'));
                                                            dispatch(setSingleProduct(item));
                                                        }}>edit</Button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                                <div className='my-2'>
                                    <Pagination onChange={onPagination} responsive hideOnSinglePage align="center" defaultCurrent={productsPageNo} total={allProducts.length} />
                                </div>
                            </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsList;
