import '../../App.css'
import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'


const TodoList = () => {

    return (
        <div className='containerWrapper'>
            <div className='nav'>
                <NavLink to={'current'} className={({isActive}) => (isActive ? 'activeLink' : "") + ' linkItem current'}>
                    Current
                </NavLink>
                <NavLink to={'list'} className={({isActive}) => (isActive ? 'activeLink' : "") + " " + 'linkItem list'}>
                    Task list
                </NavLink>
            </div>
            <div className='content'>
                <Outlet />
            </div>
        </div>
    )
}


export default TodoList;