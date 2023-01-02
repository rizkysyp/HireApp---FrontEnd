import React from "react";
import NavbarLandingBeforeLogin from "../../components/NavbarLandingBefore/NavbarLandingBefore";
import ButtonMulai from "../../components/Button/ButtonMulai";

import "./LandingPage.css";
import Assets from "../../assets/img";
import Footer from "../../components/Footer/Footer";
import ButtonMulaiWhite from "../../components/Button/ButtonMulaiWhite";
import NavbarLandingAfterLogin from "../../components/NavbarLandingAfter/NavbarLandingAfter";
import CardSwiper from "../../components/CardSwiper/CardSwiper";

export default function LandingPage() {
  const token = localStorage.getItem("Token");
  return (
    <div>
      {token ? <NavbarLandingAfterLogin /> : <NavbarLandingBeforeLogin />}
      <div className="container-sm mb-5">
        <div className="row">
          <div className="col-lg-5 col-sm-12 mt-5">
            <h1 className="text-start myfont4" style={{ fontSize: "50px" }}>
              Talenta terbaik negri untuk perubahan revolusi 4.0
            </h1>
            <p className="text-start myfont3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
            <ButtonMulai />
          </div>
          <div className="col-lg-3 col-sm-3 offset-lg-3 mt-sm-5">
            <img
              src={Assets.landingImage2}
              className=""
              alt=""
              style={{ width: "490px", height: "390px" }}
            />
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "180px" }}>
        <div className="row my-5">
          <div className="col-lg-3">
            <img
              src={Assets.landingImage3}
              alt=""
              style={{ width: "490px", height: "410px" }}
            />
          </div>
          <div className="col-lg-6 offset-lg-2 mt-4">
            <h1
              className="text-start mb-4 myfont4"
              style={{ fontSize: "50px" }}
            >
              Kenapa harus mencari tallent di peworld
            </h1>
            <p className="text-start myfont3">
              <img src={Assets.tick1} alt="" className="me-4" />
              Lorem ipsum dolor sit amet.
            </p>
            <p className="text-start  myfont3">
              <img src={Assets.tick1} alt="" className="me-4" />
              Lorem ipsum dolor sit amet.
            </p>
            <p className="text-start  myfont3">
              <img src={Assets.tick1} alt="" className="me-4" />
              Lorem ipsum dolor sit amet.
            </p>
            <p className="text-start  myfont3">
              <img src={Assets.tick1} alt="" className="me-4" />
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "180px" }}>
        <div className="row">
          <div className="col-lg-5 mt-lg-5 myfont4">
            <h1 className="text-start" style={{ fontSize: "50px" }}>
              Skill Tallent
            </h1>
            <p className="text-start myfont3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
            <div className="row">
              <div className="col-4">
                <p className="text-start myfont3">
                  <img src={Assets.tick2} alt="" className="me-4" />
                  Java
                </p>
              </div>
              <div className="col-3 offset-2" myfont3>
                <p className="text-start myfont3">
                  <img src={Assets.tick2} alt="" className="me-4" />
                  Golang
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <p className="text-start myfont3">
                  <img src={Assets.tick2} alt="" className="me-4" />
                  Kotlin
                </p>
              </div>
              <div className="col-3 offset-2">
                <p className="text-start myfont3">
                  <img src={Assets.tick2} alt="" className="me-4" />
                  C++
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <p className="text-start myfont3">
                  <img src={Assets.tick2} alt="" className="me-4" />
                  PHP
                </p>
              </div>
              <div className="col-3 offset-2">
                <p className="text-start myfont3">
                  <img src={Assets.tick2} alt="" className="me-4" />
                  Ruby
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <p className="text-start myfont3">
                  <img src={Assets.tick2} alt="" className="me-4" />
                  JavaScript
                </p>
              </div>
              <div className="col-6 offset-2">
                <p className="text-start myfont3">
                  <img src={Assets.tick2} alt="" className="me-4" />
                  10+ Bahasa lainnya
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 offset-lg-2 mt-sm-5">
            <img
              src={Assets.landingImage4}
              alt=""
              style={{ width: "490px", height: "390px" }}
            />
          </div>
        </div>
      </div>
      <div
        className="container-fluid pt-5 pb-5 content-card"
        style={{ backgroundColor: "#F5F5F5", marginTop: "200px" }}
      >
        <h1 style={{ marginTop: "100px" }} className="mb-5 myfon4">
          Their opinion about peworld
        </h1>
        <CardSwiper />
      </div>
      <div
        className="container-fluid"
        style={{ marginTop: "200px", marginBottom: "200px" }}
      >
        <div
          className="container"
          style={{
            backgroundColor: "#5E50A1",
            borderRadius: "40px 10px 40px 10px",
          }}
        >
          <div className="row">
            <div className="col-lg-3 col-sm-12">
              <h1 className="text-white my-5 myfont4">
                Lorem ipsum dolor sit amet
              </h1>
            </div>
            <div className="col-lg-3 col-sm-7 offset-lg-6 mb-sm-5">
              <ButtonMulaiWhite />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
