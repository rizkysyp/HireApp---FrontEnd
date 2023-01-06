import React from "react";
import Assets from "../../assets/img";
import ButtonHome from "../Button/ButtonHome";
import ButtonProfile from "../Button/ButtonProfile";

function NavbarLandingAfterLogin() {
  const role = localStorage.getItem("role");
  return (
    <nav className="container-fluid mt-5" style={{ marginBottom: "80px" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-1">
            <img
              src={Assets.logo}
              alt=""
              style={{ width: "127px", height: "35px" }}
            />
          </div>
          <div className="col-sm-2 col-lg-1 offset-sm-3 offset-lg-1">
            {role === "company" ? (
              <ButtonHome />
            ) : (
              <button className="btn" style={{ visibility: "hidden" }}></button>
            )}
          </div>
          <div className="col-lg-1 offset-5">
            <img src={Assets.bell} alt="" style={{ marginLeft: "110px" }} />
          </div>
          <div className="col-lg-1">
            <img src={Assets.mail} alt="" style={{ marginLeft: "60px" }} />
          </div>
          <div className="col-lg-1 col-sm-1">
            <ButtonProfile />
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavbarLandingAfterLogin;
