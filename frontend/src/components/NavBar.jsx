import { NavLink } from "react-router-dom"
import logo from "../assets/logo.png"
import '../styles/NavBar.css'

const NavBar = () =>
{
    const linkClass = ({isActive})=>isActive?'navbar-link':'navbar-link-not';
    return (
        <div className="navbar">
            <img src={logo} className='navbar-logo'/>
            <div className="links">
               
                <NavLink to='/' className={linkClass}>Home</NavLink>
                <NavLink to='/search' className={linkClass}>Search</NavLink>
                <NavLink to='/favourites' className={linkClass}>Favourites</NavLink>
                <NavLink to='/add' className={linkClass}>Add Recipe</NavLink>
            </div>
        </div>
    );
}

export default NavBar;