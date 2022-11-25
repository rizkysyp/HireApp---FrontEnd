import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Assets from "../../assets/img";
import Form from "react-bootstrap/Form";
import { ModalBody } from "react-bootstrap";

const ModalEdit = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div
        className="btn-new image-edit"
        style={{ marginLeft: "77px" }}
        onClick={handleShow}
      >
        <img src={Assets.edit} alt="" />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Foto Profile</Modal.Title>
        </Modal.Header>
        <ModalBody>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Foto Profile</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            {/* <Form.Group className="mb-3">
              <Form.Label>Background Profile</Form.Label>
              <Form.Control type="file" />
            </Form.Group> */}
          </Form>
        </ModalBody>
        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            Close
          </button>
          <button
            className="btn "
            style={{ backgroundColor: "#5E50A1", color: "white" }}
            onClick={handleClose}
          >
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default ModalEdit;
