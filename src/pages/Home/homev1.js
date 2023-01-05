import React, { useEffect, useState } from "react";
import NavbarHome from "../../components/navbarHome";
import style from "./home.module.css";
import Footer from "../../components/Footer/Footer";
import Assets from "../../assets/img";
import { Card, Pagination } from "@mui/material";
import Axios from "axios";
import swal from "sweetalert";
import { Link, useNavigate, useParams } from "react-router-dom";
import NavbarLandingAfterLogin from "../../components/NavbarLandingAfter/NavbarLandingAfter";
import NavbarLandingBeforeLogin from "../../components/NavbarLandingBefore/NavbarLandingBefore";
import Searchbar from "../../components/seachBar/searchbar";
import axios from "axios";

export default function Homev1() {
  const token = localStorage.getItem("Token");
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
  const { id: idPekerja } = useParams();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(8);
  const [skillPekerja, setSkillPekerja] = useState("");

  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const getAllData = () => {
    Axios.get(url, user)
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
        // setSearch(response.data.data);
      })
      .catch((error) => {
        swal({
          title: "Oops!",
          text: `${error.response.data.message}`,
          icon: "error",
        });
        console.log(error);
      });
  };
  useEffect(() => {
    console.log("checked", sortBy);
    getAllData();
  }, [sortBy, sort, search]);
  useEffect(() => {
    getAllData();
  }, []);

  useEffect(() => {
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
      fetchskillpekerja();
    }
  }, [idPekerja]);

  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/profile-hire/${id}`);
  };

  //pagination search sort

  let url = `https://hireapp-be-production-e91c.up.railway.app/users/employee/all`;
  useEffect(() => {
    if (limit !== "8") {
      url = `${url}?limit=${limit}`;
    } else {
      url = `${url}&limit=8`;
    }
    if (page !== "1") {
      url = `${url}&page=${page}`;
    }
    if (search !== "") {
      url = `${url}&search=${search}`;
    }
    getAllData(url);
  }, [search, limit, page]);
  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };
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
          {/* <form className="search row d-flex justify-content-between p-2">
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
          </form> */}
          <Searchbar
            id="search"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
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
                        src={data.photo}
                        alt=""
                      />
                    </div>
                    <div className="col-7" id={style.infoDiri}>
                      <h2>{data.name}</h2>
                      <p style={{ color: "grey" }}>{data.job}</p>
                      <div className="d-flex justify-content-start  ">
                        <img
                          src={Assets.mappin}
                          alt=""
                          className={style.mappin}
                        />
                        <p style={{ color: "grey" }}>
                          {data.city},{data.province}
                        </p>
                      </div>
                      {/* <div className="row mt-2">
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
                          <h6>...Loading</h6>
                        )}
                      </div> */}
                    </div>
                    <div className="col-3 d-flex align-items-center   justify-content-center">
                      <button
                        style={{
                          backgroundColor: "#5e50a1",
                          borderColor: "#5e50a1",
                          color: "white",
                          borderRadius: "5px",
                        }}
                        onClick={() => handleClick(data.id)}
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
        <div
          style={{
            marginLeft: 100,
          }}
        >
          {data.length === 1 ? (
            <h5>Loading...</h5>
          ) : (
            new Array(data.pagination?.page).fill().map((item, index) => (
              <div className="d-flex flex-row gap-5 my-3 justify-content-center">
                <div>
                  <button
                    style={{
                      borderRadius: "8px",
                      backgroundColor: "white",
                      color: "#2395FF",
                    }}
                    disabled={page === 1}
                    onClick={previousPage}
                  >
                    Prev
                  </button>
                </div>
                <button
                  key={index + 1}
                  style={{
                    marginRight: 20,
                    border: "none",
                    borderRadius: 5,
                    background: "#5E50A1",
                    padding: 10,
                    color: "#FFF",
                    fontWeight: 600,
                  }}
                >
                  {`(${data?.length} data)`}
                  {/* {index + 1} */}
                </button>
                <div>
                  <button
                    style={{
                      borderRadius: "8px",
                      backgroundColor: "white",
                    }}
                    disabled={data <= 0}
                    onClick={nextPage}
                  >
                    Next
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
