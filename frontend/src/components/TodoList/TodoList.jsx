import '../../App.css'
import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'


const TodoList = (props) => {

    return (
        <div className='containerWrapper'>
            <div className='nav'>
                <NavLink to={'current'} className={({isActive}) => (isActive ? 'activeLink' : "") + " " + 'linkItem'}>
                    Current
                </NavLink>
                <NavLink to={'list'} className={({isActive}) => (isActive ? 'activeLink' : "") + " " + 'linkItem'}>
                    Task list
                </NavLink>
            </div>
            <div className='content'>
                <Outlet context={props}/>
            </div>
        </div>
    )
}


export default TodoList;