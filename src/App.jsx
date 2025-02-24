/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import './assets/css/bootstrap-datetimepicker.min.css';
import './assets/css/dataTables.bootstrap4.min.css';
import './assets/css/bootstrap.min.css';
import './assets/css/animate.css';
import './assets/css/style.css';

import PageWrapper from './components/PageWrapper';
import AppHeader from './components/common/AppHeader';
import SideBarMenu from './components/common/SideBarMenu';
import { setSelectedSidebarMenu } from './config/actions/settingsActions';

function App() {
  const dispatch = useDispatch();
  // app_url/some_text
  const some_text = 'admin';
  const { mobSideBar, selectedSidebarMenu } = useSelector((state) => state.settings);
  // const error = selectedSidebarMenu === '404-error';

  //
  useEffect(() => {
    if (some_text ==! 'admin') {
      dispatch(setSelectedSidebarMenu('404-error'))
    }
  }, [selectedSidebarMenu])

  return (
    // <div className={`${selectedSidebarMenu === '404-error' ? 'error-page' : ''}`}>
      <div className={`main-wrapper ${mobSideBar ? 'slide-nav' : ''}`}>
        <AppHeader />
        <SideBarMenu />
        <PageWrapper />
      </div>
    // </div>
  )
}

export default App
