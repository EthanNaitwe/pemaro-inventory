/* eslint-disable react-hooks/exhaustive-deps */
import { Empty } from "antd";
import { isEmpty } from "lodash";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllExpenses, setShowCreateForm } from "../../config/store/actions/expenseActions";
import WithDataLoader from "../common/loaders/WithDataLoader";
import WithNoDataLoader from "../common/loaders/WithNoDataLoader";
import AddExpenseForm from "./AddExpenseForm";

const Expense = () => {
    const dispatch = useDispatch();
    const { allExpenses, loading, showCreateForm } = useSelector((state) => state.expenses);

    const setShowForm = () => dispatch(setShowCreateForm(!showCreateForm));

    useEffect(() => {
        dispatch(getAllExpenses());
    }, []);

    return (
        <div className="page-wrapper">
            <div className="content">
                <div className="page-header">
                    <div className="page-title">
                        <h4>Expenses List </h4>
                        <h6>Manage your purchases</h6>
                    </div>
                    <div className="page-btn">
                        <div className="btn btn-added" onClick={() => setShowForm()}>
                            Add New Expense
                        </div>
                    </div>
                </div>

                <div className="card">
                    {showCreateForm && <AddExpenseForm />}
                    {!isEmpty(allExpenses) && loading && <WithDataLoader />}
                    <div className="card-body">
                        {isEmpty(allExpenses) && !loading && <Empty />}
                        {isEmpty(allExpenses) &&
                            loading &&
                            <WithNoDataLoader />}
                        <div className="card" id="filter_inputs">
                            <div className="card-body pb-0">
                                <div className="row">
                                    <div className="col-lg-2 col-sm-6 col-12">
                                        <div className="form-group">
                                            <div className="input-groupicon">
                                                <input type="text" className="datetimepicker cal-icon"
                                                    placeholder="Choose Date" />
                                                <div className="addonset">
                                                    <img src="assets/img/icons/calendars.svg" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-sm-6 col-12">
                                        <div className="form-group">
                                            <input type="text" placeholder="Enter Reference" />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-sm-6 col-12">
                                        <div className="form-group">
                                            <select className="form-select">
                                                <option>Choose Category</option>
                                                <option>Computers</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-sm-6 col-12">
                                        <div className="form-group">
                                            <select className="form-select">
                                                <option>Choose Status</option>
                                                <option>Complete</option>
                                                <option>Inprogress</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-1 col-sm-6 col-12 ms-auto">
                                        <div className="form-group">
                                            <a className="btn btn-filters ms-auto"><img
                                                src="assets/img/icons/search-whites.svg" alt="img" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{!isEmpty(allExpenses) &&
                            <div className="table-responsive">
                                <table className="table  datanew">
                                    <thead>
                                        <tr>
                                            <th>
                                                <label className="checkboxs">
                                                    <input type="checkbox" id="select-all" />
                                                    <span className="checkmarks"></span>
                                                </label>
                                            </th>
                                            <th>Category Name</th>
                                            <th>Reference</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                            <th>Amount (UGX)</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {allExpenses.map((exp, i) => (
                                            <tr key={i}>
                                                <td>
                                                    <label className="checkboxs">
                                                        <input type="checkbox" />
                                                        <span className="checkmarks"></span>
                                                    </label>
                                                </td>
                                                <td>{exp.category}</td>
                                                <td>{exp.ref}</td>
                                                <td>{exp.date}</td>
                                                {/* bg-lightred */}
                                                <td><span className={`badges ${exp.status === "Active" ? "bg-lightgreen" : "bg-lightred"}`}>{exp.status}</span></td>
                                                <td>{parseInt(exp.amount, 10).toLocaleString()}</td>
                                                <td>{exp.description}</td>
                                            </tr>))}
                                    </tbody>
                                </table>
                            </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expense;
