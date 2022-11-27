import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Assets from "../../assets/img";
import Footer from "../../components/Footer/Footer";
import NavbarHome from "../../components/NavbarHome/navbarHome";
import CardProfilePortofolio from "../../components/CardProfile/CardProfilePortofolio";
import NavTabs from "../../components/NavTabs/NavTabs";

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
          <NavTabs />
        </div>
      </div>
      <Footer />
    </div>
  );
}
