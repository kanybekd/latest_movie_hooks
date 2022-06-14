import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
export default function Login({ checkIfLoggedIn }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const navigateToHome = (e) => {
        e.preventDefault()
        if (email && password) {
            checkIfLoggedIn(true)
            navigate("/")
        } else {


            navigate("/login")
            alert("type fields")
        }

    }

    const handleChange = (e) => {
        if (e.target.name === "email") {
            setEmail(e.target.value)
        } else {
            setPassword(e.target.value)
        }
    }

    return (
        <div className="row">
            <div className="col-12 col-sm-4 offset-3">

                <Form onSubmit={navigateToHome}>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input value={email} onChange={handleChange} type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input value={password} onChange={handleChange} type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </FormGroup>




                    <Button>Submit</Button>
                </Form>
            </div>
        </div>
    );

}