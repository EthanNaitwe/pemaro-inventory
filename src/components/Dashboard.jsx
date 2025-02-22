import logo from "../assets/img/logo.png";
import smallLogo from "../assets/img/logo-small.png";
import closesImg from "../assets/img/icons/closes.svg";
import searchImg from "../assets/img/icons/search.svg";
import notificationImg from "../assets/img/icons/notification-bing.svg";
import logoutImg from "../assets/img/icons/log-out.svg";
import dropdownImg from "../assets/img/icons/dropdown.svg";
import dash4Img from "../assets/img/icons/dash4.svg";
import dash3Img from "../assets/img/icons/dash3.svg";
import dash2Img from "../assets/img/icons/dash2.svg";
import dash1Img from "../assets/img/icons/dash1.svg";
import placesImg from "../assets/img/icons/places.svg";
import users1Img from "../assets/img/icons/users1.svg";
import return1Img from "../assets/img/icons/return1.svg";
import transfer1Img from "../assets/img/icons/transfer1.svg";
import quotation1Img from "../assets/img/icons/quotation1.svg";
import expense1Img from "../assets/img/icons/expense1.svg";
import purchase1Img from "../assets/img/icons/purchase1.svg";
import sales1Img from "../assets/img/icons/sales1.svg";
import productImg from "../assets/img/icons/product.svg";
import dashboardImg from "../assets/img/icons/dashboard.svg";

