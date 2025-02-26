import { useDispatch } from 'react-redux';
import plus from '../../assets/img/icons/plus.svg';
import { setSaleVED } from '../../config/store/actions/settingsActions';

const SalesList = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <div>
                <div className='page-wrapper'>
                    <div className='content'>
                        <div className='page-header'>
                            <div className='page-title'>
                                <h4>Sales List</h4>
                                <h6>Manage your sales</h6>
                            </div>
                            <div className='page-btn'>
                                <div className='btn btn-added' onClick={() => dispatch(setSaleVED('add-sales'))}>
                                    <img src={plus} alt='img' className='me-1' />
                                    Add Sales
                                </div>
                            </div>
                        </div>


                        <div className='card'>
                            <div className='card-body'>
                                <div className='card' id='filter_inputs'>
                                    <div className='card-body pb-0'>
                                        <div className='row'>
                                            <div className='col-lg-3 col-sm-6 col-12'>
                                                <div className='form-group'>
                                                    <input type='text' placeholder='Enter Name' />
                                                </div>
                                            </div>
                                            <div className='col-lg-3 col-sm-6 col-12'>
                                                <div className='form-group'>
                                                    <input type='text' placeholder='Enter Reference No' />
                                                </div>
                                            </div>
                                            <div className='col-lg-3 col-sm-6 col-12'>
                                                <div className='form-group'>
                                                    <select className='form-select'>
                                                        <option>Completed</option>
                                                        <option>Paid</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='col-lg-3 col-sm-6 col-12'>
                                                <div className='form-group'>
                                                    <a className='btn btn-filters ms-auto'>
                                                        <img src='assets/img/icons/search-whites.svg' alt='img' />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                                <th>Date</th>
                                                <th>Customer Name</th>
                                                <th>Reference</th>
                                                <th>Status</th>
                                                <th>Payment</th>
                                                <th>Total</th>
                                                <th>Paid</th>
                                                <th>Due</th>
                                                <th>Biller</th>
                                                {/* <th className='text-center'>Action</th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </td>
                                                <td>walk-in-customer</td>
                                                <td>19 Nov 2022</td>
                                                <td>SL0101</td>
                                                <td><span className='badges bg-lightgreen'>Completed</span></td>
                                                <td><span className='badges bg-lightgreen'>Paid</span></td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td className='text-red'>100.00</td>
                                                <td>Admin</td>
                                                <td className='text-center'>
                                                    <span className='action-set' data-bs-toggle='dropdown'
                                                        aria-expanded='true'>
                                                        <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
                                                    </span>
                                                    <ul className='dropdown-menu'>
                                                        <li>
                                                            <span className='dropdown-item'>
                                                                <img src='assets/img/icons/eye1.svg' className='me-2' alt='img' />
                                                                Sale Detail
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'>
                                                                <img src='assets/img/icons/edit.svg' className='me-2' alt='img' />
                                                                Edit Sale
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'
                                                                data-bs-toggle='modal' data-bs-target='#showpayment'>
                                                                <img src='assets/img/icons/dollar-square.svg' className='me-2' alt='img' />
                                                                Show Payments
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'
                                                                data-bs-toggle='modal' data-bs-target='#createpayment'>
                                                                <img src='assets/img/icons/plus-circle.svg' className='me-2' alt='img' />
                                                                Create Payment
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'>
                                                                <img src='assets/img/icons/download.svg' className='me-2' alt='img' />
                                                                Download pdf
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span
                                                                className='dropdown-item confirm-text'>
                                                                <img src='assets/img/icons/delete1.svg' className='me-2' alt='img' />
                                                                Delete Sale
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </td>
                                                <td>walk-in-customer</td>
                                                <td>19 Nov 2022</td>
                                                <td>SL0102</td>
                                                <td><span className='badges bg-lightgreen'>Completed</span></td>
                                                <td><span className='badges bg-lightgreen'>Paid</span></td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td className='text-red'>100.00</td>
                                                <td>Admin</td>
                                                <td className='text-center'>
                                                    <span className='action-set' data-bs-toggle='dropdown'
                                                        aria-expanded='true'>
                                                        <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
                                                    </span>
                                                    <ul className='dropdown-menu'>
                                                        <li>
                                                            <span className='dropdown-item'>
                                                                <img src='assets/img/icons/eye1.svg' className='me-2' alt='img' />
                                                                Sale Detail
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'>
                                                                <img src='assets/img/icons/edit.svg' className='me-2' alt='img' />
                                                                Edit Sale
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'
                                                                data-bs-toggle='modal' data-bs-target='#showpayment'>
                                                                <img src='assets/img/icons/dollar-square.svg' className='me-2' alt='img' />
                                                                Show Payments
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'
                                                                data-bs-toggle='modal' data-bs-target='#createpayment'>
                                                                <img src='assets/img/icons/plus-circle.svg' className='me-2' alt='img' />
                                                                Create Payment
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'>
                                                                <img src='assets/img/icons/download.svg' className='me-2'
                                                                    alt='img' />
                                                                Download pdf
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span
                                                                className='dropdown-item confirm-text'>
                                                                <img src='assets/img/icons/delete1.svg' className='me-2' alt='img' />
                                                                Delete Sale
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </td>
                                                <td>walk-in-customer</td>
                                                <td>19 Nov 2022</td>
                                                <td>SL0103</td>
                                                <td><span className='badges bg-lightgreen'>Completed</span></td>
                                                <td><span className='badges bg-lightgreen'>Paid</span></td>
                                                <td>0.00</td>
                                                <td className='text-green'>100.00</td>
                                                <td>0.00</td>
                                                <td>Admin</td>
                                                <td className='text-center'>
                                                    <span className='action-set' data-bs-toggle='dropdown'
                                                        aria-expanded='true'>
                                                        <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
                                                    </span>
                                                    <ul className='dropdown-menu'>
                                                        <li>
                                                            <span className='dropdown-item'>
                                                                <img src='assets/img/icons/eye1.svg' className='me-2' alt='img' />
                                                                Sale Detail
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'>
                                                                <img src='assets/img/icons/edit.svg' className='me-2' alt='img' />
                                                                Edit Sale
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span
                                                                data-bs-toggle='modal' data-bs-target='#showpayment'>
                                                                <img src='assets/img/icons/dollar-square.svg' className='me-2' alt='img' />
                                                                Show Payments
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'
                                                                data-bs-toggle='modal' data-bs-target='#createpayment'>
                                                                <img src='assets/img/icons/plus-circle.svg' className='me-2' alt='img' />
                                                                Create Payment
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'>
                                                                <img src='assets/img/icons/download.svg' className='me-2' alt='img' />
                                                                Download pdf
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span
                                                                className='dropdown-item confirm-text'>
                                                                <img src='assets/img/icons/delete1.svg' className='me-2' alt='img' />
                                                                Delete Sale
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </td>
                                                <td>Fred C. Rasmussen</td>
                                                <td>19 Nov 2022</td>
                                                <td>SL0104</td>
                                                <td><span className='badges bg-lightred'>Pending</span></td>
                                                <td><span className='badges bg-lightred'>Due</span></td>
                                                <td>0.00</td>
                                                <td className='text-green'>100.00</td>
                                                <td>0.00</td>
                                                <td>Admin</td>
                                                <td className='text-center'>
                                                    <span className='action-set' data-bs-toggle='dropdown'
                                                        aria-expanded='true'>
                                                        <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
                                                    </span>
                                                    <ul className='dropdown-menu'>
                                                        <li>
                                                            <span className='dropdown-item'>
                                                                <img src='assets/img/icons/eye1.svg' className='me-2' alt='img' />
                                                                Sale Detail
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'>
                                                                <img src='assets/img/icons/edit.svg' className='me-2' alt='img' />
                                                                Edit Sale
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'
                                                                data-bs-toggle='modal' data-bs-target='#showpayment'>
                                                                <img src='assets/img/icons/dollar-square.svg' className='me-2' alt='img' />
                                                                Show Payments
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'
                                                                data-bs-toggle='modal' data-bs-target='#createpayment'>
                                                                <img src='assets/img/icons/plus-circle.svg' className='me-2' alt='img' />
                                                                Create Payment
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'>
                                                                <img src='assets/img/icons/download.svg' className='me-2' alt='img' />
                                                                Download pdf
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span
                                                                className='dropdown-item confirm-text'>
                                                                <img src='assets/img/icons/delete1.svg' className='me-2' alt='img' />
                                                                Delete Sale
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </td>
                                                <td>Thomas M. Martin</td>
                                                <td>19 Nov 2022</td>
                                                <td>SL0105</td>
                                                <td><span className='badges bg-lightred'>Pending</span></td>
                                                <td><span className='badges bg-lightred'>Due</span></td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td className='text-green'>100.00</td>
                                                <td>Admin</td>
                                                <td className='text-center'>
                                                    <span className='action-set' data-bs-toggle='dropdown'
                                                        aria-expanded='true'>
                                                        <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
                                                    </span>
                                                    <ul className='dropdown-menu'>
                                                        <li>
                                                            <span className='dropdown-item'>
                                                                <img src='assets/img/icons/eye1.svg' className='me-2' alt='img' />
                                                                Sale Detail
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'>
                                                                <img src='assets/img/icons/edit.svg' className='me-2' alt='img' />
                                                                Edit Sale
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'
                                                                data-bs-toggle='modal' data-bs-target='#showpayment'>
                                                                <img src='assets/img/icons/dollar-square.svg' className='me-2' alt='img' />
                                                                Show Payments
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'
                                                                data-bs-toggle='modal' data-bs-target='#createpayment'>
                                                                <img src='assets/img/icons/plus-circle.svg' className='me-2' alt='img' />
                                                                Create Payment
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'>
                                                                <img src='assets/img/icons/download.svg' className='me-2' alt='img' />
                                                                Download pdf
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span
                                                                className='dropdown-item confirm-text'>
                                                                <img src='assets/img/icons/delete1.svg' className='me-2' alt='img' />
                                                                Delete Sale
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </td>
                                                <td>Thomas M. Martin</td>
                                                <td>19 Nov 2022</td>
                                                <td>SL0106</td>
                                                <td><span className='badges bg-lightgreen'>Completed</span></td>
                                                <td><span className='badges bg-lightgreen'>Paid</span></td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td className='text-red'>100.00</td>
                                                <td>Admin</td>
                                                <td className='text-center'>
                                                    <span className='action-set' data-bs-toggle='dropdown'
                                                        aria-expanded='true'>
                                                        <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
                                                    </span>
                                                    <ul className='dropdown-menu'>
                                                        <li>
                                                            <span className='dropdown-item'>
                                                                <img src='assets/img/icons/eye1.svg' className='me-2' alt='img' />
                                                                Sale Detail
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'>
                                                                <img src='assets/img/icons/edit.svg' className='me-2' alt='img' />
                                                                Edit Sale
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'
                                                                data-bs-toggle='modal' data-bs-target='#showpayment'>
                                                                <img src='assets/img/icons/dollar-square.svg' className='me-2' alt='img' />
                                                                Show Payments
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'
                                                                data-bs-toggle='modal' data-bs-target='#createpayment'>
                                                                <img src='assets/img/icons/plus-circle.svg' className='me-2' alt='img' />
                                                                Create Payment
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'>
                                                                <img src='assets/img/icons/download.svg' className='me-2' alt='img' />
                                                                Download pdf
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span
                                                                className='dropdown-item confirm-text'>
                                                                <img src='assets/img/icons/delete1.svg' className='me-2' alt='img' />
                                                                Delete Sale
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </td>
                                                <td>walk-in-customer</td>
                                                <td>19 Nov 2022</td>
                                                <td>SL0107</td>
                                                <td><span className='badges bg-lightgreen'>Completed</span></td>
                                                <td><span className='badges bg-lightgreen'>Paid</span></td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td className='text-red'>100.00</td>
                                                <td>Admin</td>
                                                <td className='text-center'>
                                                    <span className='action-set' data-bs-toggle='dropdown'
                                                        aria-expanded='true'>
                                                        <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
                                                    </span>
                                                    <ul className='dropdown-menu'>
                                                        <li>
                                                            <span className='dropdown-item'>
                                                                <img src='assets/img/icons/eye1.svg' className='me-2' alt='img' />
                                                                Sale Detail
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'>
                                                                <img src='assets/img/icons/edit.svg' className='me-2' alt='img' />
                                                                Edit Sale
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'
                                                                data-bs-toggle='modal' data-bs-target='#showpayment'>
                                                                <img src='assets/img/icons/dollar-square.svg' className='me-2' alt='img' />
                                                                Show Payments
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'
                                                                data-bs-toggle='modal' data-bs-target='#createpayment'>
                                                                <img src='assets/img/icons/plus-circle.svg' className='me-2' alt='img' />
                                                                Create Payment
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'>
                                                                <img src='assets/img/icons/download.svg' className='me-2' alt='img' />
                                                                Download pdf
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span
                                                                className='dropdown-item confirm-text'>
                                                                <img src='assets/img/icons/delete1.svg' className='me-2' alt='img' />
                                                                Delete Sale
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </td>
                                                <td>walk-in-customer</td>
                                                <td>19 Nov 2022</td>
                                                <td>SL0108</td>
                                                <td><span className='badges bg-lightred'>Pending</span></td>
                                                <td><span className='badges bg-lightred'>Due</span></td>
                                                <td>0.00</td>
                                                <td className='text-green'>100.00</td>
                                                <td>0.00</td>
                                                <td>Admin</td>
                                                <td className='text-center'>
                                                    <span className='action-set' data-bs-toggle='dropdown'
                                                        aria-expanded='true'>
                                                        <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
                                                    </span>
                                                    <ul className='dropdown-menu'>
                                                        <li>
                                                            <span className='dropdown-item'>
                                                                <img src='assets/img/icons/eye1.svg' className='me-2' alt='img' />
                                                                Sale Detail
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'>
                                                                <img src='assets/img/icons/edit.svg' className='me-2' alt='img' />
                                                                Edit Sale
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'
                                                                data-bs-toggle='modal' data-bs-target='#showpayment'>
                                                                <img src='assets/img/icons/dollar-square.svg' className='me-2' alt='img' />
                                                                Show Payments
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'
                                                                data-bs-toggle='modal' data-bs-target='#createpayment'>
                                                                <img src='assets/img/icons/plus-circle.svg' className='me-2' alt='img' />
                                                                Create Payment
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'>
                                                                <img src='assets/img/icons/download.svg' className='me-2' alt='img' />
                                                                Download pdf
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span
                                                                className='dropdown-item confirm-text'>
                                                                <img src='assets/img/icons/delete1.svg' className='me-2'
                                                                    alt='img' />
                                                                Delete Sale
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </td>
                                                <td>walk-in-customer</td>
                                                <td>19 Nov 2022</td>
                                                <td>SL0109</td>
                                                <td><span className='badges bg-lightred'>Pending</span></td>
                                                <td><span className='badges bg-lightred'>Due</span></td>
                                                <td>0.00</td>
                                                <td className='text-green'>100.00</td>
                                                <td>0.00</td>
                                                <td>Admin</td>
                                                <td className='text-center'>
                                                    <span className='action-set' data-bs-toggle='dropdown'
                                                        aria-expanded='true'>
                                                        <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
                                                    </span>
                                                    <ul className='dropdown-menu'>
                                                        <li>
                                                            <span className='dropdown-item'>
                                                                <img src='assets/img/icons/eye1.svg' className='me-2' alt='img' />
                                                                Sale Detail
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'>
                                                                <img src='assets/img/icons/edit.svg' className='me-2' alt='img' />
                                                                Edit Sale
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'
                                                                data-bs-toggle='modal' data-bs-target='#showpayment'>
                                                                <img src='assets/img/icons/dollar-square.svg' className='me-2' alt='img' />
                                                                Show Payments
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'
                                                                data-bs-toggle='modal' data-bs-target='#createpayment'>
                                                                <img src='assets/img/icons/plus-circle.svg' className='me-2' alt='img' />
                                                                Create Payment
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'>
                                                                <img src='assets/img/icons/download.svg' className='me-2' alt='img' />
                                                                Download pdf
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span
                                                                className='dropdown-item confirm-text'>
                                                                <img src='assets/img/icons/delete1.svg' className='me-2' alt='img' />
                                                                Delete Sale
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </td>
                                                <td>walk-in-customer</td>
                                                <td>19 Nov 2022</td>
                                                <td>SL0110</td>
                                                <td><span className='badges bg-lightred'>Pending</span></td>
                                                <td><span className='badges bg-lightred'>Due</span></td>
                                                <td>0.00</td>
                                                <td className='text-green'>100.00</td>
                                                <td>0.00</td>
                                                <td>Admin</td>
                                                <td className='text-center'>
                                                    <span className='action-set' data-bs-toggle='dropdown'
                                                        aria-expanded='true'>
                                                        <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
                                                    </span>
                                                    <ul className='dropdown-menu'>
                                                        <li>
                                                            <span className='dropdown-item'>
                                                                <img src='assets/img/icons/eye1.svg' className='me-2' alt='img' />
                                                                Sale Detail
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'>
                                                                <img src='assets/img/icons/edit.svg' className='me-2' alt='img' />
                                                                Edit Sale
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'
                                                                data-bs-toggle='modal' data-bs-target='#showpayment'>
                                                                <img src='assets/img/icons/dollar-square.svg' className='me-2' alt='img' />
                                                                Show Payments
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'
                                                                data-bs-toggle='modal' data-bs-target='#createpayment'>
                                                                <img src='assets/img/icons/plus-circle.svg' className='me-2' alt='img' />
                                                                Create Payment
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'>
                                                                <img src='assets/img/icons/download.svg' className='me-2' alt='img' />
                                                                Download pdf
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span
                                                                className='dropdown-item confirm-text'>
                                                                <img src='assets/img/icons/delete1.svg' className='me-2' alt='img' />
                                                                Delete Sale
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </td>
                                                <td>walk-in-customer</td>
                                                <td>19 Nov 2022</td>
                                                <td>SL0111</td>
                                                <td><span className='badges bg-lightred'>Pending</span></td>
                                                <td><span className='badges bg-lightred'>Due</span></td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td>Admin</td>
                                                <td className='text-center'>
                                                    <span className='action-set' data-bs-toggle='dropdown'
                                                        aria-expanded='true'>
                                                        <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
                                                    </span>
                                                    <ul className='dropdown-menu'>
                                                        <li>
                                                            <span className='dropdown-item'>
                                                                <img src='assets/img/icons/eye1.svg' className='me-2' alt='img' />
                                                                Sale Detail
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'>
                                                                <img src='assets/img/icons/edit.svg' className='me-2' alt='img' />
                                                                Edit Sale
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'
                                                                data-bs-toggle='modal' data-bs-target='#showpayment'>
                                                                <img src='assets/img/icons/dollar-square.svg' className='me-2' alt='img' />
                                                                Show Payments
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'
                                                                data-bs-toggle='modal' data-bs-target='#createpayment'>
                                                                <img src='assets/img/icons/plus-circle.svg' className='me-2' alt='img' />
                                                                Create Payment
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className='dropdown-item'>
                                                                <img src='assets/img/icons/download.svg' className='me-2' alt='img' />
                                                                Download pdf
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span
                                                                className='dropdown-item confirm-text'>
                                                                <img src='assets/img/icons/delete1.svg' className='me-2' alt='img' />
                                                                Delete Sale
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='modal fade' id='showpayment' tabIndex='-1' aria-labelledby='showpayment' aria-hidden='true'>
                <div className='modal-dialog modal-lg modal-dialog-centered'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title'>Show Payments</h5>
                            <button type='button' className='close' data-bs-dismiss='modal' aria-label='Close'><span
                                aria-hidden='true'>×</span></button>
                        </div>
                        <div className='modal-body'>
                            <div className='table-responsive'>
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Reference</th>
                                            <th>Amount </th>
                                            <th>Paid By </th>
                                            <th>Paid By </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='bor-b1'>
                                            <td>2022-03-07 </td>
                                            <td>INV/SL0101</td>
                                            <td>$ 0.00 </td>
                                            <td>Cash</td>
                                            <td>
                                                <span className='me-2'>
                                                    <img src='assets/img/icons/printer.svg' alt='img' />
                                                </span>
                                                <span className='me-2' data-bs-target='#editpayment'
                                                    data-bs-toggle='modal' data-bs-dismiss='modal'>
                                                    <img src='assets/img/icons/edit.svg' alt='img' />
                                                </span>
                                                <span className='me-2 confirm-text'>
                                                    <img src='assets/img/icons/delete.svg' alt='img' />
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='modal fade' id='createpayment' tabIndex='-1' aria-labelledby='createpayment' aria-hidden='true'>
                <div className='modal-dialog modal-lg modal-dialog-centered'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title'>Create Payment</h5>
                            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'><span
                                aria-hidden='true'>×</span></button>
                        </div>
                        <div className='modal-body'>
                            <div className='row'>
                                <div className='col-lg-6 col-sm-12 col-12'>
                                    <div className='form-group'>
                                        <label>Customer</label>
                                        <div className='input-groupicon'>
                                            <input type='text' value='2022-03-07' className='datetimepicker' />
                                            <div className='addonset'>
                                                <img src='assets/img/icons/calendars.svg' alt='img' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-sm-12 col-12'>
                                    <div className='form-group'>
                                        <label>Reference</label>
                                        <input type='text' value='INV/SL0101' />
                                    </div>
                                </div>
                                <div className='col-lg-6 col-sm-12 col-12'>
                                    <div className='form-group'>
                                        <label>Received Amount</label>
                                        <input type='text' value='0.00' />
                                    </div>
                                </div>
                                <div className='col-lg-6 col-sm-12 col-12'>
                                    <div className='form-group'>
                                        <label>Paying Amount</label>
                                        <input type='text' value='0.00' />
                                    </div>
                                </div>
                                <div className='col-lg-6 col-sm-12 col-12'>
                                    <div className='form-group'>
                                        <label>Payment type</label>
                                        <select className='form-select'>
                                            <option>Cash</option>
                                            <option>Online</option>
                                            <option>Inprogress</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-lg-12'>
                                    <div className='form-group mb-0'>
                                        <label>Note</label>
                                        <textarea className='form-control'></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-submit'>Submit</button>
                            <button type='button' className='btn btn-cancel' data-bs-dismiss='modal'>Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='modal fade' id='editpayment' tabIndex='-1' aria-labelledby='editpayment' aria-hidden='true'>
                <div className='modal-dialog modal-lg modal-dialog-centered'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title'>Edit Payment</h5>
                            <button type='button' className='close' data-bs-dismiss='modal' aria-label='Close'><span
                                aria-hidden='true'>×</span></button>
                        </div>
                        <div className='modal-body'>
                            <div className='row'>
                                <div className='col-lg-6 col-sm-12 col-12'>
                                    <div className='form-group'>
                                        <label>Customer</label>
                                        <div className='input-groupicon'>
                                            <input type='text' value='2022-03-07' className='datetimepicker' />
                                            <div className='addonset'>
                                                <img src='assets/img/icons/datepicker.svg' alt='img' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-sm-12 col-12'>
                                    <div className='form-group'>
                                        <label>Reference</label>
                                        <input type='text' value='INV/SL0101' />
                                    </div>
                                </div>
                                <div className='col-lg-6 col-sm-12 col-12'>
                                    <div className='form-group'>
                                        <label>Received Amount</label>
                                        <input type='text' value='0.00' />
                                    </div>
                                </div>
                                <div className='col-lg-6 col-sm-12 col-12'>
                                    <div className='form-group'>
                                        <label>Paying Amount</label>
                                        <input type='text' value='0.00' />
                                    </div>
                                </div>
                                <div className='col-lg-6 col-sm-12 col-12'>
                                    <div className='form-group'>
                                        <label>Payment type</label>
                                        <select className='form-select'>
                                            <option>Cash</option>
                                            <option>Online</option>
                                            <option>Inprogress</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-lg-12'>
                                    <div className='form-group mb-0'>
                                        <label>Note</label>
                                        <textarea className='form-control'></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-submit'>Submit</button>
                            <button type='button' className='btn btn-cancel' data-bs-dismiss='modal'>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SalesList;
