import React from "react";
import NavbarLandingBeforeLogin from "../../components/NavbarLandingBefore/NavbarLandingBefore";
import ButtonMulai from "../../components/Button/ButtonMulai";
import Assets from "../../assets/img";

export default function LandingPage() {
  return (
    <div>
      <NavbarLandingBeforeLogin />
      <div className="container mb-5">
        <div className="row">
          <div className="col-5 mt-5">
            <h1 className="text-start" style={{ fontSize: "50px" }}>
              Talenta terbaik negri untuk perubahan revolusi 4.0
            </h1>
            <p className="text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
            <ButtonMulai />
          </div>
          <div className="col-3 offset-2">
            <img
              src={Assets.landingImage2}
              alt=""
              style={{ width: "490px", height: "390px" }}
            />
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "180px" }}>
        <div className="row my-5">
          <div className="col-3">
            <img
              src={Assets.landingImage3}
              alt=""
              style={{ width: "490px", height: "410px" }}
            />
          </div>
          <div className="col-6 offset-2 mt-4">
            <h1 className="text-start mb-4" style={{ fontSize: "50px" }}>
              Kenapa harus mencari tallent di peworld
            </h1>
            <p className="text-start">
              <img src={Assets.tick} alt="" className="me-4" />
              Lorem ipsum dolor sit amet.
            </p>
            <p className="text-start">
              <img src={Assets.tick} alt="" className="me-4" />
              Lorem ipsum dolor sit amet.
            </p>
            <p className="text-start">
              <img src={Assets.tick} alt="" className="me-4" />
              Lorem ipsum dolor sit amet.
            </p>
            <p className="text-start">
              <img src={Assets.tick} alt="" className="me-4" />
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "180px" }}>
        <div className="row">
          <div className="col-5 mt-5">
            <h1 className="text-start" style={{ fontSize: "50px" }}>
              Skill Tallent
            </h1>
            <p className="text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
            <div className="row">
              <div className="col-4">
                <p className="text-start">
                  <img src={Assets.tick2} alt="" className="me-4" />
                  Java
                </p>
              </div>
              <div className="col-3 offset-2">
                <p className="text-start">
                  <img src={Assets.tick2} alt="" className="me-4" />
                  Golang
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <p className="text-start">
                  <img src={Assets.tick2} alt="" className="me-4" />
                  Kotlin
                </p>
              </div>
              <div className="col-3 offset-2">
                <p className="text-start">
                  <img src={Assets.tick2} alt="" className="me-4" />
                  C++
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <p className="text-start">
                  <img src={Assets.tick2} alt="" className="me-4" />
                  PHP
                </p>
              </div>
              <div className="col-3 offset-2">
                <p className="text-start">
                  <img src={Assets.tick2} alt="" className="me-4" />
                  Ruby
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <p className="text-start">
                  <img src={Assets.tick2} alt="" className="me-4" />
                  JavaScript
                </p>
              </div>
              <div className="col-6 offset-2">
                <p className="text-start">
                  <img src={Assets.tick2} alt="" className="me-4" />
                  10+ Bahasa lainnya
                </p>
              </div>
            </div>
          </div>
          <div className="col-3 offset-2">
            <img
              src={Assets.landingImage4}
              alt=""
              style={{ width: "490px", height: "390px" }}
            />
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ backgroundColor: "#F5F5F5" }}>
        <h1 style={{ marginTop: "100px" }} className="mb-5">
          Their opinion about peworld
        </h1>
        <div className="container">
          <section>
            <div className="content">
              <div className="row">
                <div className="col-4">
                  <div className="card" style={{ width: "300px" }}>
                    <div className="card-content">
                      <div className="image">
                        <img src={Assets.card1} alt="" />
                      </div>
                      <div className="name">
                        <h4>Harry Styles</h4>
                        <h6>Web Developer</h6>
                        <h6>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. In euismod ipsum et dui rhoncus auctor.
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="card" style={{ width: "300px" }}>
                    <div className="card-content">
                      <div className="image">
                        <img src={Assets.card2} alt="" />
                      </div>
                      <div className="name">
                        <h4>Niall Horan</h4>
                        <h6>Web Developer</h6>
                        <h6>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. In euismod ipsum et dui rhoncus auctor.
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="card" style={{ width: "300px" }}>
                    <div className="card-content">
                      <div className="image">
                        <img src={Assets.card3} alt="" />
                      </div>
                      <div className="name">
                        <h4>Louis Tomlinson</h4>
                        <h6>Web Developer</h6>
                        <h6>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. In euismod ipsum et dui rhoncus auctor.
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
