import React, { useState } from "react";
import Assets from "../../../assets/img";
import style from "./perekrut.module.css";
import { useDispatch } from "react-redux";
import { Route, Link, Routes, useNavigate } from "react-router-dom";
import { register } from "../../../Redux/action/registerPerekrut";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [perusahaan, setPerusahaan] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const matchInput = (input, allInputs) => {
    return input === allInputs.password ? undefined : "Passwords do not match";
  };
  const postData = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(perusahaan);
    console.log(jabatan);
    console.log(phonenumber);
    console.log(password);
    console.log(confirmPassword);

    let data = {
      name,
      email,
      perusahaan,
      jabatan,
      phonenumber,
      password,
      confirmPassword,
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
                  id="inputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Masukkan alamat email"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group pt-3">
                <label>Perusahaan</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Masukkan nama perusahaan"
                  value={perusahaan}
                  name="perusahaan"
                  onChange={(e) => setPerusahaan(e.target.value)}
                />
              </div>
              <div className="form-group pt-3">
                <label>Jabatan</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Posisi di perusahaan anda"
                  value={jabatan}
                  name="jabatan"
                  onChange={(e) => setJabatan(e.target.value)}
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
                  value={confirmPassword}
                  validate={[matchInput]}
                  name="confirmPassword"
                  onChange={(e) => setConfirmpassword(e.target.value)}
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
