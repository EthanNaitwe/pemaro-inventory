
import placesImg from "../../assets/img/icons/places.svg";
import users1Img from "../../assets/img/icons/users1.svg";
import return1Img from "../../assets/img/icons/return1.svg";
import transfer1Img from "../../assets/img/icons/transfer1.svg";
import quotation1Img from "../../assets/img/icons/quotation1.svg";
import expense1Img from "../../assets/img/icons/expense1.svg";
import purchase1Img from "../../assets/img/icons/purchase1.svg";
import sales1Img from "../../assets/img/icons/sales1.svg";
import productImg from "../../assets/img/icons/product.svg";
import dashboardImg from "../../assets/img/icons/dashboard.svg";

import { setSelectedSidebarMenu } from "../../config/actions/settingsActions";
import { useDispatch, useSelector } from "react-redux";

const SideBarMenu = () => {
    const dispatch = useDispatch();
    const { selectedSidebarMenu } = useSelector((state) => state.settings);

    const sidebarMenuClick = (payload) => dispatch(setSelectedSidebarMenu(payload));

    const menu = [
        { id: 1, key: 'index', name: 'Dashboard', img: dashboardImg },
        { id: 2, key: 'productlist', name: 'Product', img: productImg },
        { id: 3, key: 'saleslist', name: 'Sales', img: sales1Img },
        { id: 4, key: 'purchaselist', name: 'Purchase', img: purchase1Img },
        { id: 5, key: 'expenselist', name: 'Expense', img: expense1Img },
        { id: 6, key: 'quotationlist', name: 'Quotation', img: quotation1Img },
        { id: 7, key: 'transferlist', name: 'Transfer', img: transfer1Img },
        { id: 8, key: 'salesreturnlist', name: 'Return', img: return1Img },
        { id: 9, key: 'customerlist', name: 'People', img: users1Img },
        { id: 10, key: 'newcountry', name: 'Places', img: placesImg }
    ];

    return (
        <div className="sidebar" id="sidebar">
            <div className="sidebar-inner slimscroll">
                <div id="sidebar-menu" className="sidebar-menu">
                    <ul>
                        {menu.map((item) => (
                            <li key={item.id} className={selectedSidebarMenu === item.key ? "active" : ""}>
                                <div onClick={() => sidebarMenuClick(item.key)}>
                                    <img src={item.img} alt="img" />
                                    <span>{item.name}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBarMenu;
