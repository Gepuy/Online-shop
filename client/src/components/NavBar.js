import React, {useContext} from 'react';
import {Context} from "../index";
import {Navbar, Container, Nav, Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useNavigate} from 'react-router-dom';

const NavBar = observer(() => {
    const history = useNavigate();
    const {user} = useContext(Context);
    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink className={'text-decoration-none'} style={{color: 'white'}} to={SHOP_ROUTE}>BuyDevice</NavLink>
                    {user.isAuth ?
                        <Nav className="ms-auto" class={{color: 'white'}}>
                            <Button
                                variant={"outline-light"}
                                onClick={() => history(ADMIN_ROUTE)}
                            >Admin panel</Button>
                            <Button
                                variant={"outline-light"}
                                className={'ms-2'}
                                onClick={() => logOut()}
                            >Logout</Button>
                        </Nav>
                        :
                        <Nav className="ml-auto" class={{color: 'white'}}>
                            <Button
                                variant={"outline-light"}
                                onClick={() => history(LOGIN_ROUTE)}
                            >Sign in</Button>
                        </Nav>
                    }
            </Container>
        </Navbar>
    );
});

export default NavBar;
