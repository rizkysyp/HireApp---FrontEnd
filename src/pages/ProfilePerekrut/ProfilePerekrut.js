import React from "react";
import { Link } from "react-router-dom";
import Assets from "../../assets/img";
import Footer from "../../components/Footer/Footer";
import ModalProfilePerekrut from "../../components/Modal/ModalProfilePerekrut";
import NavbarHome from "../../components/NavbarHome/navbarHome";
import "./ProfilePerekrut.css";

export default function ProfilePerekrut() {
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
                <h5 className="myfont4 mt-1">PT. Martabat Jaya Abadi</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-12 ">
                <h5 className="myfont3 mt-3">Financial</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h5 className="myfont3 mt-3">
                  <img src={Assets.map} alt="" /> Purwokerto, Jawa Tengah
                </h5>
              </div>
            </div>
            <div className="row ">
              <div className="col-9">
                <h5 className="myfont3 mt-3 " style={{ marginLeft: "300px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum erat orci, mollis nec gravida sed, ornare quis
                  urna. Curabitur eu lacus fringilla, vestibulum risus at.
                </h5>
              </div>
            </div>
            <div className="row">
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
                  martabatjaya@gmail.com
                </h5>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h5 className="myfont3 mt-3">
                  <img src={Assets.ig} alt="" className="mx-4" />{" "}
                  martabat_jayamartabat_jaya
                </h5>
              </div>
            </div>
            <div className="row ">
              <div className="col-12">
                <h5 className="myfont3 mt-3">
                  <img src={Assets.phone} alt="" className="mx-4" />
                  0821-8190-1821
                </h5>
              </div>
            </div>
            <div className="row" style={{ marginBottom: "300px" }}>
              <div className="col-12">
                <h5 className="myfont3 mt-3">
                  <img src={Assets.linkedin} alt="" className="mx-4" />
                  Martabat Jaya Abadi
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
