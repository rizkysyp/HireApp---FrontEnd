import React from "react";
import ButtonMasuk from "../Button/ButtonMasuk";
import ButtonDaftar from "../Button/ButtonDaftar";
import Assets from "../../assets/img";
import { Link } from "react-router-dom";

function NavbarLandingBeforeLogin() {
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
          <div className="col-1 offset-9">
            <Link to="/loginPekerja">
              <ButtonMasuk />
            </Link>
          </div>
          <div className="col-1">
            <Link to="/registerPekerja">
              <ButtonDaftar />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavbarLandingBeforeLogin;
