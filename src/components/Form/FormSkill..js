import React from "react";
import { Form } from "react-bootstrap";
const FormSkill = () => {
  return (
    <div>
      <div className="container text-start shadow rounded-2 mt-3">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="myfont4 mt-4">Skill</h3>
          </div>
          <hr />
        </div>
        <Form>
          <div className="row">
            <div className="col-lg-10">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Java"
                  className="myfont3"
                />
              </Form.Group>
            </div>
            <div className="col-lg-2">
              <button
                className="btn"
                style={{ backgroundColor: "#FBB017", color: "white" }}
              >
                Simpan
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default FormSkill;
