import { isEmpty } from 'lodash';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import defaultImg from '../../assets/img/customer/default.png';
import customer1 from '../../assets/img/customer/customer1.jpg';
import customer5 from '../../assets/img/customer/customer5.jpg';
import smallLogo from '../../assets/img/logo-small.png';
import logo from '../../assets/img/nile-suites-logo.png';
import { menu as _menu } from '../../config/helpers/menuHelper';
import { logoutUser, setProductVED, setSaleVED, setSelectedSidebarMenu } from '../../config/store/actions/settingsActions';
import { getProfile } from '../../config/store/actions/userActions';

const SideBarMenu = () => {
    const dispatch = useDispatch();
    const { selectedSidebarMenu } = useSelector((state) => state.settings);
    const { authUser } = useSelector((state) => state.users);

    useEffect(() => {
        if (isEmpty(authUser)) dispatch(getProfile());
    }, []);

    const sidebarMenuClick1 = () => {
        dispatch(setSelectedSidebarMenu('index'))
        dispatch(setProductVED(''))
        dispatch(setSaleVED(''))
    }

    const sidebarMenuClick = (payload) => {
        dispatch(setSelectedSidebarMenu(payload))
        dispatch(setProductVED(''))
    }

    // Dynamically update the hidden property based on authUser.role
    const menu = _menu.map((item) => {
        if (authUser.role === 'Stuff' && item.key === 'index') {
            return { ...item, hidden: true };
        }
        return item;
    });

    const [showProfileMenu, setShowProfileMenu] = useState(false);

    useEffect(() => {
        if (showProfileMenu) {
            const timer = setTimeout(() => setShowProfileMenu(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [showProfileMenu]);

    const onClickProfile = () => setShowProfileMenu((prev) => !prev);
    const onLogout = () => dispatch(logoutUser());

    return (
        <>
            <div className='header'>
                <div className='header-left active'>
                    <span className='logo' onClick={() => sidebarMenuClick1()}>
                        <img src={logo} className='App-logo' alt='logo' />
                    </span>
                    <span className='logo-small'>
                        <img src={smallLogo} className='App-logo' alt='logo' />
                    </span>
                    <span id='toggle_btn'></span>
                </div>
            </div>
            <div className='sidebar' id='sidebar'>
                <div className='sidebar-inner slimscroll' style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <div id='sidebar-menu' className='sidebar-menu' style={{ flex: 1 }}>
                        <ul style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            {menu.filter((item) => !item.hidden).map((item) => (
                                <li key={item.id} className={`sidebar-menu-item ${selectedSidebarMenu === item.key ? 'active' : ''}`}>
                                    <div onClick={() => sidebarMenuClick(item.key)}>
                                        <img src={item.img} alt='img' />
                                        <span>{item.name}</span>
                                    </div>
                                </li>
                            ))}
                            <li className="sidebar-menu-item" style={{ position: 'relative' }}>
                                <div
                                    onClick={onClickProfile}
                                    className="text-center rounded bg-light p-3 mb-1 border d-flex flex-column align-items-center"
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="avatar avatar-lg online mb-2">
                                        {isEmpty(authUser) ? <img src={defaultImg} className='no-hover' alt='' /> :
                                            <img src={authUser.gender === 'Male' ? customer5 : customer1} className='no-hover' alt='' />}
                                    </div>
                                    <span className="fs-12 fw-bold no-hover">{!isEmpty(authUser) ? authUser.surname : "Loading..."}</span>
                                </div>
                                {/* Profile Sub-menu */}
                                <div
                                    className={`profile-sub-menu${showProfileMenu ? ' show' : ''}`}
                                    style={{
                                        position: 'absolute',
                                        left: '50%',
                                        top: '100%',
                                        transform: 'translateX(-50%)',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                                        opacity: showProfileMenu ? 1 : 0,
                                        pointerEvents: showProfileMenu ? 'auto' : 'none',
                                        transition: 'opacity 0.2s, transform 0.2s',
                                        zIndex: 10,
                                    }}
                                >
                                    <ul className="list-unstyled mb-0 py-2 px-2">
                                        <li onClick={() => onLogout()} className="py-1 px-2 hover-bg" style={{ cursor: 'pointer' }}>Logout</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBarMenu;
