import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SidebarData'
import "../style/NavBar.css"
import { IconContext } from 'react-icons'
import CartWidget from './CartWidget'

const NavBar = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => {setSidebar(!sidebar)}

    return (
        <>
        <IconContext.Provider value={{color: 'black'}}>
            <div className="navbar">
                <div className='contenedorGrande'>
                    <Link to="#" className='menu-bars'>  
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>
                    <Link to="/" className='brand'>  
                        The Sneakers store
                    </Link>
                </div>
                <div className='d-flex contenedorGrande'>
                    <CartWidget/>
                    <Link to='/user' className='contenedorChico'>
                        <FaIcons.FaUserAlt className='icono'/>User
                    </Link>
                </div>
            </div>
            <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default NavBar