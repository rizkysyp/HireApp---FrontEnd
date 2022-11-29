import React, { useState, useEffect } from "react";
import Assets from "../../assets/img";
import CardProfile from "../../components/CardProfile/CardProfile";
import "./editProfilePekerja.module.css";
import style from "./editProfilePekerja.module.css";
import { Form } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import NavbarHome from "../../components/NavbarHome/navbarHome";
import FormSkill from "../../components/Form/FormSkill.";
import FormExperience from "../../components/Form/FormExperience";
import FormPortofolio from "../../components/Form/FormPortofolio";
import Axios from "axios";
import { useSelector } from "react-redux";

export default function EditProfile() {
  const [data, setData] = useState("");
  const token = useSelector((state) => state.data);
  const [inputData, setInputData] = useState({
    name: "",
    jobdesc: "",
    domisili: "",
    tempatKerja: "",
    desc: "",
  });
  const postForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", inputData.name);
    formData.append("jobdesc", inputData.jobdesc);
    formData.append("domisili", inputData.domisili);
    formData.append("tempatKerja", inputData.tempatKerja);
    formData.append("desc", inputData.desc);
    console.log("Data: ", formData);
    Axios.put(
      `https://rich-gold-gorilla-wear.cyclic.app/register/updateuserspekerja/${token}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
      .then((res) => {
        console.log("input data success");
        console.log(res);
        getData();
      })
      .catch((err) => {
        console.log("input data fail");
        console.log(err);
      });
  };
  const getData = () => {
    Axios.get(
      `https://rich-gold-gorilla-wear.cyclic.app/register/detailpekerja/${token}`
    )
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.value]: e.target.value,
    });
    console.log(data);
  };

  return (
    <div>
      <header className="container">
        <NavbarHome />
      </header>
      <div className="row">
        <div className="col-lg-12">
          <img src={Assets.bg} alt="" className={style.imagebg} />
        </div>
      </div>
      <div className="row bg-light" style={{ marginTop: "-250px" }}>
        <div className="col-3">
          <CardProfile />
          <div className="row" onSubmit={postForm}>
            <div className="col-12">
              <div
                className="btn"
                style={{
                  backgroundColor: "#5E50A1",
                  color: "white",
                  width: "300px",
                  marginLeft: "110px",
                }}
                onClick={postForm}
                type="submit"
              >
                <h6 className="myfont4" style={{ marginTop: "3px" }}>
                  Simpan
                </h6>
              </div>
            </div>
            <div className="col-12 mt-2">
              <div
                className="btn"
                style={{
                  borderColor: "#5E50A1",
                  color: "#5E50A1",
                  width: "300px",
                  marginLeft: "110px",
                }}
              >
                <h6 className="myfont4" style={{ marginTop: "3px" }}>
                  Batal
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 offset-1 mt-3" onSubmit={postForm}>
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
                      type="text"
                      placeholder="Masukan nama lengkap"
                      className="myfont3"
                      value={inputData.name}
                      onChange={handleChange}
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
                      value={inputData.jobdesc}
                      onChange={handleChange}
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
                      value={inputData.domisili}
                      onChange={handleChange}
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
                      value={inputData.tempatKerja}
                      onChange={handleChange}
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
                      type="text"
                      as="textarea"
                      placeholder="Tuliskan deskripsi singkat"
                      className="myfont3"
                      value={inputData.desc}
                      onChange={handleChange}
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
