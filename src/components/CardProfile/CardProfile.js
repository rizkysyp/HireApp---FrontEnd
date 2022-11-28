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
    </div>
  );
};
export default CardProfile;
