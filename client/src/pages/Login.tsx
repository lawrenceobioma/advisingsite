import React, { useState } from 'react';
import { Button, Container, Col, Row } from 'react-bootstrap';
import API from '../API';

interface Props {
    access: any
}

// int var;   java
// int var;   js
// function void get()   java
// function get(): any   js

const Login = (props: Props) => {

    // hooks
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const submit = async () => {

        // var isUser = await API.loginAPI.validate;

        // if(isUser)
        // {
        //     access();
        // }
        // else
        // {
        //     setError(true)
        // }
        //change to if statement when API if working
        props.access();
    }

    const handleUserName = (e: any) => {
        setUserName(e.target.value);
    }

    const handlePassword = (e: any) => {
        setPassword(e.target.value);
    }

    return (
        <Container>
            <Row>
                <Col>Email: </Col>
                <Col><input onChange={(e: any) => handleUserName(e)}></input></Col>
            </Row>
            <Row>Password: <input onChange={(e: any) => handlePassword(e)} ></input></Row>
            <Button variant="primary" onClick={() => submit()}>Submit</Button>
            {error ? <>Something is wrong with your credentials</> : <></>}
        </Container>
    );
}

export default Login;