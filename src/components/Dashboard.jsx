/* eslint-disable react-hooks/exhaustive-deps */
import { Empty } from 'antd';
import { isEmpty, orderBy } from 'lodash';
import { DateTime } from "luxon";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dash1Img from '../assets/img/icons/dash1.svg';
import dash2Img from '../assets/img/icons/dash2.svg';
import dash3Img from '../assets/img/icons/dash3.svg';
import dash4Img from '../assets/img/icons/dash4.svg';
import { calculateDateRangeAmounts } from '../config/helpers/dashboard.helpers';
import { getAllExpenses } from '../config/store/actions/expenseActions';
import { getSalesRequest } from '../config/store/actions/saleActions';
import LineDashed from './Charts/LineDashed';

const Dashboard = () => {
    const dispatch = useDispatch();
    const { allProducts } = useSelector((state) => state.products);
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

    return (
        <div className="page-wrapper">
            <div className="content">
                <div className="row">
                    <div className="col-lg-3 col-sm-6 col-12">
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
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6 d-flex">
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
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-7 col-sm-12 col-12 d-flex">
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
                    </div>
                    <div className="col-lg-5 col-sm-12 col-12 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header pb-0 d-flex justify-content-between align-items-center">
                                <h4 className="card-title mb-0">Recently Added Products</h4>
                                <div className="dropdown">
                                    <span data-bs-toggle='dropdown' aria-expanded='false'
                                        className="dropset">
                                        <i className="fa fa-ellipsis-v"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive dataview">
                                    {isEmpty(allProducts) && <Empty />}
                                    {!isEmpty(allProducts) && <table className="table datatable">
                                        <thead>
                                            <tr>
                                                <th>Sno</th>
                                                <th>Name</th>
                                                <th>Code</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orderBy(allProducts, ['date'], ['desc']).map(prod => ({ name: prod.name, artNumber: prod.artNumber })).slice(0, 4).map((prod, i) => {
                                                return (<tr key={i}>
                                                    <td>{i + 1}</td>
                                                    <td className="productimgname">
                                                        <span className="product-img">
                                                            <i className="product-img-def fas fa-solid fa-person-dress fa-xl"></i>
                                                        </span>
                                                        <span>{prod.name}</span>
                                                    </td>
                                                    <td>{prod.artNumber}</td>
                                                </tr>)
                                            })}
                                        </tbody>
                                    </table>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
