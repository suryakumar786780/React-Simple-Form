import React, { Component } from 'react'

import Logo from "../assets/formlogo.png";
import { IconList, IconData } from '../data/dataLists';

export class InfoComp extends Component {
    render() {
        return (
            <>
                <div className='p-3'>
                    <div className="logo d-flex">
                        <img src={Logo} alt="logo" height={60} width={200} />
                        <div style={{marginLeft:'1rem'}}>
                            <p className='fw-bold fs-5 mb-0'>Surya Softwares</p>
                            <p className="mt-0"><small>Beyond Expectation</small></p>
                        </div>
                    </div>
                    <div className="details ms-3 mt-3" >
                        {
                            IconList.map((a, i) => {
                                return <p className='mb-0' key={i}> <i className={a} style={{ color: "green" }} ></i> {IconData[i]} </p>
                            })
                        }
                    </div>
                    <div className="batch text-center mt-3">
                        <p className='fs-5 text-uppercase badge bg-success fw-normal rounded-pill'>Registration Form</p>
                    </div>
                    <div className='w-50 d-flex ms-3'>
                        <label htmlFor="date" className='pe-2 border-bottom'>Date:</label>
                        <input type="text" className='border-none border-bottom w-50' name='date' id="date" />
                    </div>
                </div>

                <div style={{ height: "57px" }} className="d-flex justify-content-center px-3 mt-2 border-bottom">
                    
                        <div className='position-relative'>
                            <div className='position-absolute ribbon ribbon1'></div> 
                            <div className='position-absolute ribbon ribbon2'></div>
                            <p className='fs-5 text-uppercase badge bg-success fw-normal mb-0 rounded-0 px-4'>PERSIONAL INFORMATION</p>
                            <div style={{position:"absolute",width:"247px",backgroundColor:"#ffffff",bottom:"-1px",height:"1px",marginLeft:"20px"}}/>
                        </div>
                </div>
            </>
        )
    }
}



export default InfoComp