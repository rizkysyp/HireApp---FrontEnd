import React from "react";
import ModalEdit from "../Modal/ModalEdit";
import Assets from "../../assets/img";
import "./CardProfile.css";

const CardProfile = () => {
  return (
    <div className="container text-start">
      <section className="section">
        <div className="card" style={{ marginLeft: "100px" }}>
          <div className="card-content">
            <div className="image">
              <img src={Assets.card1} alt="" />
            </div>
            <div className="name">
              <ModalEdit />
              <h4 className="myfont4 mt-3">Harry Styles</h4>
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
            </div>
          </div>
        </div>
      </section>
      <div className="row">
        <div className="col-12">
          <div
            className="btn"
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
  );
};
export default CardProfile;
