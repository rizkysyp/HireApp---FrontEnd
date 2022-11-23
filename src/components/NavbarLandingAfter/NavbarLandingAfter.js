import React from "react";
import Assets from "../../assets/img";
import ButtonHome from "../Button/ButtonHome";
import ButtonProfile from "../Button/ButtonProfile";

function NavbarLandingAfterLogin() {
  return (
    <nav className="container-fluid mt-5" style={{ marginBottom: "180px" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-1">
            <img
              src={Assets.logo}
              alt=""
              style={{ width: "127px", height: "35px" }}
            />
          </div>
          <div className="col-sm-1 offset-2">
            <ButtonHome />
          </div>
          <div className="col-sm-2 offset-6">
            <ButtonProfile />
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavbarLandingAfterLogin;
