import React from "react";
import Assets from "../../assets/img";
import CardProfile from "../../components/CardProfile/CardProfile";
import "./editProfilePekerja.css";
import { Form } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { purple } from "@mui/material/colors";
import NavbarHome from "../../components/NavbarHome/navbarHome";
import ModalPortofolio from "../../components/Modal/ModalPortofolio";

export default function editProfile() {
  return (
    <div>
      <NavbarHome />
      <div className="row">
        <div className="col-lg-12">
          <img src={Assets.bg} alt="" className="image-bg" />
        </div>
      </div>

      <div className="row" style={{ marginTop: "-250px" }}>
        <div className="col-3">
          <CardProfile />
        </div>
        <div className="col-6 offset-1 mt-3">
          <div className="container text-start shadow rounded-2 mt-1 bg-white">
            <div className="row">
              <div className="col-lg-12">
                <h3 className="myfont4 mt-4">Data diri</h3>
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
                      <h6 className="myfont3 color-font">Nama lengkap</h6>
                    </Form.Label>
                    <Form.Control
                      type="name"
                      placeholder="Masukan nama lengkap"
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
                      <h6 className="myfont3 color-font">Job desk</h6>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukan job desk"
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
                      <h6 className="myfont3 color-font">Domisili</h6>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukan domisili"
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
                      <h6 className="myfont3 color-font">Tempat kerja</h6>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukan tempat kerja"
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
                      <h6 className="myfont3 color-font">Deskripsi singkat</h6>
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Tuliskan deskripsi singkat"
                      className="myfont3"
                    />
                  </Form.Group>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-6 offset-4 mt-3">
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
      </div>

      <div className="row">
        <div className="col-6 offset-4 mt-3">
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
      </div>

      <div className="row">
        <div className="col-6 offset-4 mt-3">
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
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
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
      </div>
      <Footer />
    </div>
  );
}
