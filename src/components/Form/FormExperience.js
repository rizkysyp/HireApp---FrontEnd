import React from "react";
import { Form } from "react-bootstrap";
const FormExperience = () => {
  return (
    <div>
      <div className="container text-start shadow rounded-2 mt-3">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="myfont4 mt-4">Pengalaman kerja</h3>
          </div>
          <hr />
        </div>
        <Form>
          <div className="row">
            <div className="col-lg-12">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <h6 className="myfont3 color-font">Posisi</h6>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="web developer"
                  className="myfont3"
                />
              </Form.Group>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>
                    <h6 className="myfont3 color-font">Nama perusahaan</h6>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="PT Harus bisa"
                    className="myfont3"
                  />
                </Form.Group>
              </div>
              <div className="col-lg-6">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>
                    <h6 className="myfont3 color-font">Bulan/tahun</h6>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Januari 2018"
                    className="myfont3"
                  />
                </Form.Group>
              </div>
            </div>
            <div className="col-lg-12">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <h6 className="myfont3 color-font">Deskripsi singkat</h6>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Deskripsikan pekerjaan anda"
                  className="myfont3"
                />
              </Form.Group>
              <hr />
              <div className="col-lg-12 align-items-center mb-5">
                <div
                  className="btn"
                  id="btn-yellw"
                  style={{
                    width: "680px",
                    marginLeft: "26px",
                  }}
                >
                  <h6 className="myfont" style={{ marginTop: "8px" }}>
                    Tambah pengalaman kerja
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default FormExperience;
