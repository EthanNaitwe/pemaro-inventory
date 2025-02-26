
// import placesImg from '../../assets/img/icons/places.svg';
// import return1Img from '../../assets/img/icons/return1.svg';
// import transfer1Img from '../../assets/img/icons/transfer1.svg';
// import quotation1Img from '../../assets/img/icons/quotation1.svg';
// import expense1Img from '../../assets/img/icons/expense1.svg';
// import purchase1Img from '../../assets/img/icons/purchase1.svg';
import users1Img from '../../assets/img/icons/users1.svg';
import sales1Img from '../../assets/img/icons/sales1.svg';
import productImg from '../../assets/img/icons/product.svg';
import dashboardImg from '../../assets/img/icons/dashboard.svg';

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
