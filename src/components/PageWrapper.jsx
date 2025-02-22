import Dashboard from './Dashboard';

import { useSelector } from "react-redux";
import ProductsList from './Products';
import ProductDetails from './Products/ProductDetails';
import AddProduct from './Products/AddProduct';

const PageWrapper = () => {
    const { selectedSidebarMenu, productVED } = useSelector((state) => state.settings);
    return (
        <div>
            {selectedSidebarMenu === 'index' && <Dashboard />}
            {selectedSidebarMenu === 'product-list' && productVED === "" && <ProductsList />}
            {productVED === "view-product" && <ProductDetails />}
            {productVED === "add-product" && <AddProduct />}
        </div>
    )
}

export default PageWrapper;
