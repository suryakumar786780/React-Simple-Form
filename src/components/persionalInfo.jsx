import React, { Component } from 'react'

import DataModal from './dataModal';

import InputsComp from './inputs';
import Radiobuttons from './radiobuttons';
import Button from "react-bootstrap/Button";
import { Form } from 'react-bootstrap';
import Thankyou from '../pages/thankyou';
import AddressComp from './addressComp';

export class PersionalInfo extends Component {
    constructor() {
        super();
        this.state = {
            processLevel: 2,
            userDetails: {},
            modalView: false,
            isValid: 0,
            error: "",
        }
    }
    getvalues = (e) => {
        e.preventDefault();
        let form = new FormData(e.target);
        let i = 0;
        for (const key of form.entries()) {
            this.state.userDetails[key[0]] = key[1];
            if (key[1] === "") {
                i++;
            }
        }
        if (i === 0) {
            this.setState({ error: "" })
            this.showModal();
        } else {
            this.setState({ error: "Enter valid Details" })
        }
    }
    showModal = () => {
        this.setState({ modalView: true });
    }
    render() {
        return (
            <>
                {
                    this.state.processLevel === 2 ? <>  <div className="batch text-center border-bottom">
                        <p className='fs-5 text-uppercase badge bg-success fw-normal mb-0'>PERSIONAL INFORMATION</p>
                    </div>
                        <Form className="persional-info" onSubmit={(e) => this.getvalues(e)}>
                            <div>
                                <InputsComp name1="firstName" label1="Name" name2="lastName" label2="Last Name" />
                                <Radiobuttons title="Gender" option1="Male" option2="Female" />
                                <InputsComp name1="dob" label1="Date of Birth" name2="pob" label2="Place of Birth" />
                                <InputsComp name1="fatherName" label1="Father's Name" name2="motherName" label2="Mother's Name" />
                                <InputsComp name1="nationality" label1="Nationality" name2="religion" label2="Religion" />
                                <InputsComp name1="nID" label1="National ID No." name2="dIn" label2="Driving License No." />
                                <InputsComp name1="tinNo" label1="Tin No." name2="passportNo" label2="Passport No." />
                                <Radiobuttons title="Resident Status" option1="Resident" option2="Non-Resident" />
                                <Radiobuttons title="Maritial Status" option1="Married" option2="Unmarried" />
                            </div>
                            <div className="mt-5">
                                <p className='fs-5 text-uppercase badge-details bg-success fw-normal mb-2 ps-5'>CONTACT DETAILS</p>
                            </div>
                            <div className='mx-5 border-bottom'></div>
                            <AddressComp />
                            <InputsComp name1="city" label1="City" name2="statePlace" label2="State" />
                            <InputsComp name1="pCode" label1="Postal Code" name2="country" label2="Country" />
                            <InputsComp name1="phoneNum" label1="Phone" name2="emailID" label2="Email" />

                            <div className="d-flex justify-content-between p-5">
                                <Button variant="warning" className='h-25 ms-2 small fw-bold' onClick={this.submitForm}>Reset</Button>
                                <div className='text-danger fw-bold bg-warning'>{`${this.state.error}`}</div>
                                <Button variant="warning" className='h-25 small fw-bold' type='submit'>Submit</Button>
                            </div>
                        </Form>
                        <DataModal
                            data={this.state.userDetails}
                            show={this.state.modalView}
                            onHide={() => this.setState({ modalView: false, processLevel : 3 })}
                        /></> : <Thankyou />
                }

            </>
        )
    }
}

export default PersionalInfo