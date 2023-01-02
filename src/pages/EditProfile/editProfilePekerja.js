import React, { useState, useEffect } from "react";
import Assets from "../../assets/img";
import CardProfile from "../../components/CardProfile/CardProfile";
import "./editProfilePekerja.module.css";
import style from "./editProfilePekerja.module.css";
import { Form } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import NavbarHome from "../../components/NavbarHome/navbarHome";
import FormSkill from "../../components/Form/FormSkill.";
import FormExperience from "../../components/Form/FormExperience";
import FormPortofolio from "../../components/Form/FormPortofolio";
import Axios from "axios";
import ModalEdit from "./../../components/Modal/ModalEdit";

export default function EditProfile() {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState({
    title: "",
    text: "",
    type: "success",
  });
  const [messageShow, setMessageShow] = useState(true);
  const [inputData, setInputData] = useState({
    name: "",
    price: "",
    stock: "",
    category_id: "1",
    photo: "",
  });
  const [sortBy, setSortBy] = useState("name");
  const [sort, setSort] = useState("asc");
  const [selected, setSelected] = useState(null);
  const [onedit, setOnedit] = useState(false);

  useEffect(() => {
    selected ? setOnedit(true) : setOnedit(false);
    !selected &&
      setInputData({
        ...inputData,
        name: "",
        stock: "",
        price: "",
      });
  }, [selected]);

  const messageTime = () => {
    setTimeout(() => setMessageShow(false), 3000);
  };
  useEffect(() => {
    console.log("checked", sortBy);
    getData();
  }, [sortBy, sort, inputData.search]);
  useEffect(() => {
    getData();
  }, []);

  let users = `http://localhost:4200/products?sortby=${sortBy}&sort=${sort}&search=${inputData.search}`;
  const getData = () => {
    Axios.get(users)
      .then((res) => {
        console.log("get data success");
        console.log(res.data.data);
        res.data && setData(res.data.data);
        !selected && setMessageShow(true);
        !selected &&
          setMessage({
            title: "success",
            text: "get data success",
            type: "success",
          });
        !selected && messageTime();
        setSelected(null);
      })
      .catch((err) => {
        console.log("get data fail");
        console.log(err);
        setData([]);
        setMessageShow(true);
        setMessage({ title: "fail", text: "get data fail", type: "danger" });
        messageTime();
      });
  };

  const postForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", inputData.name);
    formData.append("stock", inputData.stock);
    formData.append("price", inputData.price);
    formData.append("category_id", inputData.category_id);

    console.log(formData);
    if (!selected) {
      Axios.post("http://localhost:4200/products/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((res) => {
          console.log("input data success");
          console.log(res);
          setMessageShow(true);
          setMessage({
            title: "success",
            text: "post data success",
            type: "success",
          });
          messageTime();
          getData();
        })
        .catch((err) => {
          console.log("input data fail");
          setMessageShow(true);
          setMessage({ title: "fail", text: "post data fail", type: "danger" });
          messageTime();
          console.log(err);
        });
    } else {
      Axios.put(`http://localhost:4200/products/${selected}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((res) => {
          console.log("input data success");
          console.log(res);
          setMessageShow(true);
          setMessage({
            title: "success",
            text: "update data success",
            type: "success",
          });
          messageTime();
          getData();
        })
        .catch((err) => {
          console.log("input data fail");
          setMessageShow(true);
          setMessage({ title: "fail", text: "post data fail", type: "danger" });
          messageTime();
          console.log(err);
        });
    }
  };

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };
  return (
    <div>
      <header className="container">
        <NavbarHome />
      </header>
      <div className="row">
        <div className="col-lg-12">
          <img src={Assets.bg} alt="" className="image-bg" />
        </div>
      </div>
      <div className="row bg-light" style={{ marginTop: "-250px" }}>
        <div className="col-3">
          <CardProfile />
          <div className="row">
            <div className="col-12">
              <div
                className="btn"
                style={{
                  backgroundColor: "#5E50A1",
                  color: "white",
                  width: "300px",
                  marginLeft: "110px",
                }}
              >
                <h6 className="myfont4" style={{ marginTop: "3px" }}>
                  Simpan
                </h6>
              </div>
            </div>
            <div className="col-12 mt-2">
              <div
                className="btn"
                style={{
                  borderColor: "#5E50A1",
                  color: "#5E50A1",
                  width: "300px",
                  marginLeft: "110px",
                }}
              >
                <h6 className="myfont4" style={{ marginTop: "3px" }}>
                  Batal
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 offset-1 mt-3">
          <div className="container text-start shadow rounded-2 mt-1 bg-white">
            <div className="row bg-light rounded-3">
              <div className="col-lg-12">
                <h3 className="myfont4 mt-4">Data diri</h3>
              </div>
              <hr />
            </div>
            <Form onSubmit={postForm}>
              <div className="row bg-light">
                <div className="col-lg-12">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      <h6 className="myfont3 color-font">Nama lengkap</h6>
                    </Form.Label>
                    <Form.Control
                      type="name"
                      placeholder="Masukan nama lengkap"
                      className="myfont3"
                      value={inputData.name}
                      name="name"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </div>
                <div className="col-lg-12">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      <h6 className="myfont3 color-font">Job desk</h6>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukan job desk"
                      className="myfont3"
                      value={inputData.jobdesc}
                      onChange={handleChange}
                      name="jobdesc"
                    />
                  </Form.Group>
                </div>
                <div className="col-lg-12">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      <h6 className="myfont3 color-font">Domisili</h6>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukan domisili"
                      className="myfont3"
                      value={inputData.domisili}
                      onChange={handleChange}
                      name="domisili"
                    />
                  </Form.Group>
                </div>
                <div className="col-lg-12">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      <h6 className="myfont3 color-font">Tempat kerja</h6>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukan tempat kerja"
                      className="myfont3"
                      value={inputData.alamat}
                      onChange={handleChange}
                      name="alamat"
                    />
                  </Form.Group>
                </div>
                <div className="col-lg-12">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      <h6 className="myfont3 color-font">Deskripsi singkat</h6>
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Tuliskan deskripsi singkat"
                      className="myfont3"
                      value={inputData.desc}
                      onChange={handleChange}
                      name="desc"
                    />
                  </Form.Group>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>

      <div className="row bg-light">
        <div className="col-6 offset-4 mt-3">
          <FormSkill />
        </div>
      </div>

      <div className="row bg-light">
        <div className="col-6 offset-4 mt-3">
          <FormExperience />
        </div>
      </div>

      <div className="row bg-light">
        <div className="col-6 offset-4 mt-3">
          <FormPortofolio />
        </div>
      </div>
      <Footer />
    </div>
  );
}