const Dashboard = () => {
    return (
        <div className="main-wrapper">
            <div className="header">
                <div className="header-left active">
                    <a href="/index" className="logo">
                        <img src={logo} className="App-logo" alt="logo" />
                    </a>
                    <a href="/index" className="logo-small">
                        <img src={smallLogo} className="App-logo" alt="logo" />
                    </a>
                    <a id="toggle_btn" href="javascript:void(0);">
                    </a>
                </div>
                <a id="mobile_btn" className="mobile_btn" href="#sidebar">
                    <span className="bar-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </a>
                <ul className="nav user-menu">
                    <li className="nav-item">
                        <div className="top-nav-search">
                            <a href="javascript:void(0);" className="responsive-search">
                                <i className="fa fa-search"></i>
                            </a>
                            <form action="#">
                                <div className="searchinputs">
                                    <input type="text" placeholder="Search Here ..." />
                                    <div className="search-addon">
                                        <span>
                                            <img src={closesImg} alt="img" />
                                        </span>
                                    </div>
                                </div>
                                <a className="btn" id="searchdiv">
                                    <img src={searchImg} alt="img" />
                                </a>
                            </form>
                        </div>
                    </li>
                    <li className="nav-item dropdown has-arrow flag-nav">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="javascript:void(0);" role="button">
                            <img src="/assets/img/flags/us1.png" alt="" height="20" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a href="javascript:void(0);" className="dropdown-item">
                                <img src="/assets/img/flags/us.png" alt="" height="16" />
                                English
                            </a>
                            <a href="javascript:void(0);" className="dropdown-item">
                                <img src="/assets/img/flags/fr.png" alt="" height="16" />
                                French
                            </a>
                            <a href="javascript:void(0);" className="dropdown-item">
                                <img src="/assets/img/flags/es.png" alt="" height="16" />
                                Spanish
                            </a>
                            <a href="javascript:void(0);" className="dropdown-item">
                                <img src="/assets/img/flags/de.png" alt="" height="16" />
                                German
                            </a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="javascript:void(0);" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                            

                            <img src={notificationImg} alt="img" />
                            <span className="badge rounded-pill">4</span>
                        </a>
                        <div className="dropdown-menu notifications">
                            <div className="topnav-dropdown-header">
                                <span className="notification-title">Notifications</span>
                                <a href="javascript:void(0)" className="clear-noti"> Clear All </a>
                            </div>
                            <div className="noti-content">
                                <ul className="notification-list">
                                    <li className="notification-message">
                                        <a href="/activities">
                                            <div className="media d-flex">
                                                <span className="avatar flex-shrink-0">
                                                    <img alt="" src="/assets/img/profiles/avatar-02.jpg" />
                                                </span>
                                                <div className="media-body flex-grow-1">
                                                    <p className="noti-details"><span className="noti-title">John Doe</span> added
                                                        new task <span className="noti-title">Patient appointment booking</span>
                                                    </p>
                                                    <p className="noti-time"><span className="notification-time">4 mins ago</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="notification-message">
                                        <a href="/activities">
                                            <div className="media d-flex">
                                                <span className="avatar flex-shrink-0">
                                                    <img alt="" src="/assets/img/profiles/avatar-03.jpg" />
                                                </span>
                                                <div className="media-body flex-grow-1">
                                                    <p className="noti-details"><span className="noti-title">Tarah Shropshire</span>
                                                        changed the task name <span className="noti-title">Appointment booking
                                                            with payment gateway</span></p>
                                                    <p className="noti-time"><span className="notification-time">6 mins ago</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="notification-message">
                                        <a href="/activities">
                                            <div className="media d-flex">
                                                <span className="avatar flex-shrink-0">
                                                    <img alt="" src="/assets/img/profiles/avatar-06.jpg" />
                                                </span>
                                                <div className="media-body flex-grow-1">
                                                    <p className="noti-details"><span className="noti-title">Misty Tison</span>
                                                        added <span className="noti-title">Domenic Houston</span> and <span
                                                            className="noti-title">Claire
                                                            Mapes</span> to project <span className="noti-title">Doctor available
                                                                module</span></p>
                                                    <p className="noti-time"><span className="notification-time">8 mins ago</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="notification-message">
                                        <a href="/activities">
                                            <div className="media d-flex">
                                                <span className="avatar flex-shrink-0">
                                                    <img alt="" src="/assets/img/profiles/avatar-17.jpg" />
                                                </span>
                                                <div className="media-body flex-grow-1">
                                                    <p className="noti-details"><span className="noti-title">Rolland Webber</span>
                                                        completed task <span className="noti-title">Patient and Doctor video
                                                            conferencing</span></p>
                                                    <p className="noti-time"><span className="notification-time">12 mins ago</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="notification-message">
                                        <a href="/activities">
                                            <div className="media d-flex">
                                                <span className="avatar flex-shrink-0">
                                                    <img alt="" src="/assets/img/profiles/avatar-13.jpg" />
                                                </span>
                                                <div className="media-body flex-grow-1">
                                                    <p className="noti-details"><span className="noti-title">Bernardo Galaviz</span>
                                                        added new task <span className="noti-title">Private chat module</span>
                                                    </p>
                                                    <p className="noti-time"><span className="notification-time">2 days ago</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="topnav-dropdown-footer">
                                <a href="/activities">View all Notifications</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown has-arrow main-drop">
                        <a href="javascript:void(0);" className="dropdown-toggle nav-link userset" data-bs-toggle="dropdown">
                            <span className="user-img">
                                <img src="/assets/img/profiles/avator1.jpg" alt="" />
                                <span className="status online"></span>
                            </span>
                        </a>
                        <div className="dropdown-menu menu-drop-user">
                            <div className="profilename">
                                <div className="profileset">
                                    <span className="user-img">
                                        <img src="/assets/img/profiles/avator1.jpg" alt="" />
                                        <span className="status online"></span>
                                    </span>
                                    <div className="profilesets">
                                        <h6>John Doe</h6>
                                        <h5>Admin</h5>
                                    </div>
                                </div>
                                <hr className="m-0" />
                                <a className="dropdown-item" href="/profile"> <i className="me-2" data-feather="user"></i> My
                                    Profile</a>
                                <a className="dropdown-item" href="/generalsettings"><i className="me-2"
                                    data-feather="settings"></i>Settings</a>
                                <hr className="m-0" />
                                <a className="dropdown-item logout pb-0" href="/signin">

                                    <img src={logoutImg} className="me-2" alt="img" />
                                    Logout
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="dropdown mobile-user-menu">
                    <a href="javascript:void(0);" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"
                        aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                    <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="/profile">My Profile</a>
                        <a className="dropdown-item" href="/generalsettings">Settings</a>
                        <a className="dropdown-item" href="/signin">Logout</a>
                    </div>
                </div>
            </div>
            <div className="sidebar" id="sidebar">
                <div className="sidebar-inner slimscroll">
                    <div id="sidebar-menu" className="sidebar-menu">
                        <ul>
                            <li className="active">
                                <a href="/index">
                                    <img src={dashboardImg} alt="img" />
                                    <span>
                                        Dashboard
                                    </span>
                                </a>
                            </li>
                            <li className="">
                                <a href="/productlist">
                                    <img src={productImg} alt="img" />
                                    <span>Product</span>
                                    {/* <span className="menu-arrow"></span> */}
                                </a>
                            </li>
                            <li className="">
                                <a href="/saleslist">
                                    <img src={sales1Img} alt="img" />
                                    <span>Sales</span>
                                    {/* <span className="menu-arrow"></span> */}
                                </a>
                            </li>
                            <li className="">
                                <a href="/purchaselist">
                                    <img src={purchase1Img} alt="img" />
                                    <span>Purchase</span>
                                    {/* <span className="menu-arrow"></span> */}
                                </a>
                            </li>
                            <li className="">
                                <a href="/expenselist">
                                    <img src={expense1Img} alt="img" />
                                    <span>Expense</span>
                                    {/* <span className="menu-arrow"></span> */}
                                </a>
                            </li>
                            <li className="">
                                <a href="/quotationList">
                                    <img src={quotation1Img} alt="img" />
                                    <span>Quotation</span>
                                    {/* <span className="menu-arrow"></span> */}
                                </a>
                            </li>
                            <li className="">
                                <a href="/transferlist">
                                    <img src={transfer1Img} alt="img" />
                                    <span>Transfer</span>
                                    {/* <span className="menu-arrow"></span> */}
                                </a>
                            </li>
                            <li className="">
                                <a href="/salesreturnlist">
                                    <img src={return1Img} alt="img" />
                                    <span>Return</span>
                                    {/* <span className="menu-arrow"></span> */}
                                </a>
                            </li>
                            <li className="">
                                <a href="/customerlist">
                                    <img src={users1Img} alt="img" />
                                    <span>People</span>
                                    {/* <span className="menu-arrow"></span> */}
                                </a>
                            </li>
                            <li className="">
                                <a href="/newcountry">
                                    <img src={placesImg} alt="img" />
                                    <span>Places</span>
                                    {/* <span className="menu-arrow"></span> */}
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className="page-wrapper">
                <div className="content">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="dash-widget">
                                <div className="dash-widgetimg">
                                    <span>
                                        <img src={dash1Img} alt="img" />
                                    </span>
                                </div>
                                <div className="dash-widgetcontent">
                                    <h5>$<span className="counters" data-count="307144.00">$307,144.00</span></h5>
                                    <h6>Total Purchase Due</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="dash-widget dash1">
                                <div className="dash-widgetimg">
                                    <span>
                                        <img src={dash2Img} alt="img" />
                                    </span>
                                </div>
                                <div className="dash-widgetcontent">
                                    <h5>$<span className="counters" data-count="4385.00">$4,385.00</span></h5>
                                    <h6>Total Sales Due</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="dash-widget dash2">
                                <div className="dash-widgetimg">
                                    <span>
                                        <img src={dash3Img} alt="img" />
                                    </span>
                                </div>
                                <div className="dash-widgetcontent">
                                    <h5>$<span className="counters" data-count="385656.50">385,656.50</span></h5>
                                    <h6>Total Sale Amount</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="dash-widget dash3">
                                <div className="dash-widgetimg">
                                    <span>
                                        <img src={dash4Img} alt="img" />
                                    </span>
                                </div>
                                <div className="dash-widgetcontent">
                                    <h5>$<span className="counters" data-count="40000.00">400.00</span></h5>
                                    <h6>Total Sale Amount</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12 d-flex">
                            <div className="dash-count">
                                <div className="dash-counts">
                                    <h4>100</h4>
                                    <h5>Customers</h5>
                                </div>
                                <div className="dash-imgs">
                                    <i data-feather="user"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12 d-flex">
                            <div className="dash-count das1">
                                <div className="dash-counts">
                                    <h4>100</h4>
                                    <h5>Suppliers</h5>
                                </div>
                                <div className="dash-imgs">
                                    <i data-feather="user-check"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12 d-flex">
                            <div className="dash-count das2">
                                <div className="dash-counts">
                                    <h4>100</h4>
                                    <h5>Purchase Invoice</h5>
                                </div>
                                <div className="dash-imgs">
                                    <i data-feather="file-text"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12 d-flex">
                            <div className="dash-count das3">
                                <div className="dash-counts">
                                    <h4>105</h4>
                                    <h5>Sales Invoice</h5>
                                </div>
                                <div className="dash-imgs">
                                    <i data-feather="file"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 col-sm-12 col-12 d-flex">
                            <div className="card flex-fill">
                                <div className="card-header pb-0 d-flex justify-content-between align-items-center">
                                    <h5 className="card-title mb-0">Purchase & Sales</h5>
                                    <div className="graph-sets">
                                        <ul>
                                            <li>
                                                <span>Sales</span>
                                            </li>
                                            <li>
                                                <span>Purchase</span>
                                            </li>
                                        </ul>
                                        <div className="dropdown">
                                            <button className="btn btn-white btn-sm dropdown-toggle" type="button"
                                                id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                                2022
                                                <img src={dropdownImg} alt="img" className="ms-2" />
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <li>
                                                    <a href="javascript:void(0);" className="dropdown-item">2022</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" className="dropdown-item">2021</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" className="dropdown-item">2020</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div id="sales_charts"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-sm-12 col-12 d-flex">
                            <div className="card flex-fill">
                                <div className="card-header pb-0 d-flex justify-content-between align-items-center">
                                    <h4 className="card-title mb-0">Recently Added Products</h4>
                                    <div className="dropdown">
                                        <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false"
                                            className="dropset">
                                            <i className="fa fa-ellipsis-v"></i>
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <li>
                                                <a href="/productlist" className="dropdown-item">Product List</a>
                                            </li>
                                            <li>
                                                <a href="/addproduct" className="dropdown-item">Product Add</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive dataview">
                                        <table className="table datatable ">
                                            <thead>
                                                <tr>
                                                    <th>Sno</th>
                                                    <th>Products</th>
                                                    <th>Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td className="productimgname">
                                                        <a href="/productlist" className="product-img">
                                                            <img src="/assets/img/product/product22.jpg" alt="product" />
                                                        </a>
                                                        <a href="/productlist">Apple Earpods</a>
                                                    </td>
                                                    <td>$891.2</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td className="productimgname">
                                                        <a href="/productlist" className="product-img">
                                                            <img src="/assets/img/product/product23.jpg" alt="product" />
                                                        </a>
                                                        <a href="/productlist">iPhone 11</a>
                                                    </td>
                                                    <td>$668.51</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td className="productimgname">
                                                        <a href="/productlist" className="product-img">
                                                            <img src="/assets/img/product/product24.jpg" alt="product" />
                                                        </a>
                                                        <a href="/productlist">samsung</a>
                                                    </td>
                                                    <td>$522.29</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td className="productimgname">
                                                        <a href="/productlist" className="product-img">
                                                            <img src="/assets/img/product/product6.jpg" alt="product" />
                                                        </a>
                                                        <a href="/productlist">Macbook Pro</a>
                                                    </td>
                                                    <td>$291.01</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
