/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Empty } from 'antd';
import { capitalize, isEmpty, sumBy, toUpper } from 'lodash';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import plus from '../../assets/img/icons/plus.svg';
import { getProductsRequest, setSingleProduct } from '../../config/store/actions/productActions';
import { setProductVED } from '../../config/store/actions/settingsActions';
import WithDataLoader from '../common/loaders/WithDataLoader';
import WithNoDataLoader from '../common/loaders/WithNoDataLoader';

const ProductsList = () => {
    const dispatch = useDispatch();
    const { allProducts, loading } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getProductsRequest());
    }, []);

    return (
        <div className='page-wrapper'>
            <div className='content'>
                <div className='page-header'>
                    <div className='page-title'>
                        <h4>Product List</h4>
                        <h6>Manage your products</h6>
                    </div>
                    <div className='page-btn'>
                        <div className='btn btn-added' onClick={() => {
                            dispatch(setProductVED('add-product'))
                        }}>
                            <img src={plus} alt='img'
                                className='me-1' />
                            Add New Product
                        </div>
                    </div>
                </div>

                <div className='card'>
                    {!isEmpty(allProducts) && loading && <WithDataLoader />}
                    <div className='card-body'>
                        {isEmpty(allProducts) && !loading && <Empty />}
                        {isEmpty(allProducts) &&
                            loading &&
                            <WithNoDataLoader />}
                        {!isEmpty(allProducts) &&
                            <div className='table-responsive'>
                                <table className='table  datanew'>
                                    <thead>
                                        <tr>
                                            <th>
                                                <label className='checkboxs'>
                                                    <input type='checkbox' id='select-all' />
                                                    <span className='checkmarks'></span>
                                                </label>
                                            </th>
                                            <th>Product Name</th>
                                            <th>Art Number</th>
                                            <th>Quantity</th>
                                            <th>Tax [%]</th>
                                            <th>Discount [%]</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {allProducts.map((item) => {
                                            return (
                                                <tr key={item.id}>
                                                    <td>
                                                        <label className='checkboxs'>
                                                            <input type='checkbox' />
                                                            <span className='checkmarks'></span>
                                                        </label>
                                                    </td>
                                                    <td className='productimgname'>
                                                        <span className='product-img'>
                                                            {item.img ? <img src={item.img} alt='product' /> : <i className="product-img-def fas fa-solid fa-person-dress fa-xl"></i>}
                                                        </span>
                                                        {item.name}
                                                    </td>
                                                    <td>{toUpper(item.artNumber)}</td>
                                                    <td>{sumBy(item.variants, 'quantity')}</td>
                                                    <td>{item.tax}</td>
                                                    <td>{capitalize(item.discount)}</td>
                                                    <td>
                                                        <Button variant="dashed" className='px-4' size="small" onClick={() => {
                                                            dispatch(setProductVED('view-product'));
                                                            dispatch(setSingleProduct(item));
                                                        }}>view</Button>
                                                        {/* <Space>
                                                            <Radio.Group size="small">
                                                                <Radio.Button value="start">View</Radio.Button>
                                                                <Radio.Button value="end">end</Radio.Button>
                                                            </Radio.Group>
                                                        </Space> */}
                                                        {/* <span className='me-3' onClick={() => {
                                                            dispatch(setProductVED('view-product'));
                                                            dispatch(setSingleProduct(item));
                                                        }}>
                                                            <img src={eye} alt='img' />
                                                        </span>
                                                        <span className='me-3' onClick={() => dispatch(setProductVED('add-product'))}>
                                                            <img src={edit} alt='img' />
                                                        </span> */}
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsList;
