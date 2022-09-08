import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaIcons.FaCartPlus/>,
        cName: 'nav-text'
    },
    {
        title: 'About us',
        path: '/about-us',
        icon: <IoIcons.IoMdPeople/>,
        cName: 'nav-text'
    },
    {
        title: 'Cart',
        path: '/cart',
        icon: <FaIcons.FaShoppingCart/>,
        cName: 'nav-text'
    },
    {
        title: 'User',
        path: '/user',
        icon: <FaIcons.FaUser/>,
        cName: 'nav-text'
    },
]
