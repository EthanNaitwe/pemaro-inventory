import "./App.css";

import "./assets/css/bootstrap-datetimepicker.min.css";
import "./assets/css/dataTables.bootstrap4.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/animate.css";
import "./assets/css/style.css";

import PageWrapper from "./components/PageWrapper";
import AppHeader from "./components/common/AppHeader";
import SideBarMenu from "./components/common/SideBarMenu";

function App() {

  return (
    <>
      <AppHeader />
      <SideBarMenu />
      <PageWrapper />
    </>
  )
}

export default App
