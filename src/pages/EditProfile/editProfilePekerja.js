import React from "react";
import Assets from "../../assets/img";
import CardProfile from "../../components/CardProfile/CardProfile";
import "./editProfilePekerja.css";
import { Form } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import NavbarHome from "../../components/NavbarHome/navbarHome";
import FormSkill from "../../components/Form/FormSkill.";
import FormExperience from "../../components/Form/FormExperience";
import FormPortofolio from "../../components/Form/FormPortofolio";

export default function editProfile() {
  return (
    <div>
      <NavbarHome />
      <div className="row">
        <div className="col-lg-12">
          <img src={Assets.bg} alt="" className="image-bg" />
        </div>
      </div>

      <div className="row bg-light" style={{ marginTop: "-250px" }}>
        <div className="col-3">
          <CardProfile />
        </div>
        <div className="col-6 offset-1 mt-3">
          <div className="container text-start shadow rounded-2 mt-1 bg-white">
            <div className="row bg-light rounded-3">
              <div className="col-lg-12">
                <h3 className="myfont4 mt-4">Data diri</h3>
              </div>
              <hr />
            </div>
            <Form>
              <div className="row bg-light">
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

      <div className="row bg-light">
        <div className="col-6 offset-4 mt-3">
          <FormSkill />
        </div>
      </div>

      <div className="row bg-light">
        <div className="col-6 offset-4 mt-3">
          <FormExperience />
        </div>
      </div>

      <div className="row bg-light">
        <div className="col-6 offset-4 mt-3">
          <FormPortofolio />
        </div>
      </div>
      <Footer />
    </div>
  );
}
