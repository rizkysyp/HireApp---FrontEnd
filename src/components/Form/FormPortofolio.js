import React from "react";
import { Form } from "react-bootstrap";
import ModalPortofolio from "../Modal/ModalPortofolio";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { purple } from "@mui/material/colors";
const FormPortofolio = () => {
  return (
    <div>
      <div
        className="container text-start shadow rounded-2 mt-1"
        style={{ marginBottom: "100px" }}
      >
        <div className="row">
          <div className="col-lg-12">
            <h3 className="myfont4 mt-4">Portofolio</h3>
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
                  <h6 className="myfont3 color-font">Nama aplikasi</h6>
                </Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Masukan nama aplikasi"
                  className="myfont3"
                />
              </Form.Group>
            </div>
            <div className="col-lg-12">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <h6 className="myfont3 color-font">Link repository</h6>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukan link repository"
                  className="myfont3"
                />
              </Form.Group>
            </div>
            <div className="col-lg-3">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <h6 className="myfont3 color-font">Type portofolio</h6>
                </Form.Label>
                <div className="row">
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="mobile"
                    name="radio-buttons-group"
                  >
                    <div className="col-lg-12">
                      <FormControlLabel
                        value="mobile"
                        control={
                          <Radio
                            sx={{
                              color: purple[800],
                              "&.Mui-checked": {
                                color: purple[800],
                              },
                            }}
                          />
                        }
                        label="Aplikasi Mobile"
                      />
                    </div>
                    <div className="col-lg-12">
                      <FormControlLabel
                        value="web"
                        control={
                          <Radio
                            sx={{
                              color: purple[800],
                              "&.Mui-checked": {
                                color: purple[800],
                              },
                            }}
                          />
                        }
                        label="Aplikasi web"
                      />
                    </div>
                  </RadioGroup>
                </div>
              </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <h6 className="myfont3 color-font">Upload gambar</h6>
              </Form.Label>
              <div className="row">
                <div className="col-lg-12">
                  <ModalPortofolio />
                </div>
              </div>
            </Form.Group>
            <hr className="mt-5" />
            <div className="col-lg-12 align-items-center mb-5 mt-5">
              <button
                className="btn "
                id="btn-yellw"
                style={{
                  width: "680px",
                  marginLeft: "26px",
                }}
              >
                <h6 className="myfont" style={{ marginTop: "8px" }}>
                  Tambah portofolio
                </h6>
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default FormPortofolio;
