import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./hire.module.css";
import CardProfile from "../../components/CardProfile/CardProfile";
import Footer from "../../components/Footer/Footer";
import NavbarHome from "../../components/navbarHome";
import swal from "sweetalert";
import Assets from "../../assets/img";
import { useNavigate } from "react-router-dom";
import NavbarLandingAfterLogin from "../../components/NavbarLandingAfter/NavbarLandingAfter";
import NavbarLandingBeforeLogin from "../../components/NavbarLandingBefore/NavbarLandingBefore";

const Hire = () => {
  const [dataUser, setDataUser] = useState(null);
  const [hireData, setHireData] = useState(null);
  const { id: idPekerja } = useParams();
  const [dataPekerja, setDataPekerja] = useState(null);
  const [skillPekerja, setSkillPekerja] = useState("");
  const [submited, setSubmited] = useState(false);
  const token = localStorage.getItem("Token");
  const navigate = useNavigate();

  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const local = localStorage.getItem("Employee");
    if (local) {
      const dataLocal = JSON.parse(local);
      setDataUser(token);
    }
  }, []);

  useEffect(() => {
    //get data pekerja
    const fetchPekerja = async () => {
      try {
        const res = await axios.get(
          `https://hireapp-be-production-e91c.up.railway.app/users/profile`,
          user
        );
        console.log(res.data.data[0]);
        res.data && setDataPekerja(res.data.data[0]);
      } catch (e) {
        console.log(e);
        return swal({
          title: "Hire",
          text: `${e.response.data.message}`,
          icon: "error",
        });
      }
    };

    //get skill
    const fetchskillpekerja = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_URL_ROUTE}skill/${idPekerja}`,
          user
        );
        console.log(res.data.data);
        setSkillPekerja(res.data.data);
      } catch (e) {
        console.log(e);
      }
    };
    if (idPekerja) {
      fetchPekerja();
      fetchskillpekerja();
    }
  }, [idPekerja]);

  const handleInput = async (e) => {
    e.preventDefault();
    setHireData({ ...hireData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setHireData({
      ...hireData,
      idPerekrut: dataUser?.token,
      idPekerja: dataPekerja.id,
    });
    setSubmited(true);
  };
  const handleClick = (id_hire) => {
    navigate(`/chat/${id_hire}`);
    // dispatch({ type: "GWT_TICKET_ID", payload: id });
  };
  useEffect(() => {
    if (submited) {
      const postHire = async () => {
        try {
          const res = await axios.post(
            `${process.env.REACT_APP_URL_ROUTE}hire/${idPekerja}`,
            hireData,
            user
          );
          console.log("sukses post data", res.data.data);

          swal({
            title: "hire",
            text: `${res.data.message}`,
            icon: "success",
          }).then(() => {
            handleClick(idPekerja);
          });
          setSubmited(false);
        } catch (e) {
          console.log(e);
          setSubmited(false);
          return swal({
            title: "hire",
            text: `${e.response.data.message}`,
            icon: "error",
          });
        }
      };
      postHire();
    }
  }, [submited, hireData]);

  console.log("hire data: ", hireData);
  return (
    <div>
      {token ? <NavbarLandingAfterLogin /> : <NavbarLandingBeforeLogin />}

      {/* <nav>{dataUser ? <NavbarHome /> : <NavbarHome />}</nav> */}
      <main className="d-flex justify-content-between p-5 ">
        {/*Profile Pekerja*/}
        <div className="col-3">
          <section className="section">
            <div className="card" style={{ marginLeft: "100px" }}>
              <div className="card-content">
                <div className="image">
                  {dataPekerja?.photo ? (
                    <img src={dataPekerja.photo} alt="" />
                  ) : (
                    <img src={Assets.bg} alt="" />
                  )}
                </div>
                <div className="name">
                  <h4 className="myfont4 mt-4 text-start">
                    {dataPekerja?.username}
                  </h4>
                  <h6 className="myfont3 text-start">{dataPekerja?.job}</h6>
                  <div className="row">
                    <div className="col-lg-1">
                      <img src={Assets.map} alt="" />
                    </div>
                    <div className="col-lg-10">
                      <p className="myfont3 color-font text-start">
                        {dataPekerja?.city}, {dataPekerja?.province}
                      </p>
                    </div>
                  </div>
                  <p className="myfont3 color-font text-start">
                    {dataPekerja?.workplace}
                  </p>
                  <p
                    className="myfont3 color-font text-start "
                    style={{ marginBottom: "100px" }}
                  >
                    {dataPekerja?.description}
                  </p>
                  <h4 className="myfont2" style={{ marginRight: "190px" }}>
                    Skill
                  </h4>
                  <div className="row mt-2">
                    {skillPekerja ? (
                      skillPekerja.map((item) => (
                        <div className="col-5 ">
                          <div className="card-1 mt-3">
                            <div
                              className="btn"
                              style={{
                                backgroundColor: "#FBB017",
                                color: "white",
                              }}
                            >
                              {item.skill}
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <h1>...Loading</h1>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="col-sm-8 px-5 ">
          <h2>Hubungi {dataPekerja?.name}</h2>
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
                name="position"
                value={hireData?.position}
                onChange={handleInput}
                required={true}
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
                name="description"
                value={hireData?.description}
                onChange={handleInput}
                required={true}
              />
            </div>
            <button
              className="btn mt-5"
              title="Hire"
              type="submit"
              onClick={handleSubmit}
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
