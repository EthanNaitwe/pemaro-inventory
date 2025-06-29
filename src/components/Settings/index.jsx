/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import datepicker from '../../assets/img/icons/datepicker.svg';
import deleteImg from '../../assets/img/icons/delete.svg';
import edit from '../../assets/img/icons/edit.svg';
import printer from '../../assets/img/icons/printer.svg';
import { getSettings } from '../../config/store/actions/settingsActions';
import NotificationsCard from '../Dashboard/NotificationsCard';
import { isEmpty } from 'lodash';
import ChangePassword from '../Dashboard/ChangePassword';
import TabMenu from '../common/TabMenu';

const SettingsHome = () => {
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState('system-settings');
    const { systemSettings } = useSelector((state) => state.settings);

    useEffect(() => {
        isEmpty(systemSettings) && dispatch(getSettings());
    }, []);

    const tabs = [
        { value: 'system-settings', label: 'System Settings' },
        // { value: 'change-password', label: 'Change Password' }
    ];


    return (
        <div>
            <div className='page-wrapper'>
                <div className='content'>
                    <div className="page-header">
                        <div className="page-title">
                            <h4>Settings</h4>
                            <h6>Manage your Settings</h6>
                        </div>
                    </div>

                    <TabMenu
                        tabs={tabs}
                        activeTab={activeTab}
                        onTabChange={setActiveTab}
                    />
                    {activeTab === "system-settings" && <NotificationsCard title="System Settings" />}
                    {activeTab === "change-password" && <ChangePassword title="Change Password" />}
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
                                            {/* <input type='text' value='2022-03-07' className='datetimepicker' /> */}
                                            <a className='scanner-set input-group-text'>
                                                <img src={datepicker} alt='img' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-sm-12 col-12'>
                                    <div className='form-group'>
                                        <label>Reference</label>
                                        {/* <input type='text' value='INV/SL0101' /> */}
                                    </div>
                                </div>
                                <div className='col-lg-6 col-sm-12 col-12'>
                                    <div className='form-group'>
                                        <label>Received Amount</label>
                                        {/* <input type='text' value='1500.00' /> */}
                                    </div>
                                </div>
                                <div className='col-lg-6 col-sm-12 col-12'>
                                    <div className='form-group'>
                                        <label>Paying Amount</label>
                                        {/* <input type='text' value='1500.00' /> */}
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
                                            {/* <input type='text' value='2022-03-07' className='datetimepicker' /> */}
                                            <a className='scanner-set input-group-text'>
                                                <img src={datepicker} alt='img' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-sm-12 col-12'>
                                    <div className='form-group'>
                                        <label>Reference</label>
                                        {/* <input type='text' value='INV/SL0101' /> */}
                                    </div>
                                </div>
                                <div className='col-lg-6 col-sm-12 col-12'>
                                    <div className='form-group'>
                                        <label>Received Amount</label>
                                        {/* <input type='text' value='1500.00' /> */}
                                    </div>
                                </div>
                                <div className='col-lg-6 col-sm-12 col-12'>
                                    <div className='form-group'>
                                        <label>Paying Amount</label>
                                        {/* <input type='text' value='1500.00' /> */}
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

export default SettingsHome;
