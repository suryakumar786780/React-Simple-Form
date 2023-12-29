import React, { Component } from 'react'

export class InputsComp extends Component {
    render() {
        return (
            <div className='mt-3 d-flex wrapping px-5'>
                <div className='w-50 w-sm me-5 mb-3 d-flex wrapping border-bottom'>
                    <div className='w-50'>
                        <label htmlFor={this.props.name1} className='w-75'>{this.props.label1}</label>
                        <span className='w-25'>:</span>
                    </div>
                    <div className='w-50 m-left'>
                        <input type="text" name={this.props.name1} className='border-none w-100' id={this.props.name1} />
                    </div>
                </div>
                <div className="w-50 w-sm border-bottom d-flex wrapping mb-3">
                    <div className='w-50'>
                        <label htmlFor={this.props.name2} className='w-75'>{this.props.label2}</label>
                        <span className='w-25'>:</span>
                    </div>
                    <div className='w-50 m-left'>
                        <input type="text" name={this.props.name2} className='border-none w-100' id={this.props.name2} />
                    </div>
                </div>
            </div>
        )
    }
}

export default InputsComp