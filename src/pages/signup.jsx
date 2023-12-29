import React, { Component } from 'react';

import FormComp from './form';

import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

export class Signup extends Component {
    constructor() {
        super();
        this.state = {
            processLevel: 1,
            email: "",
            emailValidate: "",
        }
    }

    validateEmail = () => {
        let validation = this.state.email.match(/^[\w-\.]+@(\gmail\b)+\.+[\w-]{2,4}$/g)
        if (validation) {
            this.setState({ emailValidate: "" });
            this.setState({ processLevel: 2 });
        } else {
            this.setState({ emailValidate: "Enter valid Email ID " })
        }
    }

    render() {
        let level = this.state.processLevel;
        return (
        <>
            {level === 1 ? <div className="text-center mt-5 mx-auto">
                <div className='fw-bold fs-2 mb-4'>Sign Up!</div>
                <div className='d-flex align-center justify-content-center'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email Address" onChange={(e) => this.setState({ email: e.target.value })} />
                            <Form.Text className="text-danger fw-bold">
                                {this.state.emailValidate}
                            </Form.Text>
                        </Form.Group>
                    </Form>
                    <Button variant="warning" className='h-25 ms-2 small fw-bold' onClick={this.validateEmail}>Submit</Button>
                </div>
            </div> : <FormComp />}
        </>
        )
    }
}

export default Signup;