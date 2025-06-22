/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { yupResolver } from '@hookform/resolvers/yup';
import { isEmpty } from 'lodash';
import { DateTime } from "luxon";
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from "yup";
import dash1Img from '../../assets/img/icons/dash1.svg';
import dash2Img from '../../assets/img/icons/dash2.svg';
import dash3Img from '../../assets/img/icons/dash3.svg';
import dash4Img from '../../assets/img/icons/dash4.svg';
import { calculateDateRangeAmounts } from '../../config/helpers/dashboard.helpers';
import { getAllExpenses } from '../../config/store/actions/expenseActions';
import { getSalesRequest } from '../../config/store/actions/saleActions';
import MethodsReport from './MethodsReport';
import TopSalesReport from './TopSalesReport';
import BottomSalesReport from './BottomSalesReport';

const Dashboard = () => {
    const dispatch = useDispatch();
    const { allExpenses } = useSelector((state) => state.expenses);
    const { allSales } = useSelector((state) => state.sales);

    useEffect(() => {
        if (isEmpty(allSales)) dispatch(getSalesRequest());
        if (isEmpty(allExpenses)) dispatch(getAllExpenses());
    }, []);

    let now = DateTime.local();
    const [startOfWeek] = useState(now.startOf('week').toFormat('dd/MM/yyyy'));
    const [endOfWeek] = useState(now.endOf('week').toFormat('dd/MM/yyyy'));
    const [startOfMonth] = useState(now.startOf('month').toFormat('dd/MM/yyyy'));
    const [endOfMonth] = useState(now.endOf('month').toFormat('dd/MM/yyyy'));

    const schema = yup
        .object({
            date_range: yup.string().required(),
            stuff: yup.string().required(),
        })
        .required();

    useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            date_range: 'all',
            stuff: 'all',
        },
    });

    return (
        <div className="page-wrapper">
            <div className="content">
                <div className='page-header'>
                    <div className='page-title'>
                        <h4>Dashboard</h4>
                        <h6>System Reports</h6>
                    </div>
                </div>
                <div className="row">
                    {/* <div className="date-range-border col-lg-4 col-sm-6 col-12"></div>
                    <div className='date-range col-lg-4 col-sm-6 col-12'>
                        <div className='form-group'>
                            <select className='form-select' style={{ lineHeight: '1.2rem', padding: '0.25rem 0.5rem' }} {...register("date_range")}
                                aria-invalid={errors.date_range ? "true" : "false"} >
                                {dateRangeOptions.map((item) => (
                                    <option
                                        key={item.value}
                                        value={item.value}>
                                        {item.label === "All" ? "All Sales" : item.label}
                                    </option>
                                ))}
                            </select>
                            <p>{errors.date_range?.message && "This field is required"}</p>
                        </div>
                    </div>
                    <div className="date-range-border col-lg-4 col-sm-6 col-12"></div> */}
                    {/* <div className="col-lg-3 col-sm-6 col-12">
                        <div className="dash-widget">
                            <div className="dash-widgetimg">
                                <span>
                                    <img src={dash1Img} alt='img' />
                                </span>
                            </div>
                            <div className="dash-widgetcontent">
                                <h5>UGX <span className="counters" data-count={`${calculateDateRangeAmounts(allSales, startOfWeek, endOfWeek)}`}>{calculateDateRangeAmounts(allSales, startOfWeek, endOfWeek)}</span></h5>
                                <h6>Weekly Sales</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="dash-widget dash1">
                            <div className="dash-widgetimg">
                                <span>
                                    <img src={dash2Img} alt='img' />
                                </span>
                            </div>
                            <div className="dash-widgetcontent">
                                <h5>UGX <span className="counters" data-count={`${calculateDateRangeAmounts(allSales, startOfMonth, endOfMonth)}`}>{calculateDateRangeAmounts(allSales, startOfMonth, endOfMonth)}</span></h5>
                                <h6>Monthly Sales</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="dash-widget dash2">
                            <div className="dash-widgetimg">
                                <span>
                                    <img src={dash3Img} alt='img' />
                                </span>
                            </div>
                            <div className="dash-widgetcontent">
                                <h5>UGX <span className="counters" data-count={`${calculateDateRangeAmounts(allExpenses, startOfWeek, endOfWeek)}`}>{calculateDateRangeAmounts(allExpenses, startOfWeek, endOfWeek)}</span></h5>
                                <h6>Weekly Expenses</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="dash-widget dash3">
                            <div className="dash-widgetimg">
                                <span>
                                    <img src={dash4Img} alt='img' />
                                </span>
                            </div>
                            <div className="dash-widgetcontent">
                                <h5>UGX <span className="counters" data-count={`${calculateDateRangeAmounts(allExpenses, startOfMonth, endOfMonth)}`}>{calculateDateRangeAmounts(allExpenses, startOfMonth, endOfMonth)}</span></h5>
                                <h6>Monthly Expenses</h6>
                            </div>
                        </div>
                    </div> */}
                    <MethodsReport title="Payment Methods' Report" />
                    <TopSalesReport title="Top Sales Report" />
                    <BottomSalesReport title="Bottom Sales Report" />
                    {/* <div className="col-lg-3 col-sm-6 col-6 d-flex">
                        <div className="dash-count">
                            <div className="dash-counts">
                                <h4>100</h4>
                                <h5>Customers</h5>
                            </div>
                            <div className="dash-imgs">
                                <i data-feather='user'></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6 d-flex">
                        <div className="dash-count das1">
                            <div className="dash-counts">
                                <h4>100</h4>
                                <h5>Suppliers</h5>
                            </div>
                            <div className="dash-imgs">
                                <i data-feather='user-check'></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6 d-flex">
                        <div className="dash-count das2">
                            <div className="dash-counts">
                                <h4>100</h4>
                                <h5>Purchase Invoice</h5>
                            </div>
                            <div className="dash-imgs">
                                <i data-feather='file-text'></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6 d-flex">
                        <div className="dash-count das3">
                            <div className="dash-counts">
                                <h4>100</h4>
                                <h5>Sales Invoice</h5>
                            </div>
                            <div className="dash-imgs">
                                <i data-feather='file'></i>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="col-lg-12 col-sm-12 col-12 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header pb-0 d-flex justify-content-between align-items-center">
                                <h5 className="card-title mb-0">Purchase & Sales</h5>
                                <div className="graph-sets">
                                </div>
                            </div>
                            <div className="card-body">
                                <LineDashed />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
