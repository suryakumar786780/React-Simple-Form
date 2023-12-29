import React, { Component } from 'react'

import MsLogo from "../assets/formlogo.png"

export class Thankyou extends Component {
    render() {
        return (
            <div style={{ height: "100vh", backgroundColor: "rgb(217, 216, 217)" }} className='text-center'>
                <i className="bi bi-check2-circle" style={{ color: "green", fontSize: "200px" }} ></i>
                <p className='fs-2'>Thank you</p>
                <p className='fs-4'> Your submission has been send.</p>
                <img src={MsLogo} alt="thankyou"/>
            </div>
        )
    }
}

export default Thankyou