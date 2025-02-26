import { setProductVED, setSelectedSidebarMenu } from '../../config/store/actions/settingsActions';
import { useDispatch, useSelector } from 'react-redux';
import { menu } from '../../config/helpers/menuHelper';

const SideBarMenu = () => {
    const dispatch = useDispatch();
    const { selectedSidebarMenu } = useSelector((state) => state.settings);

    const sidebarMenuClick = (payload) => {
        dispatch(setSelectedSidebarMenu(payload))
        dispatch(setProductVED(''))
    }

    return (
        <div className='sidebar' id='sidebar'>
            <div className='sidebar-inner slimscroll'>
                <div id='sidebar-menu' className='sidebar-menu'>
                    <ul>
                        {menu.map((item) => (
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
    )
}

export default SideBarMenu;
