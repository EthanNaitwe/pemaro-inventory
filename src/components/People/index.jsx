/* eslint-disable react-hooks/exhaustive-deps */
import { Empty } from 'antd';
import { isEmpty } from 'lodash';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import customer1 from '../../assets/img/customer/customer1.jpg';
import customer5 from '../../assets/img/customer/customer5.jpg';
import datepicker from '../../assets/img/icons/datepicker.svg';
import deleteImg from '../../assets/img/icons/delete.svg';
import edit from '../../assets/img/icons/edit.svg';
import printer from '../../assets/img/icons/printer.svg';
import search from '../../assets/img/icons/search-whites.svg';
import { getAllUsers } from '../../config/store/actions/userActions';
import WithDataLoader from '../common/loaders/WithDataLoader';
import WithNoDataLoader from '../common/loaders/WithNoDataLoader';

const PeopleList = () => {
    const dispatch = useDispatch();
    const { allUsers: _allUsers, gettingUsers } = useSelector((state) => state.users);
    const { authUser } = useSelector((state) => state.users);

    // Filter users based on authUser.role
    const allUsers = _allUsers.filter((item) => {
        if (authUser.role === 'Stuff') {
            return item.role === 'Stuff'; // Return only users with role 'Stuff'
        }
        return true; // Return all users for other roles
    });

    useEffect(() => {
        dispatch(getAllUsers());
    }, []);

    return (
        <div>
            <div className='page-wrapper'>
                <div className='content'>
                    <div className="page-header">
                        <div className="page-title">
                            <h4>User List</h4>
                            <h6>Manage your Users</h6>
                        </div>
                    </div>
                    <div className='card'>
                        {!isEmpty(allUsers) && gettingUsers && <WithDataLoader />}
                        <div className='card-body'>
                            {isEmpty(allUsers) && !gettingUsers && <Empty />}
                            <div className='card' id='filter_inputs'>
                                <div className='card-body pb-0'>
                                    <div className='row'>
                                        <div className='col-lg-2 col-sm-6 col-12'>
                                            <div className='form-group'>
                                                <input type='text' placeholder='Enter User Code' />
                                            </div>
                                        </div>
                                        <div className='col-lg-2 col-sm-6 col-12'>
                                            <div className='form-group'>
                                                <input type='text' placeholder='Enter User Name' />
                                            </div>
                                        </div>
                                        <div className='col-lg-2 col-sm-6 col-12'>
                                            <div className='form-group'>
                                                <input type='text' placeholder='Enter Phone Number' />
                                            </div>
                                        </div>
                                        <div className='col-lg-2 col-sm-6 col-12'>
                                            <div className='form-group'>
                                                <input type='text' placeholder='Enter Email' />
                                            </div>
                                        </div>
                                        <div className='col-lg-1 col-sm-6 col-12  ms-auto'>
                                            <div className='form-group'>
                                                <a className='btn btn-filters ms-auto'>
                                                    <img src={search} alt='img' />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {isEmpty(allUsers) && gettingUsers && <WithNoDataLoader />}
                            {!isEmpty(allUsers) &&
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
                                                <th>User Name</th>
                                                <th>Email</th>
                                                <th>Gender</th>
                                                <th>Phone</th>
                                                <th>Address</th>
                                                <th>Role</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {allUsers
                                                .filter(item => item.role !== 'Support')
                                                .map((item, i) => (
                                                    <tr key={i}>
                                                        <td>
                                                            <label className='checkboxs'>
                                                                <input type='checkbox' />
                                                                <span className='checkmarks'></span>
                                                            </label>
                                                        </td>
                                                        <td className='productimgname'>
                                                            <span className='product-img'>
                                                                <img src={item.gender === 'Male' ? customer5 : customer1} alt='people' />
                                                            </span>
                                                            <span>{`${item.surname} ${item.other_names}`}</span>
                                                        </td>
                                                        <td>{item.email}</td>
                                                        <td>{item.gender}</td>
                                                        <td>{item.phone_number}</td>
                                                        <td>{item.address}</td>
                                                        <td>{item.role}</td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>}
                        </div>
                    </div>
                </div>
            </div >

            <div className='modal fade' id='showpayment' tabIndex='-1' aria-labelledby='showpayment' aria-hidden='true'>
                <div className='modal-dialog modal-lg'>
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
                                            <td>$ 1500.00 </td>
                                            <td>Cash</td>
                                            <td>
                                                <span className='me-2'>
                                                    <img src={printer} alt='img' />
                                                </span>
                                                <span className='me-2' data-bs-target='#editpayment'
                                                    data-bs-toggle='modal' data-bs-dismiss='modal'>
                                                    <img src={edit} alt='img' />
                                                </span>
                                                <span className='me-2 confirm-text'>
                                                    <img src={deleteImg} alt='img' />
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
                <div className='modal-dialog modal-lg'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title'>Create Payment</h5>
                            <button type='button' className='close' data-bs-dismiss='modal' aria-label='Close'><span
                                aria-hidden='true'>×</span></button>
                        </div>
                        <div className='modal-body'>
                            <div className='row'>
                                <div className='col-lg-6 col-sm-12 col-12'>
                                    <div className='form-group'>
                                        <label>Customer</label>
                                        <div className='input-group'>
                                            <input type='text' value='2022-03-07' className='datetimepicker' />
                                            <a className='scanner-set input-group-text'>
                                                <img src={datepicker} alt='img' />
                                            </a>
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
                                        <input type='text' value='1500.00' />
                                    </div>
                                </div>
                                <div className='col-lg-6 col-sm-12 col-12'>
                                    <div className='form-group'>
                                        <label>Paying Amount</label>
                                        <input type='text' value='1500.00' />
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
                                    <div className='form-group'>
                                        <label>Note</label>
                                        <textarea className='form-control'></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-submit'>Submit</button>
                            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='modal fade' id='editpayment' tabIndex='-1' aria-labelledby='editpayment' aria-hidden='true'>
                <div className='modal-dialog modal-lg'>
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
                                        <div className='input-group'>
                                            <input type='text' value='2022-03-07' className='datetimepicker' />
                                            <a className='scanner-set input-group-text'>
                                                <img src={datepicker} alt='img' />
                                            </a>
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
                                        <input type='text' value='1500.00' />
                                    </div>
                                </div>
                                <div className='col-lg-6 col-sm-12 col-12'>
                                    <div className='form-group'>
                                        <label>Paying Amount</label>
                                        <input type='text' value='1500.00' />
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
                                    <div className='form-group'>
                                        <label>Note</label>
                                        <textarea className='form-control'></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-submit'>Submit</button>
                            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PeopleList;
