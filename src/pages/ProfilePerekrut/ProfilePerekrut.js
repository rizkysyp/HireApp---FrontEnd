import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import Assets from "../../assets/img";
import Footer from "../../components/Footer/Footer";
import ModalProfilePerekrut from "../../components/Modal/ModalProfilePerekrut";
import NavbarHome from "../../components/NavbarHome/navbarHome";
import "./ProfilePerekrut.css";

export default function ProfilePerekrut() {
  const [data, setData] = useState(null);
  // const user = useSelector((state) => state.user.user);
  // let users = `${process.env.REACT_APP_URL_ROUTE}/register/detailperekrut/${user.id}`;
  let users = `${process.env.REACT_APP_URL_ROUTE}/register/detailperekrut/da5ce4f3-d6ce-4266-874d-1bd03a5d8a2e`;
  useEffect(() => {
    axios
      .get(users)
      .then((res) => {
        console.log("get data success");
        console.log(res.data);
        res.data && setData(res.data.data);
      })
      .catch((err) => {
        console.log("get data fail");
        console.log(err);
      });
  }, []);
  return (
    <div>
      <NavbarHome />
      <div className="container-fluid" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <img
                src={Assets.bg}
                alt=""
                className="image-bg-2"
                style={{ borderRadius: "10px 10px 0px 0px" }}
              />
            </div>
            <div className="row">
              <div className="col-12">
                <img src={Assets.card1} alt="" style={{ marginTop: "-60px" }} />
              </div>
            </div>
            <div className="col-12 bg">
              <ModalProfilePerekrut />
            </div>
            <div className="row">
              <div className="col-12 ">
                <h5 className="myfont4 mt-1">
                  {data ? data[0].company_name : "data not found"}
                </h5>
              </div>
            </div>
            <div className="row">
              <div className="col-12 ">
                <h5 className="myfont3 mt-3">
                  {data ? data[0].bidang : "data not found"}
                </h5>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h5 className="myfont3 mt-3">
                  <img src={Assets.map} alt="" />{" "}
                  {data ? data[0].domisili : "data not found"}
                </h5>
              </div>
            </div>
            <div className="row ">
              <div className="col-9">
                <h5 className="myfont3 mt-3 " style={{ marginLeft: "300px" }}>
                  {data ? data[0].deskripsi : "data not found"}
                </h5>
              </div>
            </div>
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
            <div className="row">
              <div className="col-12">
                <h5 className="myfont3 mt-3">
                  <img src={Assets.mail2} alt="" className="mx-4" />{" "}
                  {data ? data[0].email_perusahaan : "data not found"}
                </h5>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h5 className="myfont3 mt-3">
                  <img src={Assets.ig} alt="" className="mx-4" />{" "}
                  {data ? data[0].ig : "data not found"}
                </h5>
              </div>
            </div>
            <div className="row ">
              <div className="col-12">
                <h5 className="myfont3 mt-3">
                  <img src={Assets.phone} alt="" className="mx-4" />
                  {data ? data[0].phonenumber : "data not found"}
                </h5>
              </div>
            </div>
            <div className="row" style={{ marginBottom: "300px" }}>
              <div className="col-12">
                <h5 className="myfont3 mt-3">
                  <img src={Assets.linkedin} alt="" className="mx-4" />
                  {data ? data[0].linkedin : "data not found"}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
