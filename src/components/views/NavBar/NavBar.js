import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import styles from './NavBar.modules.scss';

const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark" className={`${styles.navbar} px-4`}>
            <Navbar.Brand className="brand me-auto">
                Waiter.app
            </Navbar.Brand>
            <Nav>
                <Nav.Link as={NavLink} to="/">
                    Home
                </Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default NavBar;
