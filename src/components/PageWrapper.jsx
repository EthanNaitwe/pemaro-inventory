import Dashboard from './Dashboard';
import { useSelector } from 'react-redux';
import ProductsList from './Products';
import ProductDetails from './Products/ProductDetails';
import AddProduct from './Products/AddProduct';
import SalesList from './Sales';
import AddSales from './Sales/AddSales';
import PeopleList from './People';
import Error404 from './common/404';
import Expense from './Expense';
import NotificationsHome from './Settings';

const PageWrapper = () => {
    const { selectedSidebarMenu, productVED, saleVED } = useSelector((state) => state.settings);
    return (
        <div>
            {selectedSidebarMenu === 'index' && <Dashboard />}

            {selectedSidebarMenu === 'product-list' && productVED === '' && <ProductsList />}
            {selectedSidebarMenu === 'people-list' && productVED === '' && <PeopleList />}
            {productVED === 'view-product' && <ProductDetails />}
            {productVED === 'add-product' && <AddProduct />}

            {selectedSidebarMenu === 'expense-list' && saleVED === '' && <Expense />}
            {selectedSidebarMenu === 'sales-list' && saleVED === '' && <SalesList />}
            {selectedSidebarMenu === 'sales-list' && saleVED === 'add-sales' && <AddSales />}

            {selectedSidebarMenu === 'customer-list' && saleVED === '' && <PeopleList />}

            {selectedSidebarMenu === 'settings-home' && saleVED === '' && <NotificationsHome />}
            {selectedSidebarMenu === '404-error' && saleVED === '' && <Error404 />}
        </div>
    )
}

export default PageWrapper;
