/* eslint-disable react-hooks/exhaustive-deps */
import { Pagination } from 'antd';
import { isEmpty, orderBy } from 'lodash';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import plus from '../../assets/img/icons/plus.svg';
import { dataPaginationFn, getSizeLabel } from '../../config/helpers/dataHelpers';
import { getSalesRequest, setSalesPageNo } from '../../config/store/actions/saleActions';
import WithDataLoader from '../common/loaders/WithDataLoader';
import WithNoDataLoader from '../common/loaders/WithNoDataLoader';
import AddSalesForm from './AddSalesForm';

const SalesList = () => {
    const dispatch = useDispatch();
    const { allSales, loading, salesPageNo } = useSelector((state) => state.sales);

    const [showForm, setShowForm] = useState(false);
    const [pageItems, setPageItems] = useState(9);

    const onPagination = (page) => {
        dispatch(setSalesPageNo(page))
    }

    useEffect(() => {
        dispatch(getSalesRequest());
    }, []);

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
                                <div className='btn btn-added' onClick={() => {
                                    setShowForm(!showForm);
                                    setPageItems(showForm ? 9 : 6)
                                }}>
                                    {showForm ? <i className="fa-solid fa-eye-slash me-2"></i> : <img src={plus} alt='img' className='me-1' />}
                                    {showForm ? 'Hide Form' : 'Add Sales'}
                                </div>
                            </div>
                        </div>

                        <div className='card'>
                            {showForm && <AddSalesForm />}
                            {!isEmpty(allSales) && loading && <WithDataLoader classname='mb-3' />}
                            <div className="card-body">
                                {isEmpty(allSales) && loading ? <WithNoDataLoader /> : <div className='table-responsive'>
                                    <table className='table  datanew'>
                                        <thead>
                                            <tr>
                                                <th>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' id='select-all' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </th>
                                                <th>Reference</th>
                                                <th>Product Code</th>
                                                <th>Color</th>
                                                <th>Size</th>
                                                {/* <th>Status</th> */}
                                                <th>Payment Status</th>
                                                <th>Amount (UGX)</th>
                                                {/* <th>Paid</th>
                                            <th>Due</th> */}
                                                <th>Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dataPaginationFn(orderBy(allSales, ['date'], ['desc']), pageItems, salesPageNo).map((sale, i) => {
                                                return (
                                                    <tr key={i}>
                                                        <td>
                                                            <label className='checkboxs'>
                                                                <input type='checkbox' />
                                                                <span className='checkmarks'></span>
                                                            </label>
                                                        </td>
                                                        <td>{sale.reference}</td>
                                                        <td>{sale.artNumber}</td>
                                                        <td>{sale.color}</td>
                                                        <td>{`${getSizeLabel(sale.size)} (${sale.size})`}</td>
                                                        {/* <td><span className={`badges ${sale.status === 'Completed' ? 'bg-lightgreen' : 'bg-lightred'}`}>{sale.status}</span></td> */}
                                                        <td><span className={`badges ${sale.payment === 'Paid' ? 'bg-lightgreen' : 'bg-lightred'}`}>{sale.payment}</span></td>
                                                        <td>{parseInt(sale.total, 10).toLocaleString()}</td>
                                                        {/* <td>{sale.paid}</td>
                                                    <td className='text-red'>{sale.due}</td> */}
                                                        <td>{sale.date}</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                    <div className='my-2'>
                                        <Pagination onChange={onPagination} responsive hideOnSinglePage align="center" defaultCurrent={salesPageNo} total={allSales.length} />
                                    </div>
                                </div>}</div>
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

// How does it look!? Any comments or areas to improve!?
//  - I am currently improving it to also work for a Car Resell Business (Car Bond). I have someone there who wants it too.
