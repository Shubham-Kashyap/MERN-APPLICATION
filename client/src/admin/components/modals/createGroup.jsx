import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap';


const CreateGroup = (props) => {

    const handleChange = (e) => {
        console.log('hello');
    }
    const createNewGroup = () => {
        console.log('world');
    }
    return (
        <>
            <Modal
                {...props}
                tabIndex="-1"
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                className="modal-for-delete-video-data"
            // centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <span className="fa fa-plus"></span> Create Group :
                    </Modal.Title>
                </Modal.Header>
                <Form onSubmit={createNewGroup}>
                    <Modal.Body>
                        <div className="modal-body">

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Tag Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter tag name" name="group_name" onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Select category</Form.Label>
                                <Form.Select aria-label="Default select example" name="user_id" onChange={handleChange}>
                                    <option value="">Select users that you want to select and use</option>
                                    {
                                        props.individualList.map((individual, index) => (
                                            <option value={individual._id}>{individual.name}</option>
                                        ))
                                    }
                                </Form.Select>

                            </Form.Group>

                        </div>
                    </Modal.Body>
                    <Modal.Footer className="modal-no-button">
                        <Button onClick={props.onHide}>Close</Button>
                        <Button type="submit" value="Save" >Save</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

export default CreateGroup
