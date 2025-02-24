
import placesImg from '../assets/img/icons/places.svg';
import return1Img from '../assets/img/icons/return1.svg';
import transfer1Img from '../assets/img/icons/transfer1.svg';
import quotation1Img from '../assets/img/icons/quotation1.svg';
import expense1Img from '../assets/img/icons/expense1.svg';
import purchase1Img from '../assets/img/icons/purchase1.svg';
import users1Img from '../assets/img/icons/users1.svg';
import sales1Img from '../assets/img/icons/sales1.svg';
import productImg from '../assets/img/icons/product.svg';
import dashboardImg from '../assets/img/icons/dashboard.svg';

// Menu array
export const menu = [
    { id: 1, key: 'index', name: 'Dashboard', img: dashboardImg },
    { id: 2, key: 'product-list', name: 'Products', img: productImg },
    { id: 3, key: 'sales-list', name: 'Sales', img: sales1Img },
    // { id: 4, key: 'purchase-list', name: 'Purchases', img: purchase1Img },
    // { id: 5, key: 'expense-list', name: 'Expense', img: expense1Img },
    // { id: 6, key: 'quotation-list', name: 'Quotation', img: quotation1Img },
    // { id: 7, key: 'transfer-list', name: 'Transfer', img: transfer1Img },
    // { id: 8, key: 'salesreturnlist', name: 'Return', img: return1Img },
    { id: 9, key: 'customer-list', name: 'People', img: users1Img },
    // { id: 10, key: 'new-country', name: 'Places', img: placesImg }
    // { id: 11, key: '404-error', name: '404 Error', img: users1Img },
];

// Function to get a menu item by key
export const getMenuItemByKey = (key) => {
    return menu.find((item) => item.key === key);
};

// Function to filter menu items by a search term
export const filterMenu = (searchTerm) => {
    return menu.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
};








