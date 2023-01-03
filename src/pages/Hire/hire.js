import React from "react";
import CardProfile from "../../components/CardProfile/CardProfile";
import Footer from "../../components/Footer/Footer";
import NavbarHome from "../../components/navbarHome";

const Hire = () => {
  return (
    <div>
      <nav>
        <NavbarHome />
      </nav>
      <main className="d-flex justify-content-between p-5 ">
        <div className="col-sm-4">
          <CardProfile />
        </div>
        <div className="col-sm-8 px-5 ">
          <h2>Hubungi nama</h2>
          <p className="d-flex align-items-start" style={{ color: " #46505C" }}>
            keterangan
          </p>

          <form className="col-lg- d-flex flex-column col">
            <div className="form-group">
              <label
                className="d-flex align-items-start"
                style={{ color: "#9EA0A5" }}
              >
                Posisi
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Untuk Posisi"
              />
            </div>
            <div className="form-group mt-2">
              <label
                className="d-flex align-items-start"
                style={{ color: "#9EA0A5" }}
              >
                Deskripsi
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Deskripsi"
              />
            </div>
            <button
              className="btn mt-5"
              style={{ backgroundColor: "#FBB017", color: "white" }}
            >
              Hire
            </button>
          </form>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Hire;
