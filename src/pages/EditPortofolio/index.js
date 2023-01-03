/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import Assets from "../../assets/img";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const EditPortofolio = () => {
  const [data, setData] = useState(null);
  const token = localStorage.getItem("Token");
  const [position, setPosition] = useState("");
  const [work_start, setWorkStart] = useState("");
  const [work_end, setWorkEnd] = useState("");
  const [company_name, setCompanyName] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");

  console.log("ini token", token);
  const navigate = useNavigate();
  const { id } = useParams();

  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  let getData = `https://hireapp-be-production-e91c.up.railway.app/portofolio/detail/${id}`;
  useEffect(() => {
    axios
      .get(getData, user)
      .then((res) => {
        console.log("Get detail portofolio success");
        console.log(res.data.data[0]);
        res.data && setData(res.data.data[0]);
      })
      .catch((err) => {
        console.log("Get detail portofolio fail");
        console.log(err);
      });
  }, []);
  const [postData, setPostData] = useState({
    position: data?.position,
    work_start: data?.work_start,
    work_end: data?.work_end,
    company_name: data?.company_name,
    description: data?.description,
  });
  const handleChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };
  const handleData = async (e) => {
    e.preventDefault();
    // let form = {
    //   position: position,
    //   work_start: work_start,
    //   work_end: work_end,
    //   company_name: company_name,
    //   description: description,
    // };
    const formData = new FormData();
    formData.append("name", postData.name);
    formData.append("repo", postData.repo);
    formData.append("type", postData.type);
    formData.append("photo", photo);
    console.log(formData);
    axios
      .put(
        `https://hireapp-be-production-e91c.up.railway.app/portofolio/edit/${id}`,
        formData,
        user
      )
      .then((res) => {
        console.log("Put portofolio success");
        console.log(res);
        Swal.fire("Success", "Put portofolio success", "success");
        navigate(`/editProfile`);
      })
      .catch((err) => {
        console.log("Put portofolio failed");
        console.log(err);
        Swal.fire("Warning", "Put portofolio failed", "error");
      });
  };
  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  return (
    <div>
      <div className="container text-start shadow rounded-2 mt-5">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="myfont4 mt-4">Portofolio</h3>
          </div>
          <hr />
        </div>
        <Form>
          <div className="row">
            <div className="col-lg-12">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <h6 className="myfont3 color-font">Nama aplikasi</h6>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder={data?.name}
                  className="myfont3"
                  name="name"
                  onChange={(e) => handleChange(e)}
                  value={postData.name}
                />
              </Form.Group>
            </div>
            <div className="col-lg-12">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <h6 className="myfont3 color-font">Link repository</h6>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder={data?.repo}
                  className="myfont3"
                  name="repo"
                  onChange={(e) => handleChange(e)}
                  value={postData.repo}
                />
              </Form.Group>
            </div>
            <div className="col-lg-12">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <h6 className="myfont3 color-font">Type portofolio</h6>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder={data?.type}
                  className="myfont3"
                  name="type"
                  onChange={(e) => handleChange(e)}
                  value={postData.type}
                />
              </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <h6 className="myfont3 color-font">Upload gambar</h6>
              </Form.Label>
              <div className="row">
                <div className="col-lg-12">
                  <Form.Control
                    type="file"
                    placeholder="Masukan type aplikasi"
                    className="myfont3"
                    name="photo"
                    onChange={handlePhotoChange}
                  />
                </div>
              </div>
            </Form.Group>
            <hr className="mt-1" />
            <div className="col-lg-12 align-items-center mb-5 mt-1">
              <button
                className="btn "
                id="btn-yellw"
                type="submit"
                onClick={(e) => handleData(e)}
                style={{
                  width: "680px",
                  marginLeft: "26px",
                }}
              >
                <h6 className="myfont" style={{ marginTop: "8px" }}>
                  Update portofolio
                </h6>
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default EditPortofolio;
