/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import './assets/css/animate.css';
import './assets/css/bootstrap-datetimepicker.min.css';
import './assets/css/bootstrap.min.css';
import './assets/css/dataTables.bootstrap4.min.css';
import './assets/css/style.css';

import { useEffect } from 'react';
import ForgotPassword from './components/Auth/ForgotPassword';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import PageWrapper from './components/PageWrapper';
import SideBarMenu from './components/common/SideBarMenu';
import { setAuthDomain } from './config/store/actions/userActions';

function App() {
  const dispatch = useDispatch();
  const {
    selectedSidebarMenu,
    isAuthenticated,
    mobSideBar,
    authRoute,
  } = useSelector((state) => state.settings);

  useEffect(() => {
    dispatch(setAuthDomain());
  }, []);

  const UnAuthenticated = () => (
    <>
      {authRoute === "login" && <Login />}
      {authRoute === "register" && <Register />}
      {authRoute === "forgetpassword" && <ForgotPassword />}
    </>
  )
  const Authenticated = () => (
    <>
      <SideBarMenu />
      <PageWrapper />
    </>
  )

  return (
    <div className={`${selectedSidebarMenu === '404-error' ? 'error-page' : ''}`}>
      <div className={`main-wrapper ${mobSideBar ? 'slide-nav' : ''}`}>
        {!isAuthenticated && UnAuthenticated()}
        {isAuthenticated && Authenticated()}
      </div>
    </div>
  )
}

export default App
// - Tell me more about "what is the theory of forces around the world what goes around comes around"
// - What are the general terms used for this?
// - In general it is about the forces that are always acting around us.
// Say when you always surround yourself with positive thinking, good things will always come to you.
//  - If you are always worrying about a bad thing happening to you, most likely it'll defnitely happen to you.
// It rythmes alot with 'The Universe’s Response'
//  - Explanations to having dreams of events that havent happened as a way of warning us to be careful.
