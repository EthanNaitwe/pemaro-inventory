
import plus from '../../assets/img/icons/plus.svg';
import plus1 from '../../assets/img/icons/plus1.svg';
import calendar from '../../assets/img/icons/calendars.svg';
import scanner from '../../assets/img/icons/scanners.svg';
import prod7 from '../../assets/img/product/product7.jpg';
import deleteImg from '../../assets/img/icons/delete.svg';
import prod8 from '../../assets/img/product/product8.jpg';
import prod1 from '../../assets/img/product/product1.jpg';
import { useDispatch } from 'react-redux';
import { setSaleVED } from '../../config/actions/settingsActions';

const AddSales = () => {
    const dispatch = useDispatch();
    return (

        <div className='page-wrapper'>
            <div className='content'>
                <div className='page-header'>
                    <div className='page-title'>
                        <h4>Add Sale</h4>
                        <h6>Add your new sale</h6>
                    </div>
                    <div className='page-btn'>
                        <div className='btn btn-added' onClick={() => dispatch(setSaleVED(''))}>
                            <img src={plus} alt='img' className='me-1' />
                            View Sales List
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-lg-3 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label>Customer</label>
                                    <div className='row'>
                                        <div className='col-lg-10 col-sm-10 col-10'>
                                            <select className='form-select'>
                                                <option>Choose</option>
                                                <option>Customer Name</option>
                                            </select>
                                        </div>
                                        <div className='col-lg-2 col-sm-2 col-2 ps-0'>
                                            <div className='add-icon'>
                                                <span>
                                                    <img src={plus1} alt='img' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label>Customer</label>
                                    <div className='input-groupicon'>
                                        <input type='text' placeholder='Choose Date' className='datetimepicker' />
                                        <a className='addonset'>
                                            <img src={calendar} alt='img' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label>Supplier</label>
                                    <select className='form-select'>
                                        <option>Choose</option>
                                        <option>Supplier Name</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-lg-12 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label>Product Name</label>
                                    <div className='input-groupicon'>

                                        <input type='text' placeholder='Please type product code and select...' />
                                        <div className='addonset'>
                                            <img src={scanner} alt='img' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='table-responsive mb-3'>
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Product Name</th>
                                            <th>QTY</th>
                                            <th>Price</th>
                                            <th>Discount</th>
                                            <th>Tax</th>
                                            <th>Subtotal</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td className='productimgname'>
                                                <a className='product-img'>
                                                    <img src={prod7} alt='product' />
                                                </a>
                                                <a href='javascript:void(0);'>Apple Earpods</a>
                                            </td>
                                            <td>1.00</td>
                                            <td>15000.00</td>
                                            <td>0.00</td>
                                            <td>0.00</td>
                                            <td>1500.00</td>
                                            <td>
                                                <a href='javascript:void(0);' className='delete-set'>
                                                    <img src={deleteImg} alt='svg' />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td className='productimgname'>
                                                <a className='product-img'>
                                                    <img src={prod8} alt='product' />
                                                </a>
                                                <a href='javascript:void(0);'>iPhone 11</a>
                                            </td>
                                            <td>1.00</td>
                                            <td>1500.00</td>
                                            <td>0.00</td>
                                            <td>0.00</td>
                                            <td>1500.00</td>
                                            <td>
                                                <a href='javascript:void(0);' className='delete-set'>
                                                    <img src={deleteImg} alt='svg' />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td className='productimgname'>
                                                <a className='product-img'>
                                                    <img src={prod1} alt='product' />
                                                </a>
                                                <a href='javascript:void(0);'>Macbook pro</a>
                                            </td>
                                            <td>1.00</td>
                                            <td>1500.00</td>
                                            <td>0.00</td>
                                            <td>0.00</td>
                                            <td>1500.00</td>
                                            <td>
                                                <a href='javascript:void(0);' className='delete-set'>
                                                    <img src={deleteImg} alt='svg' />
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-lg-3 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label>Order Tax</label>
                                    <input type='text' />
                                </div>
                            </div>
                            <div className='col-lg-3 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label>Discount</label>
                                    <input type='text' />
                                </div>
                            </div>
                            <div className='col-lg-3 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label>Shipping</label>
                                    <input type='text' />
                                </div>
                            </div>
                            <div className='col-lg-3 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label>Status</label>
                                    <select className='form-select'>
                                        <option>Choose Status</option>
                                        <option>Completed</option>
                                        <option>Inprogress</option>
                                    </select>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-6 '>
                                    <div className='total-order w-100 max-widthauto m-auto mb-4'>
                                        <ul>
                                            <li>
                                                <h4>Order Tax</h4>
                                                <h5>$ 0.00 (0.00%)</h5>
                                            </li>
                                            <li>
                                                <h4>Discount </h4>
                                                <h5>$ 0.00</h5>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-lg-6 '>
                                    <div className='total-order w-100 max-widthauto m-auto mb-4'>
                                        <ul>
                                            <li>
                                                <h4>Shipping</h4>
                                                <h5>$ 0.00</h5>
                                            </li>
                                            <li className='total'>
                                                <h4>Grand Total</h4>
                                                <h5>$ 0.00</h5>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <a href='javascript:void(0);' className='btn btn-submit me-2'>Submit</a>
                                <a href='javascript:void(0);' className='btn btn-cancel'>Cancel</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddSales