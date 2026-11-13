import '../index.css';
import { useState } from 'react';
import { MenuIc } from '../assets/icons/MenuIc'
import SidebarMenu from './SidebarMenu'
const Header = ({ path, onNavigate }) => {
    const [ isOpen, setIsOpen ] = useState(false);

    return(
        <div className='header'>
            <menu className="menu">
                <MenuIc
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                />
                <SidebarMenu
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                />
                <logo>
                    <img src="" alt="" />
                    <h1>UrFlow</h1>
                </logo>
                <Breadcrumb
                path={path}
                onNavigate={onNavigate}
                />
            </menu>
        </div>
    )
}

function Breadcrumb({ path, onNavigate }) {
    return(
        <nav className="breadcrump">
            {path.map((crumb, i) => {
                const isLast = i === path.length - 1;
                return(
                    <span>
                        {isLast ? (
                            <span className="bc_current">{crumb}</span>
                        ) : (
                            <span className="bc_link">
                                <button
                                onClick={() => onNavigate(i)}
                                >{crumb}</button>
                                <span>›</span>
                            </span>
                        )}
                    </span>
                )
            })}
        </nav>
    )
}

export default Header