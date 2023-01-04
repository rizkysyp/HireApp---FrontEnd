/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Assets from "../../assets/img";
import Footer from "../../components/Footer/Footer";
import NavbarHome from "../../components/NavbarHome/navbarHome";
import NavTabs from "../../components/NavTabs/NavTabs";
import axios from "axios";
import Skill from "../../components/Skill/Skill";
import ModalPhotoPekerja from "../../components/ModalPhotoPekerja";
import { useNavigate } from "react-router-dom";

export default function ProfilePekerja() {
  const [data, setData] = useState(null);
  const token = localStorage.getItem("Token");
  console.log("ini token", token);

  const navigate = useNavigate();

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
  return (
    <div>
      <NavbarHome />
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
                  <p
                    className="myfont3 color-font text-start"
                    style={{ marginBottom: "50px" }}
                  >
                    {data?.description}
                  </p>
                  <button
                    className="btn"
                    style={{
                      backgroundColor: "#5E50A1",
                      color: "white",
                      marginBottom: "50px",
                      width: "220px",
                    }}
                    onClick={() => navigate(`/editProfile`)}
                  >
                    Edit Profile
                  </button>
                  <h4 className="myfont2" style={{ marginRight: "190px" }}>
                    Skill
                  </h4>
                  <Skill />
                  <h6 className="myfont3 color-font mt-5">
                    {" "}
                    <img
                      src={Assets.mail}
                      alt=""
                      style={{ marginRight: "10px", marginLeft: "0px" }}
                    />
                    {data ? data?.email : "data not found"}
                  </h6>
                  <h6 className="myfont3 color-font mt-2">
                    {" "}
                    <img
                      src={Assets.ig}
                      alt=""
                      style={{ marginRight: "10px", marginLeft: "0px" }}
                    />
                    {data ? data?.instagram : "data not found"}
                  </h6>
                  <h6 className="myfont3 color-font mt-2">
                    {" "}
                    <img
                      src={Assets.github}
                      alt=""
                      style={{ marginRight: "10px", marginLeft: "0px" }}
                    />
                    {data ? data?.github : "data not found"}
                  </h6>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="col-6 offset-1 mt-3">
          <NavTabs />
        </div>
      </div>
      <Footer />
    </div>
  );
}
