import React from 'react';
import {Button, Form, FormGrou, FormGroup, Input, Label} from 'reactstrap';
import './App.css';

export default function Login() {
  return (
    <Form className='login-form'>
        <FormGroup>
            <Label>
                Email
            </Label>
            <Input type="email" placeholder='Email'/>
        </FormGroup>
        <FormGroup>
            <Label>
                Password
            </Label>
            <Input type="password" placeholder='Password'/>
        </FormGroup>
        <Button className='btn-lg btn-dark btn-block'>Log In</Button>
    </Form>
  )
}
