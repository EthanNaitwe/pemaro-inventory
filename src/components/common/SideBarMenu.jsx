import { useDispatch, useSelector } from 'react-redux';
import smallLogo from '../../assets/img/logo-small.png';
import logo from '../../assets/img/nile-suites-logo.png';
import { menu as _menu } from '../../config/helpers/menuHelper';
import { setProductVED, setSaleVED, setSelectedSidebarMenu } from '../../config/store/actions/settingsActions';

const SideBarMenu = () => {
    const dispatch = useDispatch();
    const { selectedSidebarMenu } = useSelector((state) => state.settings);
    const { authUser } = useSelector((state) => state.users);

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
                <div className='sidebar-inner slimscroll'>
                    <div id='sidebar-menu' className='sidebar-menu'>
                        <ul>
                            {menu.filter((item) => !item.hidden).map((item) => (
                                <li key={item.id} className={`sidebar-menu-item ${selectedSidebarMenu === item.key ? 'active' : ''}`}>
                                    <div onClick={() => sidebarMenuClick(item.key)}>
                                        <img src={item.img} alt='img' />
                                        <span>{item.name}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBarMenu;
