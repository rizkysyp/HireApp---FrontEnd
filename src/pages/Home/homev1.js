import React, { useEffect, useState } from "react";
import NavbarHome from "../../components/navbarHome";
import style from "./home.module.css";
import Footer from "../../components/Footer/Footer";
import Assets from "../../assets/img";
import { Card, Pagination } from "@mui/material";
import Axios from "axios";
import NavbarLandingAfterLogin from "../../components/NavbarLandingAfter/NavbarLandingAfter";
import NavbarLandingBeforeLogin from "../../components/NavbarLandingBefore/NavbarLandingBefore";

export default function Homev1() {
  let active = 2;
  let items = [];
  for (let num = 1; num <= 5; num++) {
    items.push(
      <Pagination.Item key={num} active={num === active}>
        {num}
      </Pagination.Item>
    );
  }

  //get data
  const [data, setData] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [sort, setSort] = useState("asc");

  const [photo, setPhoto] = useState(null);
  const [selected, setSelected] = useState(null);
  const [onclick, SetOnclick] = useState("");
  const [inputData, setInputData] = useState({
    name: "",
    bidang: "",
    domisili: "",
    role: "",
    image: null,
    search: "",
    page: "",
    limit: "",
  });

  const getAllData = () => {
    Axios.get(
      `https://rich-gold-gorilla-wear.cyclic.app/register/search?search=${inputData.search}&limit=30&page=${inputData.page}`
    )
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    console.log("checked", sortBy);
    getAllData();
  }, [sortBy, sort, inputData.search]);
  useEffect(() => {
    getAllData();
  }, []);
  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };
  const handlePhoto = (e) => {
    setPhoto(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  const token = localStorage.getItem("Token");
  return (
    <div>
      <header>
        {token ? <NavbarLandingAfterLogin /> : <NavbarLandingBeforeLogin />}
        <div className={style.header}>
          <h2 className="container p-2">Top Jobs</h2>
        </div>
      </header>
      <main className={style.bg}>
        <div
          className="container"
          style={{ backgroundColor: "white", borderRadius: "10px" }}
        >
          <form className="search row d-flex justify-content-between p-2">
            <input
              autoComplete="off"
              type="text"
              id={style.search}
              className="form-control col"
              placeholder="Search for any skill"
              value={inputData.search}
              name="search"
              onChange={handleChange}
            ></input>
            <div className="dropdown col-2" id={style.border}>
              Kategory
            </div>
            <button
              className="col-2"
              type="submit"
              style={{
                backgroundColor: "#5e50a1",
                borderColor: "#5e50a1",
                color: "white",
                borderRadius: "5px",
              }}
            >
              Search
            </button>
          </form>
        </div>
        <div
          className="container mt-4 "
          style={{ backgroundColor: "white", borderRadius: "10px" }}
        >
          {data
            ? data.map((data) => {
                return (
                  <div
                    key={data.id}
                    className=" row p-2 d-flex justify-content-between"
                  >
                    <div className="col-2 d-flex align-items-center d-flex justify-content-center">
                      <img
                        type="file"
                        style={{
                          backgroundColor: "gainsboro",
                          borderRadius: "100%",
                          width: "100px",
                          height: "100px",
                        }}
                        src={data.image}
                        alt=""
                      />
                    </div>
                    <div className="col-7" id={style.infoDiri}>
                      <h2>{data.name}</h2>
                      <p style={{ color: "grey" }}>{data.bidang}</p>
                      <div className="d-flex justify-content-start  ">
                        <img
                          src={Assets.mappin}
                          alt=""
                          className={style.mappin}
                        />
                        <p style={{ color: "grey" }}>{data.domisili}</p>
                      </div>
                      <div>
                        <Card>php</Card>
                      </div>
                    </div>
                    <div className="col-3 d-flex align-items-center   justify-content-center">
                      <button
                        style={{
                          backgroundColor: "#5e50a1",
                          borderColor: "#5e50a1",
                          color: "white",
                          borderRadius: "5px",
                        }}
                      >
                        Lihat Profile
                      </button>
                    </div>
                    <hr className="mt-4" />
                  </div>
                );
              })
            : "data not yet"}
        </div>
        <div className=" container pt-3">
          <Pagination className="d-flex justify-content-center">
            <Pagination.Prev />
            {items}
            <Pagination.Next />
          </Pagination>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
