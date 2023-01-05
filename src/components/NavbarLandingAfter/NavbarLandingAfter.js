import React from "react";
import Assets from "../../assets/img";
import ButtonHome from "../Button/ButtonHome";
import ButtonProfile from "../Button/ButtonProfile";

function NavbarLandingAfterLogin() {
  return (
    <nav
      className="p-5 mt-5 pt-3"
      style={{ marginBottom: "180px", backgroundColor: "white" }}
    >
      <div className="">
        <div className="row align-items-center">
          <div className="col-1">
            <img
              src={Assets.logo}
              alt=""
              style={{ width: "127px", height: "35px" }}
            />
          </div>
          <div className="col-sm-2 col-lg-1 offset-sm-3 offset-lg-1">
            <ButtonHome />
          </div>
          <div className="col-lg-1 col-sm-1 offset-sm-4 offset-lg-8">
            <ButtonProfile />
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavbarLandingAfterLogin;
