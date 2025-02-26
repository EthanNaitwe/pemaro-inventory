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
                                                    <span className='product-img'>
                                                        <img src={customer1} alt='product' />
                                                    </span>
                                                    <span>Thomas</span>
                                                </td>
                                                <td>201</td>
                                                <td>Thomas</td>
                                                <td>+12163547758 </td>
                                                <td>USA</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </td>
                                                <td className='productimgname'>
                                                    <span className='product-img'>
                                                        <img src={customer2} alt='product' />
                                                    </span>
                                                    <span>Benjamin</span>
                                                </td>
                                                <td>202</td>
                                                <td>Benjamin</td>
                                                <td>123-456-888</td>
                                                <td>USA</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </td>
                                                <td className='productimgname'>
                                                    <span className='product-img'>
                                                        <img src={customer3} alt='product' />
                                                    </span>
                                                    <span>James</span>
                                                </td>
                                                <td>521</td>
                                                <td>James</td>
                                                <td>123-456-888</td>
                                                <td>USA</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </td>
                                                <td className='productimgname'>
                                                    <span className='product-img'>
                                                        <img src={customer3} alt='product' />
                                                    </span>
                                                    <span>Bruklin</span>
                                                </td>
                                                <td>555</td>
                                                <td>Bruklin</td>
                                                <td>123-456-888</td>
                                                <td>Thailand</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </td>
                                                <td className='productimgname'>
                                                    <span className='product-img'>
                                                        <img src={customer4} alt='product' />
                                                    </span>
                                                    <span>Beverly</span>
                                                </td>
                                                <td>325</td>
                                                <td>Beverly</td>
                                                <td>+12163547758 </td>
                                                <td>Phuket island</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </td>
                                                <td className='productimgname'>
                                                    <span className='product-img'>
                                                        <img src={customer5} alt='product' />
                                                    </span>
                                                    <span>B. Huber</span>
                                                </td>
                                                <td>589</td>
                                                <td>B. Huber </td>
                                                <td>123-456-888</td>
                                                <td>Germany</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </td>
                                                <td className='productimgname'>
                                                    <span className='product-img'>
                                                        <img src={customer6} alt='product' />
                                                    </span>
                                                    <span>James Stawberry</span>
                                                </td>
                                                <td>254</td>
                                                <td>James Stawberry</td>
                                                <td>+12163547758 </td>
                                                <td>Angola</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </td>
                                                <td className='productimgname'>
                                                    <span className='product-imgs'>
                                                        WC
                                                    </span>
                                                    <span>James Stawberry</span>
                                                </td>
                                                <td>681</td>
                                                <td>Fred john</td>
                                                <td>123-456-888</td>
                                                <td>Albania</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </td>
                                                <td className='productimgname'>
                                                    <span className='product-img'>
                                                        <img src={customer5} alt='product' />
                                                    </span>
                                                    <span>B. Huber</span>
                                                </td>
                                                <td>589</td>
                                                <td>B. Huber </td>
                                                <td>123-456-888</td>
                                                <td>Germany</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </td>
                                                <td className='productimgname'>
                                                    <span className='product-img'>
                                                        <img src={customer6} alt='product' />
                                                    </span>
                                                    <span>James Stawberry</span>
                                                </td>
                                                <td>254</td>
                                                <td>James Stawberry</td>
                                                <td>+12163547758 </td>
                                                <td>Angola</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </td>
                                                <td className='productimgname'>
                                                    <span className='product-imgs'>
                                                        WC
                                                    </span>
                                                    <span>James Stawberry</span>
                                                </td>
                                                <td>681</td>
                                                <td>Fred john</td>
                                                <td>123-456-888</td>
                                                <td>Albania</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </td>
                                                <td className='productimgname'>
                                                    <span className='product-img'>
                                                        <img src={customer5} alt='product' />
                                                    </span>
                                                    <span>B. Huber</span>
                                                </td>
                                                <td>589</td>
                                                <td>B. Huber </td>
                                                <td>123-456-888</td>
                                                <td>Germany</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </td>
                                                <td className='productimgname'>
                                                    <span className='product-img'>
                                                        <img src={customer6} alt='product' />
                                                    </span>
                                                    <span>James Stawberry</span>
                                                </td>
                                                <td>254</td>
                                                <td>James Stawberry</td>
                                                <td>+12163547758 </td>
                                                <td>Angola</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </td>
                                                <td className='productimgname'>
                                                    <span className='product-imgs'>
                                                        WC
                                                    </span>
                                                    <span>James Stawberry</span>
                                                </td>
                                                <td>681</td>
                                                <td>Fred john</td>
                                                <td>123-456-888</td>
                                                <td>Albania</td>
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

export default PeopleList