import "./App.css";

import "./assets/css/bootstrap-datetimepicker.min.css";
import "./assets/css/dataTables.bootstrap4.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/animate.css";
import "./assets/css/style.css";

import PageWrapper from "./components/PageWrapper";
import AppHeader from "./components/common/AppHeader";
import SideBarMenu from "./components/common/SideBarMenu";
import { useSelector } from "react-redux";

function App() {
  const { mobSideBar } = useSelector((state) => state.settings);

  return (
    <div className={`main-wrapper ${mobSideBar ? 'slide-nav' : ''}`}>
      <AppHeader />
      <SideBarMenu />
      <PageWrapper />
    </div>
  )
}

export default App