{/* <tbody>
                                    <tr>
                                        <td>
                                            <label className='checkboxs'>
                                                <input type='checkbox' />
                                                <span className='checkmarks'></span>
                                            </label>
                                        </td>
                                        <td className='productimgname'>
                                            <a href='javascript:void(0);' className='product-img'>
                                                <img src={prod2} alt='product' />
                                            </a>
                                            Orange
                                        </td>
                                        <td>PT002</td>
                                        <td>Fruits</td>
                                        <td>N/D</td>
                                        <td>10.00</td>
                                        <td>pc</td>
                                        <td>100.00</td>
                                        <td>Admin</td>
                                        <td>
                                            <a className='me-3' href='product-details.html'>
                                                <img src={eye} alt='img' />
                                            </a>
                                            <a className='me-3' href='editproduct.html'>
                                                <img src={edit} alt='img' />
                                            </a>
                                            <a className='confirm-text' href='javascript:void(0);'>
                                                <img src={deleteImg} alt='img' />
                                            </a>
                                        </td>
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
                                                <img src={prod3} alt='product' />
                                            </span>
                                            Pineapple
                                        </td>
                                        <td>PT003</td>
                                        <td>Fruits</td>
                                        <td>N/D</td>
                                        <td>10.00</td>
                                        <td>pc</td>
                                        <td>100.00</td>
                                        <td>Admin</td>
                                        <td>
                                            <a className='me-3' href='product-details.html'>
                                                <img src={eye} alt='img' />
                                            </a>
                                            <a className='me-3' href='editproduct.html'>
                                                <img src={edit} alt='img' />
                                            </a>
                                            <a className='confirm-text' href='javascript:void(0);'>
                                                <img src={deleteImg} alt='img' />
                                            </a>
                                        </td>
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
                                                <img src={prod4} alt='product' />
                                            </span>
                                            Strawberry
                                        </td>
                                        <td>PT004</td>
                                        <td>Fruits</td>
                                        <td>N/D</td>
                                        <td>10.00</td>
                                        <td>pc</td>
                                        <td>100.00</td>
                                        <td>Admin</td>
                                        <td>
                                            <a className='me-3' href='product-details.html'>
                                                <img src={eye} alt='img' />
                                            </a>
                                            <a className='me-3' href='editproduct.html'>
                                                <img src={edit} alt='img' />
                                            </a>
                                            <a className='confirm-text' href='javascript:void(0);'>
                                                <img src={deleteImg} alt='img' />
                                            </a>
                                        </td>
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
                                                <img src={prod5} alt='product' />
                                            </a>
                                            Avocat
                                        </td>
                                        <td>PT005</td>
                                        <td>Accessories</td>
                                        <td>N/D</td>
                                        <td>10.00</td>
                                        <td>pc</td>
                                        <td>150.00</td>
                                        <td>Admin</td>
                                        <td>
                                            <a className='me-3' href='product-details.html'>
                                                <img src={eye} alt='img' />
                                            </a>
                                            <a className='me-3' href='editproduct.html'>
                                                <img src={edit} alt='img' />
                                            </a>
                                            <a className='confirm-text' href='javascript:void(0);'>
                                                <img src={deleteImg} alt='img' />
                                            </a>
                                        </td>
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
                                                <img src={prod6} alt='product' />
                                            </a>
                                            Macbook Pro
                                        </td>
                                        <td>PT006</td>
                                        <td>Shoes</td>
                                        <td>N/D</td>
                                        <td>10.00</td>
                                        <td>pc</td>
                                        <td>100.00</td>
                                        <td>Admin</td>
                                        <td>
                                            <a className='me-3' href='product-details.html'>
                                                <img src={eye} alt='img' />
                                            </a>
                                            <a className='me-3' href='editproduct.html'>
                                                <img src={edit} alt='img' />
                                            </a>
                                            <a className='confirm-text' href='javascript:void(0);'>
                                                <img src={deleteImg} alt='img' />
                                            </a>
                                        </td>
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
                                                <img src={prod7} alt='product' />
                                            </a>
                                            Apple Earpods
                                        </td>
                                        <td>PT007</td>
                                        <td>Shoes</td>
                                        <td>N/D</td>
                                        <td>10.00</td>
                                        <td>pc</td>
                                        <td>100.00</td>
                                        <td>Admin</td>
                                        <td>
                                            <a className='me-3' href='product-details.html'>
                                                <img src={eye} alt='img' />
                                            </a>
                                            <a className='me-3' href='editproduct.html'>
                                                <img src={edit} alt='img' />
                                            </a>
                                            <a className='confirm-text' href='javascript:void(0);'>
                                                <img src={deleteImg} alt='img' />
                                            </a>
                                        </td>
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
                                                <img src={prod8} alt='product' />
                                            </a>
                                            iPhone 11
                                        </td>
                                        <td>PT008</td>
                                        <td>Fruits</td>
                                        <td>N/D</td>
                                        <td>10.00</td>
                                        <td>pc</td>
                                        <td>100.00</td>
                                        <td>Admin</td>
                                        <td>
                                            <a className='me-3' href='product-details.html'>
                                                <img src={eye} alt='img' />
                                            </a>
                                            <a className='me-3' href='editproduct.html'>
                                                <img src={edit} alt='img' />
                                            </a>
                                            <a className='confirm-text' href='javascript:void(0);'>
                                                <img src={deleteImg} alt='img' />
                                            </a>
                                        </td>
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
                                                <img src={prod9} alt='product' />
                                            </a>
                                            samsung
                                        </td>
                                        <td>PT009</td>
                                        <td>Earphones</td>
                                        <td>N/D</td>
                                        <td>10.00</td>
                                        <td>pc</td>
                                        <td>100.00</td>
                                        <td>Admin</td>
                                        <td>
                                            <a className='me-3' href='product-details.html'>
                                                <img src={eye} alt='img' />
                                            </a>
                                            <a className='me-3' href='editproduct.html'>
                                                <img src={edit} alt='img' />
                                            </a>
                                            <a className='confirm-text' href='javascript:void(0);'>
                                                <img src={deleteImg} alt='img' />
                                            </a>
                                        </td>
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
                                                <img src={prod11} alt='product' />
                                            </a>
                                            Banana
                                        </td>
                                        <td>PT0010</td>
                                        <td>Health Care </td>
                                        <td>N/D</td>
                                        <td>10.00</td>
                                        <td>kg</td>
                                        <td>100.00</td>
                                        <td>Admin</td>
                                        <td>
                                            <a className='me-3' href='product-details.html'>
                                                <img src={eye} alt='img' />
                                            </a>
                                            <a className='me-3' href='editproduct.html'>
                                                <img src={edit} alt='img' />
                                            </a>
                                            <a className='confirm-text' href='javascript:void(0);'>
                                                <img src={deleteImg} alt='img' />
                                            </a>
                                        </td>
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
                                                <img src={prod17} alt='product' />
                                            </a>
                                            Limon
                                        </td>
                                        <td>PT0011</td>
                                        <td>Health Care </td>
                                        <td>N/D</td>
                                        <td>10.00</td>
                                        <td>kg</td>
                                        <td>100.00</td>
                                        <td>Admin</td>
                                        <td>
                                            <a className='me-3' href='product-details.html'>
                                                <img src={eye} alt='img' />
                                            </a>
                                            <a className='me-3' href='editproduct.html'>
                                                <img src={edit} alt='img' />
                                            </a>
                                            <a className='confirm-text' href='javascript:void(0);'>
                                                <img src={deleteImg} alt='img' />
                                            </a>
                                        </td>
                                    </tr>
                                </tbody> */}