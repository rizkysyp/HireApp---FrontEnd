import React from "react";
import Assets from "./../../assets/img";
import style from "./pekerja/pekerja.module.css";

export default function resetPw() {
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
          <h1>Reset password</h1>
          <p>
            Enter your user account's verified email address and we will send
            you a password reset link.
          </p>
          <div className="container kotak_login mt-5 d-flex justify-content-center">
            <form className="col">
              <div className="form-group pb-4">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Masukkan alamat email"
                />
              </div>

              <button type="submit" id={style.btn} className="btn ">
                Send password reset email
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
