import s from './Header.module.css'
import {Link, NavLink} from "react-router-dom";


const Header = (props) => {
    const authLinks = (
        <div className={s.headerWrapper}>
            <div className={s.links}>
                <NavLink to={"/todo"}
                         className={({isActive}) => (isActive ? s.activeLink : "") + " " + s.linkItem} >Todo</NavLink>
                <NavLink to={"/projects"}
                         className={({isActive}) => (isActive ? s.activeLink : "") + " " + s.linkItem}>Projects</NavLink>
            </div>
            <div className={s.btns}>
                <NavLink className={`${s.linkBtn}`} to={'/profile'}></NavLink>
            </div>
        </div>
    )

    const loginLinks = (
        <div className={s.headerWrapper}>
            <div className={s.links}>
                <Link to={"/login"} className={s.linkItem}>Login</Link>
                <Link to={"/register"} className={s.linkItem}>Register</Link>
            </div>
        </div>
    )

    return props.isAuthenticated ? authLinks : loginLinks
}

export default Header;
