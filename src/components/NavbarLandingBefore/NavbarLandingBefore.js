import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png"
import ButtonMasuk from "../Button/ButtonMasuk";
import ButtonDaftar from "../Button/ButtonDaftar";

function NavbarLandingBeforeLogin(){
    return(
        <nav className="container-fluid mt-5" style={{marginBottom:"180px"}}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-1">
                <img
                  src={logo}
                  alt=""
                  style={{ width:"127px", height:"35px"}}
                />
              </div>
              <div className="col-1 offset-9">
                <ButtonMasuk/>
              </div>
              <div className="col-1">
                <ButtonDaftar/>
              </div>
            </div>
          </div>
        </nav>
    )
}
export default NavbarLandingBeforeLogin