import React from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE
    return (
        <Container
            className={'d-flex justify-content-center align-items-center'}
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 550}} className={"p-5"}>
                <h2 className={'text-center'}>{isLogin ? 'Authorization' : 'Registration'}</h2>
                <Form className={'d-flex flex-column'}>
                    <Form.Control
                        className={'mt-4'}
                        placeholder={'Enter email...'}
                    />
                    <Form.Control
                        className={'mt-4'}
                        placeholder={'Enter password...'}
                    />
                    <div className={'d-flex justify-content-between mt-3 pl-3 pr-3'}>
                        {isLogin ?
                            <div>
                                Haven't an account? <NavLink to={REGISTRATION_ROUTE}>Register now!</NavLink>
                            </div>
                            :
                            <div>
                                Have an account? <NavLink to={LOGIN_ROUTE}>Sign in!</NavLink>
                            </div>
                        }
                        <Button variant={'outline-success'}>
                            {isLogin ? 'Sign in' : 'Sign up'}
                        </Button>
                    </div>


                </Form>
            </Card>

        </Container>
    );
};

export default Auth;
