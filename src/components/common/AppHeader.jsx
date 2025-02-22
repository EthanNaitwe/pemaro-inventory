import logo from "../../assets/img/logo.png";
import smallLogo from "../../assets/img/logo-small.png";
import avatar1 from "../..//assets/img/profiles/avator1.jpg";
import closesImg from "../../assets/img/icons/closes.svg";
import searchImg from "../../assets/img/icons/search.svg";
import notificationImg from "../../assets/img/icons/notification-bing.svg";
import logoutImg from "../../assets/img/icons/log-out.svg";
import { useDispatch, useSelector } from "react-redux";
import { setProductVED, setSaleVED, setSelectedSidebarMenu } from "../../config/actions/settingsActions";


const AppHeader = () => {
    const dispatch = useDispatch();
    const { selectedSidebarMenu } = useSelector((state) => state.settings);

    const sidebarMenuClick = () => {
        dispatch(setSelectedSidebarMenu('index'))
        dispatch(setProductVED(''))
        dispatch(setSaleVED(''))
    }
    return (
        <div className="header">
            {/* {`: /${selectedSidebarMenu}`} */}
            <div className="header-left active">
                <span className="logo" onClick={() => sidebarMenuClick()}>
                    <img src={logo} className="App-logo" alt="logo" />
                </span>
                <span className="logo-small">
                    <img src={smallLogo} className="App-logo" alt="logo" />
                </span>
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
                {/* <li className="nav-item">
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
                </li> */}
                {/* <li className="nav-item dropdown has-arrow flag-nav">
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
                </li> */}
                {/* <li className="nav-item dropdown">
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
                </li> */}
                <li className="nav-item dropdown has-arrow main-drop">
                    <a href="javascript:void(0);" className="dropdown-toggle nav-link userset" data-bs-toggle="dropdown">
                        <span className="user-img">
                            <img src={avatar1} alt="" />
                            <span className="status online"></span>
                        </span>
                    </a>
                    <div className="dropdown-menu menu-drop-user">
                        <div className="profilename">
                            <div className="profileset">
                                <span className="user-img">
                                    <img src={avatar1} alt="" />
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
    )
}

export default AppHeader