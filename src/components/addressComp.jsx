import React, { Component } from 'react'

export class AddressComp extends Component {
  render() {
    return (
      <div className='present-address mt-3 d-flex w-100 m-sm justify-content-between ps-5'>
        <div className='w-100 border-bottom d-flex me-5'>
          <div className='w-25 w-sm-50'>
            <label htmlFor="address" className='w-address res-width'>Present Address</label>
            <span className='w-25'>:</span>
          </div>
          <div className='w-75 w-sm-50'>
            <input type="text" name="address" className='border-none w-100' id="address" />
          </div>
        </div >
      </div>
    )
  }
}

export default AddressComp