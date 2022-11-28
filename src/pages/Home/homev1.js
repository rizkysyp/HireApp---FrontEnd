import React, { useEffect, useState } from "react";
import NavbarHome from "../../components/navbarHome";
import style from "./home.module.css";
import Footer from "../../components/Footer/Footer";
import Assets from "../../assets/img";
import { Card, Pagination } from "@mui/material";
import Axios from "axios";

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
  const getAllData = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div>
      <header>
        <NavbarHome />
        <div className={style.header}>
          <h2 className="container p-2">Top Jobs</h2>
        </div>
      </header>
      <main className={style.bg}>
        <div
          className="container "
          style={{ backgroundColor: "white", borderRadius: "10px" }}
        >
          <form className="row d-flex justify-content-between p-2">
            <input
              className="form-control col"
              id={style.search}
              type="search"
              placeholder="Search for any skill"
            />

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
        <div className="card container mt-4">
          {data
            ? data.map((data) => {
                return (
                  <div
                    key={data.id}
                    className=" row p-2 d-flex justify-content-between"
                  >
                    <div className="col-2 d-flex align-items-center d-flex justify-content-center">
                      <img
                        style={{
                          backgroundColor: "gainsboro",
                          borderRadius: "100%",
                          width: "100px",
                          height: "100px",
                        }}
                        src={Assets.tick1}
                        className="img me-3"
                        alt="..."
                      >
                        {/* {data.image} */}
                      </img>
                    </div>
                    <div className="col-7" id={style.infoDiri}>
                      <h2>{data.name}</h2>
                      <p style={{ color: "grey" }}>bidang</p>
                      <div className="d-flex justify-content-start  ">
                        <img
                          src={Assets.mappin}
                          alt=""
                          className={style.mappin}
                        />
                        <p style={{ color: "grey" }}>domisili</p>
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
                  </div>
                );
              })
            : "data not yet"}

          <hr />
          <div className=" container pt-3">
            <Pagination className="d-flex justify-content-center">
              <Pagination.Prev />
              {items}
              <Pagination.Next />
            </Pagination>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
