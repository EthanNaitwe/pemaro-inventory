import Dashboard from './Dashboard';

import { useSelector } from "react-redux";
import ProductsList from './Products';
import ProductDetails from './Products/ProductDetails';
import AddProduct from './Products/AddProduct';
import SalesList from './Sales';
import AddSales from './Sales/AddSales';
import PeopleList from './People';

const PageWrapper = () => {
    const { selectedSidebarMenu, productVED, saleVED } = useSelector((state) => state.settings);
    return (
        <div>
            {selectedSidebarMenu === 'index' && <Dashboard />}

            {selectedSidebarMenu === 'product-list' && productVED === "" && <ProductsList />}
            {productVED === "view-product" && <ProductDetails />}
            {productVED === "add-product" && <AddProduct />}

            {selectedSidebarMenu === "sales-list" && saleVED === "" && <SalesList />}
            {saleVED === "add-sales" && <AddSales />}

            {selectedSidebarMenu === "customer-list" && saleVED === "" && <PeopleList />}
        </div>
    )
}

export default PageWrapper;
