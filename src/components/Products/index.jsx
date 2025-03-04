/* eslint-disable react-hooks/exhaustive-deps */
import { capitalize, toUpper } from 'lodash';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import edit from '../../assets/img/icons/edit.svg';
import eye from '../../assets/img/icons/eye.svg';
import plus from '../../assets/img/icons/plus.svg';
import { getProductsRequest } from '../../config/store/actions/productActions';
import { setProductVED } from '../../config/store/actions/settingsActions';

const ProductsList = () => {
    const dispatch = useDispatch();
    const { allProducts } = useSelector((state) => state.products);

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
                    <div className='card-body'>
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
                                        <th>Quantity</th>
                                        <th>Art Number</th>
                                        <th>Color</th>
                                        <th>Sizes</th>
                                        {/* <th>Price (UGX)</th> */}
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
                                                <td>{item.quantity}</td>
                                                <td>{toUpper(item.artNumber)}</td>
                                                <td>{capitalize(item.color)}</td>
                                                <td>{item.size}</td>
                                                {/* <td>{item.price}</td> */}
                                                <td>
                                                    <span className='me-3' onClick={() => dispatch(setProductVED('view-product'))}>
                                                        <img src={eye} alt='img' />
                                                    </span>
                                                    <span className='me-3' onClick={() => dispatch(setProductVED('add-product'))}>
                                                        <img src={edit} alt='img' />
                                                    </span>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsList;
