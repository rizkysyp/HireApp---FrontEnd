import React from "react";
import Assets from "../../assets/img";
import CardProfile from "../../components/CardProfile/CardProfile";
import "./editProfilePerekrut.css";
import { Form } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import NavbarHome from "../../components/NavbarHome/navbarHome";

export default function EditPerekrut() {
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
        <div className="col-6 offset-1 mt-3" style={{ marginBottom: "400px" }}>
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
                      <h6 className="myfont3 color-font">Nama Perusahaan</h6>
                    </Form.Label>
                    <Form.Control
                      type="name"
                      placeholder="Masukan nama perusahan"
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
                      <h6 className="myfont3 color-font">Bidang</h6>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukan bidang perusahaan ex : Financial"
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
                      <h6 className="myfont3 color-font">Kota</h6>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukan kota"
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
                <div className="col-lg-12">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      <h6 className="myfont3 color-font">Email</h6>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Masukan email"
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
                      <h6 className="myfont3 color-font">Instagram</h6>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukan nama Instagram"
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
                      <h6 className="myfont3 color-font">Nomor Telepon</h6>
                    </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Masukan nomor telepon"
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
                      <h6 className="myfont3 color-font">Linkedin</h6>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukan nama Linkedin"
                      className="myfont3"
                    />
                  </Form.Group>
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
