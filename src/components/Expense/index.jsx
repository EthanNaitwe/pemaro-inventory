/* eslint-disable react-hooks/exhaustive-deps */
import { yupResolver } from "@hookform/resolvers/yup";
import { Empty } from "antd";
import { isEmpty } from "lodash";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import plus from '../../assets/img/icons/plus.svg';
import { dateRangeOptions } from "../../config/helpers/dataHelpers";
import { getAllExpenses, setExpensesToDisplay, setShowCreateForm } from "../../config/store/actions/expenseActions";
import WithDataLoader from "../common/loaders/WithDataLoader";
import WithNoDataLoader from "../common/loaders/WithNoDataLoader";
import AddExpenseForm from "./AddExpenseForm";

const Expense = () => {
    const dispatch = useDispatch();
    const { allExpenses: _allExpenses, loading, showCreateForm, expensesToDisplay } = useSelector((state) => state.expenses);
    const { authUser } = useSelector((state) => state.users);

    const setShowForm = () => dispatch(setShowCreateForm(!showCreateForm));

    let now = DateTime.local();

    const [dateToday] = useState(now.toFormat('dd/MM/yyyy'));
    const [dateYesterday] = useState(now.plus({ days: -1 }).toFormat('dd/MM/yyyy'));

    const schema = yup
        .object({
            date_range: yup.string().required(),
            stuff: yup.string().required(),

        })
        .required();

    const {
        watch,
        register,
        formState: { errors } } = useForm({
            resolver: yupResolver(schema),
            defaultValues: {
                date_range: 'all',
                stuff: 'all',
            },
        });

    let watchDateRange = watch('date_range');

    useEffect(() => {
        dispatch(getAllExpenses());
        return () => dispatch(setShowCreateForm(false));
    }, []);

    // Filter users based on authUser.role
    const allExpenses = _allExpenses.filter((item) => {
        if (authUser.role === 'Stuff') {
            return item.user_id === authUser.id; // Return only my sales if my role is 'Stuff'
        }
        return true; // Return all sales for other roles
    });

    useEffect(() => {
        switch (watchDateRange) {
            case "today":
                dispatch(setExpensesToDisplay(allExpenses.filter((item) => item.date === dateToday)));
                break;

            case "yesterday":
                dispatch(setExpensesToDisplay(allExpenses.filter((item) => item.date === dateYesterday)));
                break;

            default:
                dispatch(setExpensesToDisplay(allExpenses));
        }
    }, [watchDateRange, _allExpenses]);

    return (
        <div className="page-wrapper">
            <div className="content">
                <div className="page-header">
                    <div className="page-title">
                        <h4>Expenses List</h4>
                        <h6>Manage your purchases</h6>
                    </div>
                    {/* <div className='date-range col-lg-3 col-sm-6 col-6'>
                        <div className='form-group'>
                            <select className='form-select' style={{ lineHeight: '1.2rem', padding: '0.25rem 0.5rem' }} {...register("date_range")}
                                aria-invalid={errors.category ? "true" : "false"} >
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
                    </div> */}
                    <div className="page-btn">
                        <div className="btn btn-added" onClick={() => setShowForm()}>
                            {showCreateForm ? <i className="fa-solid fa-eye-slash me-2"></i> : <img src={plus} alt='img' className='me-1' />}
                            {showCreateForm ? 'Hide Form' : 'Add New Expense'}
                        </div>
                    </div>
                </div>

                <div className="card">
                    {showCreateForm && <AddExpenseForm />}
                    {!isEmpty(expensesToDisplay) && loading && <WithDataLoader />}
                    <div className="card-body">
                        {isEmpty(expensesToDisplay) && !loading && <Empty />}
                        {isEmpty(expensesToDisplay) && loading && <WithNoDataLoader />}
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
                        </div>{!isEmpty(expensesToDisplay) &&
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
                                            <th>Status</th>
                                            <th>Amount (UGX)</th>
                                            <th>Description</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {expensesToDisplay.map((exp, i) => (
                                            <tr key={i}>
                                                <td>
                                                    <label className="checkboxs">
                                                        <input type="checkbox" />
                                                        <span className="checkmarks"></span>
                                                    </label>
                                                </td>
                                                <td>{exp.category}</td>
                                                <td>{exp.ref}</td>
                                                <td><span className={`badges ${exp.status === "Active" ? "bg-lightgreen" : "bg-lightred"}`}>{exp.status}</span></td>
                                                <td>{parseInt(exp.amount, 10).toLocaleString()}</td>
                                                <td>{exp.description}</td>
                                                <td>{exp.date}</td>
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
