import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CardProfile from "../../components/CardProfile/CardProfile";
import Footer from "../../components/Footer/Footer";
import NavbarHome from "../../components/navbarHome";
import swal from "sweetalert";

const Hire = () => {
  const [dataUser, setDataUser] = useState("");
  const [hireData, setHireData] = useState();
  const { id: id } = useParams();
  const [pekerja, setPekerja] = useState("");
  const [skillPekerja, setSkillPekerja] = useState("");
  const [submited, setSubmited] = useState(false);

  useEffect(() => {
    const local = localStorage.getItem("Admin");
    if (local) {
      const dataLocal = JSON.parse(local);
      setDataUser(dataLocal);
    }
  }, []);

  useEffect(() => {
    //get data pekerja
    const fetchPekerja = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_URL_ROUTE}/users/profile/${id}`
        );
        console.log(res.data.data);
        setPekerja(res.data.data);
      } catch (e) {
        console.log(e);
      }
    };

    //get skill
    const fetxhskillpekerja = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_URL_ROUTE}/skill/get/${id}`
        );
        console.log(res.data.data);
        setSkillPekerja(res.data.data);
      } catch (e) {
        console.log(e);
      }
    };
    if (id) {
      fetchPekerja();
      fetxhskillpekerja();
    }
  }, [id]);

  const handleInput = async (e) => {
    e.preventDefault();
    setHireData({ ...hireData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setHireData({
      ...hireData,
      idPerekrut: dataUser.id,
      idPekerja: pekerja.id,
    });
    setSubmited(true);
  };

  useEffect(() => {
    if (submited) {
      const postHire = async () => {
        try {
          const res = await axios.post(
            `${process.env.REACT_APP_URL_ROUTE}/hire`,
            hireData
          );
          console.log(res.data.data);

          swal({
            title: "hire",
            text: "hiring pekerja success",
            icon: "success",
          });
          setSubmited(false);
        } catch (e) {
          console.log(e);
          setSubmited(false);
          return swal({
            title: "hire",
            text: `${e.res.data.message}`,
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
      <nav>{dataUser ? <NavbarHome /> : <NavbarHome />}</nav>
      <main className="d-flex justify-content-between p-5 ">
        <div className="col-sm-4">
          <CardProfile />
        </div>
        <div className="col-sm-8 px-5 ">
          <h2>Hubungi {pekerja.name}</h2>
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
