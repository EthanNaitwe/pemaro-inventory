/* eslint-disable react-hooks/exhaustive-deps */
import { Empty, Pagination } from 'antd';
import { isEmpty, orderBy } from 'lodash';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from "yup";
import plus from '../../assets/img/icons/plus.svg';
import { dataPaginationFn, dateRangeOptions } from '../../config/helpers/dataHelpers';
import { getSalesRequest, setSalesPageNo, setSalesToDisplay, setShowSalesGrid } from '../../config/store/actions/saleActions';
import WithDataLoader from '../common/loaders/WithDataLoader';
import WithNoDataLoader from '../common/loaders/WithNoDataLoader';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import AddSalesGrid from './AddSalesGrid';
import { DateTime } from 'luxon';

const SalesList = () => {
    const dispatch = useDispatch();
    const { allSales: _allSales, loading, salesPageNo, showSalesGrid, salesToDisplay } = useSelector((state) => state.sales);
    const { authUser } = useSelector((state) => state.users);

    const [pageItems, setPageItems] = useState(9);

    let now = DateTime.local();

    const [dateToday] = useState(now.toFormat('dd/MM/yyyy'));
    const [dateYesterday] = useState(now.plus({ days: -1 }).toFormat('dd/MM/yyyy'));

    const schema = yup
        .object({
            category: yup.string().required(),
            amount: yup.string().required(),
            description: yup.string().required(),

        })
        .required();

    const {
        watch,
        register,
        formState: { errors } } = useForm({
            resolver: yupResolver(schema),
            defaultValues: {
                date_range: 'all',
            },
        });
    let watchDateRange = watch('date_range');

    const onPagination = (page) => dispatch(setSalesPageNo(page));

    useEffect(() => {
        dispatch(getSalesRequest());
    }, []);

    // Filter users based on authUser.role
    const allSales = _allSales.filter((item) => {
        if (authUser.role === 'Stuff') {
            return item.user_id === authUser.id; // Return only my sales if my role is 'Stuff'
        }
        return true; // Return all sales for other roles
    });

    useEffect(() => {
        switch (watchDateRange) {
            case "today":
                dispatch(setSalesToDisplay(allSales.filter((item) => item.date === dateToday)));
                break;

            case "yesterday":
                dispatch(setSalesToDisplay(allSales.filter((item) => item.date === dateYesterday)));
                break;

            default:
                dispatch(setSalesToDisplay(allSales));
        }
    }, [watchDateRange, _allSales]);


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
                            {!showSalesGrid && <div className='date-range col-lg-3 col-sm-6 col-6'>
                                <div className='form-group'>
                                    <select className='form-select' style={{ lineHeight: '1.2rem', padding: '0.25rem 0.5rem' }} {...register("date_range")}
                                        aria-invalid={errors.category ? "true" : "false"} >
                                        {/* <option value=''>Choose Date Range</option> */}
                                        {dateRangeOptions.map((item) => (
                                            <option
                                                key={item.value}
                                                value={item.value}>
                                                {item.label}
                                            </option>
                                        ))}
                                    </select>
                                    <p>{errors.category?.message && "This field is required"}</p>
                                </div>
                            </div>}
                            <div className='page-btn'>
                                <div className='btn btn-added' onClick={() => {
                                    dispatch(setShowSalesGrid(!showSalesGrid));
                                    setPageItems(showSalesGrid ? 9 : 6)
                                }}>
                                    {showSalesGrid ? <i className="fa-solid fa-eye-slash me-2"></i> : <img src={plus} alt='img' className='me-1' />}
                                    {showSalesGrid ? 'Hide Form' : 'Add Sales'}
                                </div>
                            </div>
                        </div>

                        <div className='card'>
                            {/* {showSalesGrid && <AddSalesForm />} */}
                            {showSalesGrid && <AddSalesGrid />}
                            {!isEmpty(salesToDisplay) && loading && <WithDataLoader />}
                            <div className="card-body">
                                {isEmpty(salesToDisplay) && !loading && <Empty />}
                                {!showSalesGrid && isEmpty(salesToDisplay) && loading && <WithNoDataLoader />}
                                {!showSalesGrid && !isEmpty(salesToDisplay) && <div className='table-responsive'>
                                    <table className='table  datanew'>
                                        <thead>
                                            <tr>
                                                <th>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' id='select-all' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </th>
                                                {/* <th>Reference</th> */}
                                                <th>Product</th>
                                                <th>Payment Status</th>
                                                <th>Quantity</th>
                                                <th>Price per Item</th>
                                                <th>Total Amount (UGX)</th>
                                                <th>Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dataPaginationFn(orderBy(salesToDisplay, ['date'], ['desc']), pageItems, salesPageNo).map((sale, i) => {
                                                return (
                                                    <tr key={i}>
                                                        <td>
                                                            <label className='checkboxs'>
                                                                <input type='checkbox' />
                                                                <span className='checkmarks'></span>
                                                            </label>
                                                        </td>
                                                        <td>{`${sale.artNumber.artNumber}: ${sale.artNumber.name}`}</td>
                                                        <td><span className={`badges ${sale.payment === 'Paid' ? 'bg-lightgreen' : 'bg-lightred'}`}>{sale.payment}</span></td>
                                                        <td>{sale.quantity}</td>
                                                        <td>{parseInt(sale.amount, 10).toLocaleString()}</td>
                                                        <td>{parseInt(sale.amount * sale.quantity, 10).toLocaleString()}</td>
                                                        <td>{sale.date}</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                    <div className='my-2'>
                                        <Pagination onChange={onPagination} responsive hideOnSinglePage align="center" defaultCurrent={salesPageNo} total={salesToDisplay.length} />
                                    </div>
                                </div>}
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
