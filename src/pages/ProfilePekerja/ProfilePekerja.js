import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Assets from "../../assets/img";
import Footer from "../../components/Footer/Footer";
import NavbarHome from "../../components/NavbarHome/navbarHome";
import CardProfilePortofolio from "../../components/CardProfile/CardProfilePortofolio";

export default function ProfilePekerja() {
  const [key, setKey] = useState("portofolio");
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
          <CardProfilePortofolio />
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
                    <div className="col-4">
                      <img src={Assets.portofolio1} alt="" />
                      <h6
                        className="myfont3 mt-2"
                        style={{ marginLeft: "49px" }}
                      >
                        Remainder app
                      </h6>
                    </div>
                    <div className="col-4">
                      <img src={Assets.portofolio2} alt="" />
                      <h6
                        className="myfont3 mt-2"
                        style={{ marginLeft: "49px" }}
                      >
                        Social media app
                      </h6>
                    </div>
                    <div className="col-4">
                      <img src={Assets.portofolio3} alt="" />
                      <h6
                        className="myfont3 mt-2"
                        style={{ marginLeft: "12px" }}
                      >
                        Project management web
                      </h6>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-4">
                      <img src={Assets.portofolio4} alt="" />
                      <h6
                        className="myfont3 mt-2"
                        style={{ marginLeft: "49px" }}
                      >
                        Remainder app
                      </h6>
                    </div>
                    <div className="col-4">
                      <img src={Assets.portofolio5} alt="" />
                      <h6
                        className="myfont3 mt-2"
                        style={{ marginLeft: "49px" }}
                      >
                        Social media app
                      </h6>
                    </div>
                    <div className="col-4">
                      <img src={Assets.portofolio6} alt="" />
                      <h6
                        className="myfont3 mt-2"
                        style={{ marginLeft: "12px" }}
                      >
                        Project management web
                      </h6>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="pengalamanKerja" title="Pengalaman kerja">
                  <div className="row mt-4">
                    <div className="col-1">
                      <img src={Assets.tokped} alt="" />
                    </div>
                    <div className="col-9 offset-1">
                      <h5 className="myfont">Engineer</h5>
                      <h6 className="myfont3">Tokopedia</h6>
                      <h6 className="myfont3 color-font">
                        July 2019 - January 2020 6 months
                      </h6>
                      <h6 className="myfont2 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum erat orci, mollis nec gravida sed, ornare
                        quis urna. Curabitur eu lacus fringilla, vestibulum
                        risus at.
                      </h6>
                      <hr />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-1">
                      <img src={Assets.tokped} alt="" />
                    </div>
                    <div className="col-9 offset-1">
                      <h5 className="myfont">Web Developer</h5>
                      <h6 className="myfont3">Tokopedia</h6>
                      <h6 className="myfont3 color-font">
                        July 2019 - January 2020 6 months
                      </h6>
                      <h6 className="myfont2 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum erat orci, mollis nec gravida sed, ornare
                        quis urna. Curabitur eu lacus fringilla, vestibulum
                        risus at.
                      </h6>
                      <hr />
                    </div>
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
