import s from './Header.module.css'
import {Link, redirect} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={s.headerWrapper}>
            <div className={s.links}>
                <Link to={props.isAuthenticated? "/" : "/login"}  className={s.linkItem}>Todo</Link>
                <Link to={props.isAuthenticated? "/projects" : "/login"} className={s.linkItem}>Projects</Link>
            </div>
        </div>
    )
}

export default Header;
