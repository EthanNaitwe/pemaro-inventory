import { setProductVED, setSelectedSidebarMenu } from "../../config/actions/settingsActions";
import { useDispatch, useSelector } from "react-redux";
import { menu } from "../../helpers/menuHelper";
import { useEffect } from "react";

const SideBarMenu = () => {
    const dispatch = useDispatch();
    const { selectedSidebarMenu } = useSelector((state) => state.settings);

    const sidebarMenuClick = (payload) => {
        dispatch(setSelectedSidebarMenu(payload))
        dispatch(setProductVED(''))
    }

    useEffect(() => {
        console.log('selectedSidebarMenu', selectedSidebarMenu)
    }, [selectedSidebarMenu])


    return (
        <div className="sidebar" id="sidebar">
            <div className="sidebar-inner slimscroll">
                <div id="sidebar-menu" className="sidebar-menu">
                    <ul>
                        {menu.map((item) => (
                            <li key={item.id} className={selectedSidebarMenu === item.key ? "active" : ""}>
                                <div onClick={() => sidebarMenuClick(item.key)}>
                                    <img src={item.img} alt="img" />
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
