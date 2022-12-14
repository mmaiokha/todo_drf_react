import '../../App.css'
import s from './Profile.module.css'
import {NavLink, Outlet} from "react-router-dom";


const Profile = (props) => {
    return (
        <div className='containerWrapper'>
            <div className='nav'>
                <div className={s.linkItems}>
                    <div className={s.linkItemsTop}>
                        <NavLink to={'info'}
                                 className={({isActive}) => (isActive ? 'activeLink' : "") + " " + 'linkItem'}>Profile</NavLink>
                        <NavLink to={'edit'}
                                 className={({isActive}) => (isActive ? 'activeLink' : "") + " " + 'linkItem'}>Edit
                            Profile</NavLink>
                        <NavLink to={'reset_pass'}
                                 className={({isActive}) => (isActive ? 'activeLink' : "") + " " + 'linkItem'}>Reset
                            Password</NavLink>
                    </div>
                    <div className={s.linkItemsBottom}>
                        <a onClick={() => props.logout()} className={'linkItem ' + 'logout'}>Logout</a>
                    </div>
                </div>
            </div>
            <div className='content'>
                <Outlet/>
            </div>
        </div>
    )
}

export default Profile;