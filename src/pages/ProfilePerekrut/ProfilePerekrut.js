/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Assets from "../../assets/img";
import Footer from "../../components/Footer/Footer";
import ModalProfilePerekrut from "../../components/Modal/ModalProfilePerekrut";
import "./ProfilePerekrut.css";
import NavbarLandingAfterLogin from "../../components/NavbarLandingAfter/NavbarLandingAfter";
import NavbarLandingBeforeLogin from "../../components/NavbarLandingBefore/NavbarLandingBefore";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function ProfilePerekrut() {
  const [data, setData] = useState(null);
  const token = localStorage.getItem("Token");
  const navigate = useNavigate();

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
  const handleLogout = async () => {
    await localStorage.clear();
    Swal.fire("Logout", "Logout success", "success");
    navigate("/loginHireApp");
  };
  return (
    <div>
      {token ? <NavbarLandingAfterLogin /> : <NavbarLandingBeforeLogin />}
      <div className="body py-5">
        <div
          className="container bg-white"
          style={{
            borderRadius: "10px 10px 10px 10px",
            marginTop: "20px",
            marginBottom: "150px",
          }}
        >
          <div className="row">
            <div
              className="col-12"
              style={{
                backgroundColor: "#5E50A1",
                height: "190px",
                borderRadius: "10px 10px 0px 0px",
              }}
            ></div>
            <div className="row">
              <div className="col-12">
                {data?.photo ? (
                  <img
                    src={data.photo}
                    alt=""
                    style={{
                      marginTop: "-50px",
                      borderRadius: "50px",
                      width: "120px",
                      height: "120px",
                    }}
                  />
                ) : (
                  <img
                    src={Assets.card1}
                    alt=""
                    style={{ marginTop: "-50px", borderRadius: "50px" }}
                  />
                )}
              </div>
            </div>
            <div className="col-12 bg">
              <ModalProfilePerekrut />
            </div>
            <div className="row">
              <div className="col-12 ">
                <h5 className="myfont4 mt-1">{data?.company_name}</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-12 ">
                <h5 className="myfont3 mt-3">{data?.position}</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h5 className="myfont3 mt-3">
                  <img src={Assets.map} alt="" /> {data?.city},{data?.province}
                </h5>
              </div>
            </div>
            {/* <div className="row ">
              <div className="col-9">
                <h5 className="myfont3 mt-3 " style={{ marginLeft: "300px" }}>
                  {data ? data[0].deskripsi : "data not found"}
                </h5>
              </div>
            </div> */}
            <div className="row mt-3 mb-3">
              <div className="col-12">
                <Link to="/editProfilePerekrut">
                  <button
                    className="btn"
                    style={{
                      backgroundColor: "#5E50A1",
                      color: "white",
                      width: "300px",
                    }}
                  >
                    {" "}
                    <h6 className="myfont4 mt-2">Edit profile</h6>{" "}
                  </button>
                </Link>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-12">
                <h5 className="myfont3 mt-3">
                  <img src={Assets.mail2} alt="" className="mx-4" />{" "}
                  {data ? data[0].email_perusahaan : "data not found"}
                </h5>
              </div>
            </div> */}
            {/* <div className="row">
              <div className="col-12">
                <h5 className="myfont3 mt-3">
                  <img src={Assets.ig} alt="" className="mx-4" />{" "}
                  {data ? data[0].ig : "data not found"}
                </h5>
              </div>
            </div> */}
            <div className="row ">
              <div className="col-12">
                <h5 className="myfont3 mt-3">
                  <img src={Assets.phone} alt="" className="mx-4" />
                  {data?.companyphone}
                </h5>
              </div>
            </div>
            <div className="row" style={{ marginBottom: "300px" }}>
              <div className="col-12">
                <h5 className="myfont3 mt-3">
                  <img src={Assets.linkedin} alt="" className="mx-4" />
                  {data?.linkedin}
                </h5>
                <button
                  className="btn"
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    marginTop: "30px",
                    marginBottom: "50px",
                    width: "220px",
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
