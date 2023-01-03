import React from "react";
import Footer from "../../components/Footer/Footer";
import NavbarHome from "../../components/navbarHome";
import { Link } from "react-router-dom";
import Assets from "../../assets/img";

const Chat = () => {
  return (
    <div style={{ backgroundColor: "#E5E5E5" }}>
      <nav>
        <NavbarHome />
      </nav>
      <main className="d-flex flex-row m-5">
        {/*daftar user yg chat*/}
        <div className="col-4" style={{ backgroundColor: "white" }}>
          <h5 className="d-flex justify-content-start px-2 pb-3 pt-2">
            Messages
          </h5>
          <hr />
          <div>card chat</div>
        </div>
        <div className="col-1" />
        {/*isi messages*/}
        <div className="col-7" style={{ backgroundColor: "white" }}>
          <div className="d-flex justify-content-between px-2  pt-2">
            <div className="d-flex mx-3">
              <img
                src={Assets.bell}
                alt="profile"
                style={{
                  backgroundColor: "grey",
                  borderRadius: "100%",
                  width: "50px",
                }}
              />
              <h5 className="d-flex align-self-center mx-2">name</h5>
            </div>
            <p className="d-flex align-self-center">posisi pekerjaan</p>
            <Link>
              <button className="btn">
                <b style={{ color: "blue" }}>Detail Profile</b>
              </button>
            </Link>
          </div>
          <hr />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Chat;
