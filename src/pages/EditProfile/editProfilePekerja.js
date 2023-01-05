/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Assets from "../../assets/img";
import "./editProfilePekerja.module.css";
import { Form } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import NavbarHome from "../../components/NavbarHome/navbarHome";
import FormSkill from "../../components/Form/FormSkill.";
import FormExperience from "../../components/Form/FormExperience";
import FormPortofolio from "../../components/Form/FormPortofolio";
import axios from "axios";
import Swal from "sweetalert2";
import ModalPhotoPekerja from "../../components/ModalPhotoPekerja";

export default function EditProfile() {
  const [data, setData] = useState(null);
  const token = localStorage.getItem("Token");
  console.log("ini token", token);

  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  let getData =
    "https://hireapp-be-production-e91c.up.railway.app/users/profile";
  useEffect(() => {
    axios
      .get(getData, user)
      .then((res) => {
        console.log("Get detail user success");
        console.log(res.data.data[0]);
        res.data && setData(res.data.data[0]);
      })
      .catch((err) => {
        console.log("Get detail user fail");
        console.log(err);
      });
  }, []);

  const [updateData, setUpdateData] = useState({
    name: data?.name,
    job: data?.job,
    city: data?.city,
    province: data?.province,
    workplace: data?.workplace,
    description: data?.description,
    instagram: data?.instagram,
    github: data?.github,
  });
  const handleChange = (e) => {
    setUpdateData({
      ...updateData,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };
  const handleData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", updateData.name);
    formData.append("job", updateData.job);
    formData.append("city", updateData.city);
    formData.append("province", updateData.province);
    formData.append("workplace", updateData.workplace);
    formData.append("description", updateData.description);
    formData.append("instagram", updateData.instagram);
    formData.append("github", updateData.github);
    console.log(formData);
    axios
      .put(
        `https://hireapp-be-production-e91c.up.railway.app/users/update-employee`,
        formData,
        user,
        {
          "content-type": "multipart/form-data",
        }
      )
      .then((res) => {
        console.log("Update profile succes");
        console.log(res);
        window.location.reload(false);
        Swal.fire("Success", "Update profile success", "success");
      })
      .catch((err) => {
        console.log("Update data profile failed");
        console.log(err);
        Swal.fire("Warning", "Update profile failed", "error");
      });
  };
  return (
    <div>
      <header className="container">
        <NavbarHome />
      </header>
      <div className="row">
        <div className="col-lg-12">
          <img src={Assets.bg} alt="" className="image-bg" />
        </div>
      </div>
      <div className="row bg-light" style={{ marginTop: "-250px" }}>
        <div className="col-3">
          <section className="section">
            <div className="card" style={{ marginLeft: "100px" }}>
              <div className="card-content">
                <div className="image">
                  {data?.photo ? (
                    <img src={data.photo} alt="" />
                  ) : (
                    <img src={Assets.bg} alt="" />
                  )}
                </div>
                <div className="name">
                  <ModalPhotoPekerja />
                  <h4 className="myfont4 mt-3 text-start">{data?.name}</h4>
                  <h6 className="myfont3 text-start">{data?.job}</h6>
                  <div className="row">
                    <div className="col-lg-1">
                      <img src={Assets.map} alt="" />
                    </div>
                    <div className="col-lg-10">
                      <p className="myfont3 color-font text-start">
                        {data?.city}, {data?.province}
                      </p>
                    </div>
                  </div>
                  <p className="myfont3 color-font text-start">
                    {data?.workplace}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="row">
            <div className="col-12">
              <div
                className="btn"
                onClick={(e) => handleData(e)}
                style={{
                  backgroundColor: "#5E50A1",
                  color: "white",
                  width: "300px",
                  marginLeft: "100px",
                }}
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
                  marginLeft: "100px",
                }}
              >
                <h6 className="myfont4" style={{ marginTop: "3px" }}>
                  Batal
                </h6>
              </div>
            </div>
          </div>
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
                      name="name"
                      onChange={(e) => handleChange(e)}
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
                      name="job"
                      onChange={(e) => handleChange(e)}
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
                      placeholder="Masukan domisili"
                      className="myfont3"
                      name="city"
                      onChange={(e) => handleChange(e)}
                    />
                  </Form.Group>
                </div>
                <div className="col-lg-12">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      <h6 className="myfont3 color-font">Provinsi</h6>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukan domisili"
                      className="myfont3"
                      name="province"
                      onChange={(e) => handleChange(e)}
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
                      name="workplace"
                      onChange={(e) => handleChange(e)}
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
                      name="description"
                      onChange={(e) => handleChange(e)}
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
                      placeholder="Masukan username instagram"
                      className="myfont3"
                      name="instagram"
                      onChange={(e) => handleChange(e)}
                    />
                  </Form.Group>
                </div>
                <div className="col-lg-12">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      <h6 className="myfont3 color-font">Github</h6>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukan akun github"
                      className="myfont3"
                      name="github"
                      onChange={(e) => handleChange(e)}
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
