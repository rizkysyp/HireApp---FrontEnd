import React from "react";
import ModalEdit from "../Modal/ModalEdit";
import Assets from "../../assets/img";
import "./CardProfile.css";

const CardProfilePortofolio = () => {
  return (
    <div className="container text-start">
      <section className="section">
        <div
          className="card"
          style={{ marginLeft: "100px", marginBottom: "300px" }}
        >
          <div className="card-content">
            <div className="image">
              <img src={Assets.card3} alt="" />
            </div>
            <div className="name">
              <ModalEdit />
              <h4 className="myfont4 mt-3">Louis Tomlinson</h4>
              <h6 className="myfont3">Web Developer</h6>
              <div className="row">
                <div className="col-lg-1">
                  <img src={Assets.map} alt="" />
                </div>
                <div className="col-lg-10">
                  <p className="myfont3 color-font">Purwokerto, Jawa Tengah</p>
                </div>
              </div>
              <p className="myfont3 color-font">Freelancer</p>
              <p className="myfont3 color-font">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum erat orci, mollis nec gravida sed, ornare quis urna.
                Curabitur eu lacus fringilla, vestibulum risus at.
              </p>
              <div
                className="btn"
                style={{
                  backgroundColor: "#5E50A1",
                  color: "white",
                  width: "250px",
                }}
              >
                <h6 className="myfont4" style={{ marginTop: "3px" }}>
                  Hire
                </h6>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12 ">
                <h4 className="myfont2" style={{ marginRight: "190px" }}>
                  Skill
                </h4>
              </div>
              <div className="col-5 ">
                <div className="card-1 mt-3">
                  <div
                    className="btn"
                    style={{ backgroundColor: "#FBB017", color: "white" }}
                  >
                    Phyton
                  </div>
                </div>
              </div>
              <div className="col-5 ">
                <div className="card-1 mt-3">
                  <div
                    className="btn"
                    style={{ backgroundColor: "#FBB017", color: "white" }}
                  >
                    Laravel
                  </div>
                </div>
              </div>
              <div className="col-5 ">
                <div className="card-1 mt-3">
                  <div
                    className="btn"
                    style={{ backgroundColor: "#FBB017", color: "white" }}
                  >
                    JavaScript
                  </div>
                </div>
              </div>
              <div className="col-5 ">
                <div className="card-1 mt-3">
                  <div
                    className="btn"
                    style={{ backgroundColor: "#FBB017", color: "white" }}
                  >
                    PHP
                  </div>
                </div>
              </div>
              <h6 className="myfont3 color-font mt-4">
                {" "}
                <img src={Assets.mail} alt="" style={{ marginRight: "10px" }} />
                Louistommo@gmail.com
              </h6>
              <h6 className="myfont3 color-font mt-2">
                {" "}
                <img src={Assets.ig} alt="" style={{ marginRight: "10px" }} />
                @Louist91
              </h6>
              <h6 className="myfont3 color-font mt-2">
                {" "}
                <img
                  src={Assets.github}
                  alt=""
                  style={{ marginRight: "10px" }}
                />
                @Louistommo
              </h6>
              <h6 className="myfont3 color-font mt-2">
                {" "}
                <img src={Assets.vec} alt="" style={{ marginRight: "10px" }} />
                @Louistommo91
              </h6>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default CardProfilePortofolio;
