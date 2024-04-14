import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
        <ul>
            <li><span>Waiter.app</span></li>
            <li><NavLink to="/">Home</NavLink></li>
        </ul>
    </nav>
    )};
export default NavBar;