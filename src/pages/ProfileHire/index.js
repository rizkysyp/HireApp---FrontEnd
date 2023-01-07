/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Assets from "../../assets/img";
import Footer from "../../components/Footer/Footer";
import NavbarHome from "../../components/NavbarHome/navbarHome";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavbarLandingAfterLogin from "../../components/NavbarLandingAfter/NavbarLandingAfter";
import NavbarLandingBeforeLogin from "../../components/NavbarLandingBefore/NavbarLandingBefore";

export default function ProfileHire() {
  const [data, setData] = useState(null);
  const [dataSkill, setDataSkill] = useState(null);
  const [dataPortofolio, setDataPortofolio] = useState(null);
  const [dataExperience, setDataExperience] = useState(null);
  const token = localStorage.getItem("Token");
  console.log("ini token", token);
  const { id } = useParams();
  const navigate = useNavigate();

  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  let getData = `https://hireapp-be-production-e91c.up.railway.app/users/employee/${id}`;
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
  let getDataSkill = `https://hireapp-be-production-e91c.up.railway.app/skill/${id}`;
  useEffect(() => {
    axios
      .get(getDataSkill, user)
      .then((res) => {
        console.log("Get detail skill success");
        console.log(res.data.data);
        res.data && setDataSkill(res.data.data);
      })
      .catch((err) => {
        console.log("Get detail skill fail");
        console.log(err);
      });
  }, []);
  let getDataPortofolio = `https://hireapp-be-production-e91c.up.railway.app/portofolio/${id}`;
  useEffect(() => {
    axios
      .get(getDataPortofolio, user)
      .then((res) => {
        console.log("Get detail portofolio success");
        console.log(res.data.data);
        res.data && setDataPortofolio(res.data.data);
      })
      .catch((err) => {
        console.log("Get detail portofolio fail");
        console.log(err);
      });
  }, []);
  let getDataExperience = `https://hireapp-be-production-e91c.up.railway.app/experience/${id}`;
  useEffect(() => {
    axios
      .get(getDataExperience, user)
      .then((res) => {
        console.log("Get detail experience success");
        console.log(res.data.data);
        res.data && setDataExperience(res.data.data);
      })
      .catch((err) => {
        console.log("Get detail experience fail");
        console.log(err);
      });
  }, []);
  const [key, setKey] = useState("portofolio");
  return (
    <div>
      {token ? <NavbarLandingAfterLogin /> : <NavbarLandingBeforeLogin />}
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
                  <h4 className="myfont4 mt-4 text-start">{data?.name}</h4>
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
                    className="myfont3 color-font text-start "
                    style={{ marginBottom: "50px" }}
                  >
                    {data?.description}
                  </p>
                  <h4 className="myfont2" style={{ marginRight: "190px" }}>
                    Skill
                  </h4>
                  <div className="row mt-2">
                    {dataSkill ? (
                      dataSkill.map((item) => (
                        <div className="col-5 ">
                          <div className="card-1 mt-3">
                            <div
                              className="btn"
                              style={{
                                backgroundColor: "#FBB017",
                                color: "white",
                              }}
                            >
                              {item.skill}
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <h1>...Loading</h1>
                    )}
                  </div>
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
              <button
                className="btn"
                key={data?.id}
                onClick={() => navigate(`/hire/${id}`)}
                style={{
                  backgroundColor: "#5E50A1",
                  color: "white",
                  width: "280px",
                  marginLeft: "10px",
                  marginBottom: "30px",
                }}
              >
                Hire
              </button>
            </div>
          </section>
        </div>

        <div className="col-6 offset-1 mt-3">
          <div className="container text-start shadow rounded-2 mt-1 bg-white">
            <div className="row bg-light rounded-3">
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
              >
                <Tab eventKey="portofolio" title="Portofolio">
                  <div className="row mt-2">
                    {dataPortofolio ? (
                      dataPortofolio.map((item) => (
                        <div>
                          <div className="col-1">
                            <img
                              src={item.photo}
                              alt=""
                              style={{ width: "80px", height: "80px" }}
                            />
                          </div>
                          <div
                            className="col-9 offset-1"
                            style={{ marginLeft: "100px", marginTop: "-80px" }}
                          >
                            <h5 className="myfont">{item?.name}</h5>
                            <h6 className="myfont3">{item?.repo}</h6>
                            <h6 className="myfont2 mb-4">{item?.type}</h6>
                            <hr />
                          </div>
                        </div>
                      ))
                    ) : (
                      <h1>...Loading</h1>
                    )}
                  </div>
                </Tab>
                <Tab eventKey="pengalamanKerja" title="Pengalaman kerja">
                  <div className="row mt-2">
                    {dataExperience ? (
                      dataExperience.map((item) => (
                        <div>
                          <div className="col-1">
                            <img
                              src={Assets.pijar}
                              alt=""
                              style={{ height: "98px", width: "90px" }}
                            />
                          </div>
                          <div
                            className="col-9 offset-1"
                            style={{ marginLeft: "100px", marginTop: "-80px" }}
                          >
                            <h5 className="myfont">{item?.position}</h5>
                            <h6 className="myfont3">{item?.company_name}</h6>
                            <h6 className="myfont3 color-font">
                              {item?.work_start}-{item?.work_end}
                            </h6>
                            <h6 className="myfont2 mb-4">
                              {item?.description}
                            </h6>
                            <hr />
                          </div>
                        </div>
                      ))
                    ) : (
                      <h1>...Loading</h1>
                    )}
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
