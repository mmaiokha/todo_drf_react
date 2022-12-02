import s from './Header.module.css'
import {Link} from "react-router-dom";

const Header = (props) => {
    const authLinks = (
        <div className={s.links}>
            <Link to={"/"} className={s.linkItem}>Todo</Link>
            <Link to={"/projects"} className={s.linkItem}>Projects</Link>
            <Link to={"/logout"} className={s.linkItem}>Logout</Link>
        </div>)

    const loginLinks = (
        <div className={s.links}>
            <Link to={"/login"} className={s.linkItem}>Login</Link>
            <Link to={"/register"} className={s.linkItem}>Register</Link>
        </div>)

    return (
        <div className={s.headerWrapper}>
            {props.isAuthenticated ? authLinks : loginLinks}
        </div>
    )
}

export default Header;
