import deleteImg from '../../assets/img/icons/delete.svg';
import edit from '../../assets/img/icons/edit.svg';
import search from '../../assets/img/icons/search-whites.svg';
import printer from '../../assets/img/icons/printer.svg';
import datepicker from '../../assets/img/icons/datepicker.svg';
import customer1 from '../../assets/img/customer/customer1.jpg';
import customer2 from '../../assets/img/customer/customer2.jpg';
import customer3 from '../../assets/img/customer/customer3.jpg';
import customer4 from '../../assets/img/customer/customer4.jpg';
import customer5 from '../../assets/img/customer/customer5.jpg';
import customer6 from '../../assets/img/customer/customer6.jpg';

const PeopleList = () => {
    return (
        <div>
            <div>
                <div className='page-wrapper'>
                    <div className='content'>
                        <div className='page-header'>
                            <div className='page-title'>
                                <h4>Customer List</h4>
                                <h6>Manage your Customers</h6>
                            </div>
                            {/* <div className='page-btn'>
                                <a href='addcustomer.html' className='btn btn-added'>
                                    <img src={plus} alt='img' />
                                    Add Customer
                                </a>
                            </div> */}
                        </div>
                        <div className='card'>
                            <div className='card-body'>

                                <div className='card' id='filter_inputs'>
                                    <div className='card-body pb-0'>
                                        <div className='row'>
                                            <div className='col-lg-2 col-sm-6 col-12'>
                                                <div className='form-group'>
                                                    <input type='text' placeholder='Enter Customer Code' />
                                                </div>
                                            </div>
                                            <div className='col-lg-2 col-sm-6 col-12'>
                                                <div className='form-group'>
                                                    <input type='text' placeholder='Enter Customer Name' />
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
                                                <th>Customer Name</th>
                                                <th>code</th>
                                                <th>Customer</th>
                                                <th>Phone</th>
                                                {/* <th>email</th> */}
                                                <th>Country</th>
                                                {/* <th>Action</th> */}
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
                                                <td className='productimgname'>
                                                    <a href='javascript:void(0);' className='product-img'>
                                                        <img src={customer1} alt='product' />
                                                    </a>
                                                    <a href='javascript:void(0);'>Thomas</a>
                                                </td>
                                                <td>201</td>
                                                <td>Thomas</td>
                                                <td>+12163547758 </td>
                                                {/* <td><a href='/cdn-cgi/l/email-protection' className='__cf_email__'
                                                    data-cfemail='53273b3c3e322013362b323e233f367d303c3e'>[email&#160;protected]</a>
                                                </td> */}
                                                <td>USA</td>
                                                {/* <td>
                                                    <span className='me-3'>
                                                        <img src={edit} alt='img' />
                                                    </span>
                                                    <a className='me-3 confirm-text' href='javascript:void(0);'>
                                                        <img src={deleteImg} alt='img' />
                                                    </a>
                                                </td> */}
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </td>
                                                <td className='productimgname'>
                                                    <a href='javascript:void(0);' className='product-img'>
                                                        <img src={customer2} alt='product' />
                                                    </a>
                                                    <a href='javascript:void(0);'>Benjamin</a>
                                                </td>
                                                <td>202</td>
                                                <td>Benjamin</td>
                                                <td>123-456-888</td>
                                                {/* <td><a href='/cdn-cgi/l/email-protection' className='__cf_email__'
                                                    data-cfemail='c6a5b3b5b2a9aba3b486a3bea7abb6aaa3e8a5a9ab'>[email&#160;protected]</a>
                                                </td> */}
                                                <td>USA</td>
                                                {/* <td>
                                                    <span className='me-3'>
                                                        <img src={edit} alt='img' />
                                                    </span>
                                                    <a className='me-3 confirm-text' href='javascript:void(0);'>
                                                        <img src={deleteImg} alt='img' />
                                                    </a>
                                                </td> */}
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </td>
                                                <td className='productimgname'>
                                                    <a href='javascript:void(0);' className='product-img'>
                                                        <img src={customer3} alt='product' />
                                                    </a>
                                                    <a href='javascript:void(0);'>James</a>
                                                </td>
                                                <td>521</td>
                                                <td>James</td>
                                                <td>123-456-888</td>
                                                {/* <td><a href='/cdn-cgi/l/email-protection' className='__cf_email__'
                                                    data-cfemail='395a4c4a4d56545c4b795c41585449555c175a5654'>[email&#160;protected]</a>
                                                </td> */}
                                                <td>USA</td>
                                                {/* <td>
                                                    <span className='me-3'>
                                                        <img src={edit} alt='img' />
                                                    </span>
                                                    <a className='me-3 confirm-text' href='javascript:void(0);'>
                                                        <img src={deleteImg} alt='img' />
                                                    </a>
                                                </td> */}
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </td>
                                                <td className='productimgname'>
                                                    <a href='javascript:void(0);' className='product-img'>
                                                        <img src={customer3} alt='product' />
                                                    </a>
                                                    <a href='javascript:void(0);'>Bruklin</a>
                                                </td>
                                                <td>555</td>
                                                <td>Bruklin</td>
                                                <td>123-456-888</td>
                                                {/* <td><a href='/cdn-cgi/l/email-protection' className='__cf_email__'
                                                    data-cfemail='93f1e1e6f8fffafdd3f6ebf2fee3fff6bdf0fcfe'>[email&#160;protected]</a>
                                                </td> */}
                                                <td>Thailand</td>
                                                {/* <td>
                                                    <span className='me-3'>
                                                        <img src={edit} alt='img' />
                                                    </span>
                                                    <a className='me-3 confirm-text' href='javascript:void(0);'>
                                                        <img src={deleteImg} alt='img' />
                                                    </a>
                                                </td> */}
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </td>
                                                <td className='productimgname'>
                                                    <a href='javascript:void(0);' className='product-img'>
                                                        <img src={customer4} alt='product' />
                                                    </a>
                                                    <a href='javascript:void(0);'>Beverly</a>
                                                </td>
                                                <td>325</td>
                                                <td>Beverly</td>
                                                <td>+12163547758 </td>
                                                {/* <td><a href='/cdn-cgi/l/email-protection' className='__cf_email__'
                                                    data-cfemail='baf8dfccdfc8d6c3fadfc2dbd7cad6df94d9d5d7'>[email&#160;protected]</a>
                                                </td> */}
                                                <td>Phuket island</td>
                                                {/* <td>

                                                    <span className='me-3'>
                                                        <img src={edit} alt='img' />
                                                    </span>
                                                    <a className='me-3 confirm-text' href='javascript:void(0);'>
                                                        <img src={deleteImg} alt='img' />
                                                    </a>
                                                </td> */}
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </td>
                                                <td className='productimgname'>
                                                    <a href='javascript:void(0);' className='product-img'>
                                                        <img src={customer5} alt='product' />
                                                    </a>
                                                    <a href='javascript:void(0);'>B. Huber</a>
                                                </td>
                                                <td>589</td>
                                                <td>B. Huber </td>
                                                <td>123-456-888</td>
                                                {/* <td><a href='/cdn-cgi/l/email-protection' className='__cf_email__'
                                                    data-cfemail='266e5344435466435e474b564a430845494b'>[email&#160;protected]</a>
                                                </td> */}
                                                <td>Germany</td>
                                                {/* <td>

                                                    <span className='me-3'>
                                                        <img src={edit} alt='img' />
                                                    </span>
                                                    <a className='me-3 confirm-text' href='javascript:void(0);'>
                                                        <img src={deleteImg} alt='img' />
                                                    </a>
                                                </td> */}
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </td>
                                                <td className='productimgname'>
                                                    <a href='javascript:void(0);' className='product-img'>
                                                        <img src={customer6} alt='product' />
                                                    </a>
                                                    <a href='javascript:void(0);'>James Stawberry</a>
                                                </td>
                                                <td>254</td>
                                                <td>James Stawberry</td>
                                                <td>+12163547758 </td>
                                                {/* <td><a href='/cdn-cgi/l/email-protection' className='__cf_email__'
                                                    data-cfemail='85e6f0f6f1eae8e0f7c5e0fde4e8f5e9e0abe6eae8'>[email&#160;protected]</a>
                                                </td> */}
                                                <td>Angola</td>
                                                {/* <td>

                                                    <span className='me-3'>
                                                        <img src={edit} alt='img' />
                                                    </span>
                                                    <a className='me-3 confirm-text' href='javascript:void(0);'>
                                                        <img src={deleteImg} alt='img' />
                                                    </a>
                                                </td> */}
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </td>
                                                <td className='productimgname'>
                                                    <a href='javascript:void(0);' className='product-imgs'>
                                                        WC
                                                    </a>
                                                    <a href='javascript:void(0);'>James Stawberry</a>
                                                </td>
                                                <td>681</td>
                                                <td>Fred john</td>
                                                <td>123-456-888</td>
                                                {/* <td><a href='/cdn-cgi/l/email-protection' className='__cf_email__'
                                                    data-cfemail='62080d0a0c22071a030f120e074c010d0f'>[email&#160;protected]</a>
                                                </td> */}
                                                <td>Albania</td>

                                                {/* <td>

                                                    <span className='me-3'>
                                                        <img src={edit} alt='img' />
                                                    </span>
                                                    <a className='me-3 confirm-text' href='javascript:void(0);'>
                                                        <img src={deleteImg} alt='img' />
                                                    </a>
                                                </td> */}
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </td>
                                                <td className='productimgname'>
                                                    <a href='javascript:void(0);' className='product-img'>
                                                        <img src={customer5} alt='product' />
                                                    </a>
                                                    <a href='javascript:void(0);'>B. Huber</a>
                                                </td>
                                                <td>589</td>
                                                <td>B. Huber </td>
                                                <td>123-456-888</td>
                                                {/* <td><a href='/cdn-cgi/l/email-protection' className='__cf_email__'
                                                    data-cfemail='38704d5a5d4a785d40595548545d165b5755'>[email&#160;protected]</a>
                                                </td> */}
                                                <td>Germany</td>
                                                {/* <td>

                                                    <span className='me-3'>
                                                        <img src={edit} alt='img' />
                                                    </span>
                                                    <a className='me-3 confirm-text' href='javascript:void(0);'>
                                                        <img src={deleteImg} alt='img' />
                                                    </a>
                                                </td> */}
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </td>
                                                <td className='productimgname'>
                                                    <a href='javascript:void(0);' className='product-img'>
                                                        <img src={customer6} alt='product' />
                                                    </a>
                                                    <a href='javascript:void(0);'>James Stawberry</a>
                                                </td>
                                                <td>254</td>
                                                <td>James Stawberry</td>
                                                <td>+12163547758 </td>
                                                {/* <td><a href='/cdn-cgi/l/email-protection' className='__cf_email__'
                                                    data-cfemail='2a495f595e45474f586a4f524b475a464f04494547'>[email&#160;protected]</a>
                                                </td> */}
                                                <td>Angola</td>
                                                {/* <td>

                                                    <span className='me-3'>
                                                        <img src={edit} alt='img' />
                                                    </span>
                                                    <a className='me-3 confirm-text' href='javascript:void(0);'>
                                                        <img src={deleteImg} alt='img' />
                                                    </a>
                                                </td> */}
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </td>
                                                <td className='productimgname'>
                                                    <a href='javascript:void(0);' className='product-imgs'>
                                                        WC
                                                    </a>
                                                    <a href='javascript:void(0);'>James Stawberry</a>
                                                </td>
                                                <td>681</td>
                                                <td>Fred john</td>
                                                <td>123-456-888</td>
                                                {/* <td><a href='/cdn-cgi/l/email-protection' className='__cf_email__'
                                                    data-cfemail='b8d2d7d0d6f8ddc0d9d5c8d4dd96dbd7d5'>[email&#160;protected]</a>
                                                </td> */}
                                                <td>Albania</td>

                                                {/* <td>

                                                    <span className='me-3'>
                                                        <img src={edit} alt='img' />
                                                    </span>
                                                    <a className='me-3 confirm-text' href='javascript:void(0);'>
                                                        <img src={deleteImg} alt='img' />
                                                    </a>
                                                </td> */}
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </td>
                                                <td className='productimgname'>
                                                    <a href='javascript:void(0);' className='product-img'>
                                                        <img src={customer5} alt='product' />
                                                    </a>
                                                    <a href='javascript:void(0);'>B. Huber</a>
                                                </td>
                                                <td>589</td>
                                                <td>B. Huber </td>
                                                <td>123-456-888</td>
                                                {/* <td><a href='/cdn-cgi/l/email-protection' className='__cf_email__'
                                                    data-cfemail='4c04392e293e0c29342d213c2029622f2321'>[email&#160;protected]</a>
                                                </td> */}
                                                <td>Germany</td>
                                                {/* <td>

                                                    <span className='me-3'>
                                                        <img src={edit} alt='img' />
                                                    </span>
                                                    <a className='me-3 confirm-text' href='javascript:void(0);'>
                                                        <img src={deleteImg} alt='img' />
                                                    </a>
                                                </td> */}
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </td>
                                                <td className='productimgname'>
                                                    <a href='javascript:void(0);' className='product-img'>
                                                        <img src={customer6} alt='product' />
                                                    </a>
                                                    <a href='javascript:void(0);'>James Stawberry</a>
                                                </td>
                                                <td>254</td>
                                                <td>James Stawberry</td>
                                                <td>+12163547758 </td>
                                                {/* <td><a href='/cdn-cgi/l/email-protection' className='__cf_email__'
                                                    data-cfemail='b1d2c4c2c5dedcd4c3f1d4c9d0dcc1ddd49fd2dedc'>[email&#160;protected]</a>
                                                </td> */}
                                                <td>Angola</td>
                                                {/* <td>

                                                    <span className='me-3'>
                                                        <img src={edit} alt='img' />
                                                    </span>
                                                    <a className='me-3 confirm-text' href='javascript:void(0);'>
                                                        <img src={deleteImg} alt='img' />
                                                    </a>
                                                </td> */}
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </td>
                                                <td className='productimgname'>
                                                    <a href='javascript:void(0);' className='product-imgs'>
                                                        WC
                                                    </a>
                                                    <a href='javascript:void(0);'>James Stawberry</a>
                                                </td>
                                                <td>681</td>
                                                <td>Fred john</td>
                                                <td>123-456-888</td>
                                                {/* <td><a href='/cdn-cgi/l/email-protection' className='__cf_email__'
                                                    data-cfemail='1c767374725c79647d716c7079327f7371'>[email&#160;protected]</a>
                                                </td> */}
                                                <td>Albania</td>

                                                {/* <td>

                                                    <span className='me-3'>
                                                        <img src={edit} alt='img' />
                                                    </span>
                                                    <a className='me-3 confirm-text' href='javascript:void(0);'>
                                                        <img src={deleteImg} alt='img' />
                                                    </a>
                                                </td> */}
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
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
                                                <a className='me-2' href='javascript:void(0);'>
                                                    <img src={printer} alt='img' />
                                                </a>
                                                <a className='me-2' href='javascript:void(0);' data-bs-target='#editpayment'
                                                    data-bs-toggle='modal' data-bs-dismiss='modal'>
                                                    <img src={edit} alt='img' />
                                                </a>
                                                <a className='me-2 confirm-text' href='javascript:void(0);'>
                                                    <img src={deleteImg} alt='img' />
                                                </a>
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

export default PeopleList