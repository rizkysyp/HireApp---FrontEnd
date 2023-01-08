import React, { useState } from "react";
import Assets from "../../assets/img";
import style from "./pekerja/pekerja.module.css";
import { useDispatch } from "react-redux";
import ResetPw from "./resetpw";
import RegisterPekerja from "./pekerja/register";
import Navbar from "../../components/NavbarHome/navbarHome";
import { Route, Link, Routes, useNavigate } from "react-router-dom";
import { VerifAccount } from "./../../Redux/action/verifAccount";

export default function VerificationAccount() {
  const [email, setEmail] = useState("");
  const [otp, setotp] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postData = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(otp);
    let data = {
      email,
      otp,
    };
    dispatch(VerifAccount(data, navigate));
  };
  return (
    <div>
      <div className="row">
        <div className="col-sm-6">
          <div
            style={{ backgroundImage: `url(${Assets.Bg})`, height: "100vh" }}
          >
            <div
              style={{
                backgroundImage: `url(${Assets.cover})`,
                height: "100vh",
              }}
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
        <div className="col-sm-6 p-5" id={style.row2}>
          <h1>Halo, Pewpeople</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>
          <div className="container kotak_login mt-5 d-flex justify-content-center">
            <form onSubmit={postData} className="col">
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Masukkan alamat email"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group mt-2">
                <label>Otp</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Masukkan otp"
                  value={otp}
                  name="otp"
                  onChange={(e) => setotp(e.target.value)}
                />
              </div>

              <Link
                to="/resetPw"
                className="my-3 d-flex justify-content-end resetpw"
                id={style.lupaSandi}
              >
                Lupa kata sandi?
              </Link>
              <Routes>
                <Route path="/resetPw" element={<ResetPw />} />
              </Routes>
              <button type="submit" id={style.btn} className="btn ">
                Masuk
              </button>
            </form>
          </div>
          <div className="container mt-5 d-flex justify-content-center">
            <p className="card-text">
              Anda belum punya akun?
              <Link to="/registerPekerja" id={style.regis}>
                Daftar disini{" "}
              </Link>
              <Routes>
                <Route path="/registerPekerja" element={<RegisterPekerja />} />
              </Routes>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
