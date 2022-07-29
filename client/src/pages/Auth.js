import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../api/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context);
    const location = useLocation();
    const history = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if(isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(data);
            user.setIsAuth(true);
            history(SHOP_ROUTE);
        } catch (e) {
            console.log(e.response.data.message)
        }

    }

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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className={'mt-4'}
                        placeholder={'Enter password...'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={"password"}
                    />
                    <div className={'d-flex justify-content-between mt-5 pl-3 pr-3'}>
                        {isLogin ?
                            <div>
                                Don't have an account? <NavLink to={REGISTRATION_ROUTE}>Register now!</NavLink>
                            </div>
                            :
                            <div>
                                Do you have an account? <NavLink to={LOGIN_ROUTE}>Sign in!</NavLink>
                            </div>
                        }
                        <Button onClick={click} variant={'outline-success'}>
                            {isLogin ? 'Sign in' : 'Sign up'}
                        </Button>
                    </div>
                </Form>
            </Card>

        </Container>
    );
});

export default Auth;
