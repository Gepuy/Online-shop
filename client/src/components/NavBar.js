import React, {useContext} from 'react';
import {Context} from "../index";
import {Navbar, Container, Nav, Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context);
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink className={'text-decoration-none'} style={{color: 'white'}} to={SHOP_ROUTE}>BuyDevice</NavLink>
                    {user.isAuth ?
                        <Nav className="ms-auto" class={{color: 'white'}}>
                            <Button variant={"outline-light"}>Admin panel</Button>
                            <Button variant={"outline-light"} className={'ms-2'}
                                onClick={() => user.setIsAuth(false)}
                            >Sign out</Button>
                        </Nav>
                        :
                        <Nav className="ml-auto" class={{color: 'white'}}>
                            <Button
                                variant={"outline-light"}
                                onClick={() => user.setIsAuth(true)}
                            >Sign in</Button>
                        </Nav>
                    }
            </Container>
        </Navbar>
    );
});

export default NavBar;
