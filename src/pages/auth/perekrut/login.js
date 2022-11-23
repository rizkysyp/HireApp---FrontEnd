import React from "react";
import Assets from "../../../assets/img";
import style from "./perekrut.module.css";
import { Route, Link, Routes } from "react-router-dom";

export default function login() {
  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-sm-6">
          <div style={{ backgroundImage: `url(${Assets.Bg})` }}>
            <div
              style={{ backgroundImage: `url(${Assets.cover})` }}
              className="col p-4 "
            >
              <img
                src={Assets.peworld}
                alt=""
                className="d-flex align-items-start"
              />

              <h1 className={style.h1}>
                Temukan developer berbakat & terbaik di berbagai bidang keahlian
              </h1>
            </div>
          </div>
        </div>
        <div className="col-sm-6" id={style.row2}>
          <h1>Halo, Pewpeople</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>
          <div className="container kotak_login mt-5 d-flex justify-content-center">
            <form className="col">
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Masukkan alamat email"
                />
              </div>
              <div className="form-group pt-3">
                <label>Kata Sandi</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword1"
                  placeholder="Masukkan kata sandi"
                />
              </div>

              <Link
                to="/forgetPw"
                className="my-3 d-flex justify-content-end resetpw"
                id={style.lupaSandi}
              >
                Lupa kata sandi?
              </Link>
              <Routes></Routes>
              <button type="submit" id={style.btn} className="btn ">
                Masuk
              </button>
            </form>
          </div>
          <div className="container mt-5 d-flex justify-content-center">
            <p className="card-text">
              Anda belum punya akun?
              <Link to="/registerCust" id={style.regis}>
                Daftar disini{" "}
              </Link>
              <Routes>
                <Route></Route>
              </Routes>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
