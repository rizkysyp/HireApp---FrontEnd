import React, { useState } from "react";
import Assets from "../../../assets/img";
import style from "./pekerja.module.css";
import { Route, Link, Routes, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "./../../../Redux/action/registerPekerja";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  // const matchInput = (input, allInputs) => {
  //   return input === allInputs.password ? undefined : "Passwords do not match";
  // };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postData = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(phonenumber);
    console.log(password);
    console.log(confirm);

    let data = {
      name,
      email,
      phonenumber,
      password,
      confirm,
    };
    dispatch(register(data, navigate));
  };
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
            <form onSubmit={postData} className="col">
              <div className="form-group">
                <label>Nama</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Masukkan nama panjang"
                  value={name}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group pt-3">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukkan alamat email"
                />
              </div>
              <div className="form-group pt-3">
                <label>No handphone</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Masukkan no handphone"
                  value={phonenumber}
                  name="phonenumber"
                  onChange={(e) => setPhonenumber(e.target.value)}
                />
              </div>
              <div className="form-group pt-3">
                <label>Kata Sandi</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan kata sandi"
                />
              </div>
              <div className="form-group pt-3">
                <label>Konfirmasi kata sandi</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Masukkan konfirmasi kata sandi"
                  value={confirm}
                  name="confirmPassword"
                  onChange={(e) => setConfirm(e.target.value)}
                />
              </div>

              <button type="submit" id={style.btn} className="btn mt-5">
                Daftar
              </button>
            </form>
          </div>
          <div className="container mt-5 d-flex justify-content-center">
            <p className="card-text">
              Anda sudah punya akun?
              <Link to="/registerCust" id={style.regis}>
                Masuk disini
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
