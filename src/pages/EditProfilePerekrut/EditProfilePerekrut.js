/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Assets from "../../assets/img";
import "./editProfilePerekrut.css";
import { Form } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import NavbarHome from "../../components/NavbarHome/navbarHome";
import axios from "axios";
import Swal from "sweetalert2";
import ModalPhotoPerekrut from "../../components/ModalPhotoPerekrut";

export default function EditPerekrut() {
  const [data, setData] = useState(null);
  const token = localStorage.getItem("Token");

  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    axios
      .get(
        `https://hireapp-be-production-e91c.up.railway.app/users/profile`,
        user
      )
      .then((res) => {
        console.log("Get detail user success");
        console.log(res.data);
        res.data && setData(res.data.data[0]);
      })
      .catch((err) => {
        console.log("Get detail user fail");
        console.log(err);
      });
  }, []);
  const [updateData, setUpdateData] = useState({
    company_name: data?.company_name,
    position: data?.position,
    province: data?.province,
    city: data?.city,
    company_email: data?.company_email,
    companyphone: data?.companyphone,
    linkedin: data?.linkedin,
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
    formData.append("company_name", updateData.company_name);
    formData.append("position", updateData.position);
    formData.append("province", updateData.province);
    formData.append("city", updateData.city);
    formData.append("company_email", updateData.company_email);
    formData.append("companyphone", updateData.companyphone);
    formData.append("linkedin", updateData.linkedin);
    console.log(formData);
    axios
      .put(
        `https://hireapp-be-production-e91c.up.railway.app/users/update-company`,
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
      <NavbarHome />
      <div className="row bg-light">
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
                  <ModalPhotoPerekrut />
                  <h6 className="myfont4 mt-3 text-start">
                    {data?.company_name}
                  </h6>
                  <h6 className="myfont3 text-start">{data?.position}</h6>
                  <div className="row">
                    <div className="col-lg-1">
                      <img src={Assets.map} alt="" />
                    </div>
                    <div className="col-lg-10">
                      <p className="myfont3 color-font text-start">
                        {data?.city},{data?.province}
                      </p>
                    </div>
                  </div>
                  {/* <p className="myfont3 color-font">Freelancer</p> */}
                </div>
              </div>
            </div>
          </section>
          <div>
            <button
              type="submit"
              onClick={(e) => handleData(e)}
              className="btn"
              style={{
                backgroundColor: "#5E50A1",
                color: "white",
                width: "300px",
                marginLeft: "100px",
              }}
            >
              Simpan
            </button>
          </div>
          <button
            className="btn"
            style={{
              borderColor: "#5E50A1",
              color: "#5E50A1",
              width: "300px",
              marginLeft: "100px",
              marginTop: "10px",
            }}
          >
            Batal
          </button>
        </div>
        <div className="col-6 offset-1 mt-3" style={{ marginBottom: "400px" }}>
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
                      <h6 className="myfont3 color-font">Nama Perusahaan</h6>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukan Nama Perusahaan"
                      className="myfont3"
                      name="company_name"
                      onChange={(e) => handleChange(e)}
                      value={updateData.company_name}
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
                      onChange={(e) => handleChange(e)}
                      name="position"
                      value={updateData.position}
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
                      onChange={(e) => handleChange(e)}
                      name="city"
                      value={updateData.city}
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
                      <h6 className="myfont3 color-font">Provinsi</h6>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukan provinsi"
                      onChange={(e) => handleChange(e)}
                      name="province"
                      value={updateData.province}
                      className="myfont3"
                    />
                  </Form.Group>
                </div>
                {/* <div className="col-lg-12">
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
                </div> */}
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
                      onChange={(e) => handleChange(e)}
                      name="company_email"
                      value={updateData.company_email}
                      className="myfont3"
                    />
                  </Form.Group>
                </div>
                {/* <div className="col-lg-12">
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
                </div> */}
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
                      placeholder="Masukan telepon"
                      onChange={(e) => handleChange(e)}
                      value={updateData.companyphone}
                      name="companyphone"
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
                      placeholder="Masukan linkedin"
                      onChange={(e) => handleChange(e)}
                      value={updateData.linkedin}
                      name="linkedin"
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
