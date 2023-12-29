import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';

export class Radiobuttons extends Component {
    render() {
        return (
            <div className="radio-btns w-75 w-sm mt-3 d-flex ps-5">
                <div className='w-25 w-sm-50 d-flex'>
                    <label htmlFor={this.props.title} className='w-radio w-sm-75'>{this.props.title}</label>
                    <span className=''>:</span>
                </div>
                <div className='w-50 w-sm-50 ps-xl-5 d-flex wrapping'>
                    <Form.Check
                        className='w-50 w-sm'
                        label={this.props.option1}
                        name={this.props.title}
                        type='radio'
                        value={this.props.option1}
                        id={this.props.option1}
                    />
                    <Form.Check
                        className='w-50 w-sm'
                        label={this.props.option2}
                        name={this.props.title}
                        type='radio'
                        value={this.props.option2}
                        id={this.props.option2}
                    />
                </div>
            </div>
        )
    }
}

export default Radiobuttons