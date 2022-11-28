import React, { useState, useEffect } from "react";
import Assets from "../../assets/img";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import axios from "axios";

function NavTabs() {
  const [data, setData] = useState(null);
  let users =
    "https://rich-gold-gorilla-wear.cyclic.app/experiences/661252ac-314a-4b9d-bf60-ffaf0dd75499";
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
  const [key, setKey] = useState("portofolio");
  return (
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
                <h6 className="myfont3 mt-2" style={{ marginLeft: "49px" }}>
                  Remainder app
                </h6>
              </div>
              <div className="col-4">
                <img src={Assets.portofolio2} alt="" />
                <h6 className="myfont3 mt-2" style={{ marginLeft: "49px" }}>
                  Social media app
                </h6>
              </div>
              <div className="col-4">
                <img src={Assets.portofolio3} alt="" />
                <h6 className="myfont3 mt-2" style={{ marginLeft: "12px" }}>
                  Project management web
                </h6>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-4">
                <img src={Assets.portofolio4} alt="" />
                <h6 className="myfont3 mt-2" style={{ marginLeft: "49px" }}>
                  Remainder app
                </h6>
              </div>
              <div className="col-4">
                <img src={Assets.portofolio5} alt="" />
                <h6 className="myfont3 mt-2" style={{ marginLeft: "49px" }}>
                  Social media app
                </h6>
              </div>
              <div className="col-4">
                <img src={Assets.portofolio6} alt="" />
                <h6 className="myfont3 mt-2" style={{ marginLeft: "12px" }}>
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
                  Vestibulum erat orci, mollis nec gravida sed, ornare quis
                  urna. Curabitur eu lacus fringilla, vestibulum risus at.
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
                  Vestibulum erat orci, mollis nec gravida sed, ornare quis
                  urna. Curabitur eu lacus fringilla, vestibulum risus at.
                </h6>
                <hr />
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
export default NavTabs;
