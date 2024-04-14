import {NavLink} from 'react-router-dom';
import {Nav} from "react-bootstrap";

const NavBar = () => {
    return (
        <Nav className="me-auto">
            <div>
               <span>Waiter.app</span>
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            </div>
        </Nav>

    //     <nav>
    //     <ul>
    //         <li><span>Waiter.app</span></li>
    //         <li><NavLink to="/">Home</NavLink></li>
    //     </ul>
    // </nav>
    )};
export default NavBar;