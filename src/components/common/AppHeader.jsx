/* eslint-disable react-hooks/exhaustive-deps */
import smallLogo from '../../assets/img/logo-small.png';
import logo from '../../assets/img/nile-suites-logo.png';
import defaultImg from '../../assets/img/customer/default.png';
import customer1 from '../../assets/img/customer/customer1.jpg';
import customer5 from '../../assets/img/customer/customer5.jpg';
import { isEmpty } from 'lodash';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logoutImg from '../../assets/img/icons/log-out.svg';
import { logoutUser, setProductVED, setSaleVED, setSelectedSidebarMenu, showMobSideBar } from '../../config/store/actions/settingsActions';
import { getProfile } from '../../config/store/actions/userActions';

const AppHeader = () => {
    const dispatch = useDispatch();
    const { mobSideBar } = useSelector((state) => state.settings);
    const { authUser } = useSelector((state) => state.users);
    const [showLogout, setShowLogout] = useState(false);

    const sidebarMenuClick = () => {
        dispatch(setSelectedSidebarMenu('index'))
        dispatch(setProductVED(''))
        dispatch(setSaleVED(''))
    }

    useEffect(() => {
        if (isEmpty(authUser)) {
            dispatch(getProfile())
        }
    }, []);

    useEffect(() => {
        console.log('authUser', authUser);
    }, [authUser])


    return (
        <div className='header'>
            {/* {`: /${selectedSidebarMenu}`} */}
            <div className='header-left active'>
                <span className='logo' onClick={() => sidebarMenuClick()}>
                    <img src={logo} className='App-logo' alt='logo' />
                </span>
                <span className='logo-small'>
                    <img src={smallLogo} className='App-logo' alt='logo' />
                </span>
                <span id='toggle_btn'></span>
            </div>
            <a id='mobile_btn' className='mobile_btn' onClick={() => dispatch(showMobSideBar(!mobSideBar))}
            >
                <span className='bar-icon'>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </a>
            <ul className='nav user-menu'>
                <li className='nav-item dropdown has-arrow main-drop'>
                    <span className={`dropdown-toggle nav-link userset ${showLogout ? 'show' : ''}`} data-bs-toggle='dropdown' aria-expanded={showLogout}>
                        <span className='user-img' onClick={() => {
                            setShowLogout(!showLogout);
                        }}>
                            {isEmpty(authUser) && <img src={defaultImg} alt='' />}
                            {!isEmpty(authUser) && <img src={authUser.gender === 'Male' ? customer5 : customer1} alt='' />}
                            <span className='status online'></span>
                        </span>
                    </span>
                    <div className={`dropdown-menu menu-drop-user ${showLogout ? 'show' : ''}`} style={showLogout ? {
                        position: "absolute", inset: "0px 0px auto auto", margin: "0px", transform: "translate(0px, 62px)"
                    } : {}}>
                        <div className='profilename'>
                            <div className='profileset'>
                                <span className='user-img'>
                                    {isEmpty(authUser) && <img src={defaultImg} alt='' />}
                                    {!isEmpty(authUser) && <img src={authUser.gender === 'Male' ? customer5 : customer1} alt='' />}
                                    <span className='status online'></span>
                                </span>
                                <div className='profilesets'>
                                    <h6>{`${authUser.surname} ${authUser.other_names}`}</h6>
                                    <h5>{authUser.role}</h5>
                                </div>
                            </div>
                            <hr className='m-0' />
                            {/* <span className='dropdown-item'> <i className='me-2' data-feather='user'></i> My
                                Profile</span>
                            <span className='dropdown-item'><i className='me-2'
                                data-feather='settings'></i>Settings</span> */}
                            <hr className='m-0' />
                            <span className='dropdown-item logout pb-0' onClick={() => {
                                dispatch(logoutUser());
                            }}>
                                <img src={logoutImg} className='me-2' alt='img' />
                                Logout
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
            <div className='dropdown mobile-user-menu'>
                <span className={`nav-link dropdown-toggle ${showLogout ? 'show' : ''}`} data-bs-toggle='dropdown' aria-expanded={showLogout}>
                    <i className='fa fa-ellipsis-v' onClick={() => {
                        setShowLogout(!showLogout);
                    }}></i>
                </span>
                <div className='dropdown-menu dropdown-menu-right show' style={showLogout ? {
                    position: 'absolute', inset: '0px 0px auto auto', margin: '0px', transform: 'translate3d(-20px, 62px, 0px)'
                } : { visibility: "hidden" }} data-popper-placement="bottom-end">
                    {/* <span className='dropdown-item'>My Profile</span> */}
                    {/* <span className='dropdown-item'>Settings</span> */}
                    <span className='dropdown-item' onClick={() => {
                        dispatch(logoutUser());
                    }}>Logout</span>
                </div>
            </div>
        </div>
    )
}

export default AppHeader;
