import React, { Component } from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { Titles, DataNames } from '../data/dataLists';
export class DataModal extends Component {
    render() {
        return (
            <>
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            User Details
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {
                            Titles.map((ele, index) => {
                                return <p key={index}>{ele}     :    {this.props.data[DataNames[index]]} </p>
                            })
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default DataModal