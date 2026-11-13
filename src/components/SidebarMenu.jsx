import '../index.css'
import { MenuIc } from '../assets/icons/MenuIc'

function SidebarMenu({ isOpen, setIsOpen }) {
    return (
        <div
        className={` sidebar
        ${isOpen ? 'translate-x-0':'-translate-x-full' }     
        `}
        >
            <div className="headbar">
                <div></div>
                <MenuIc
                className="menu"
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                />
            </div>
            
            <div></div>
            <ul className="activity_bar">
                <li>Dashboard</li>
                <li>Projects</li>
                <li>Save as</li>
                <li>Save</li>
            </ul>
            <div></div>
            <ul>
                <li>Setting</li>
            </ul>
        </div>
    ) 
}

export default SidebarMenu;