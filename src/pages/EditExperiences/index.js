/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import Assets from "../../assets/img";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const EditExperiences = () => {
  const [data, setData] = useState(null);
  const token = localStorage.getItem("Token");
  const [position, setPosition] = useState("");
  const [work_start, setWorkStart] = useState("");
  const [work_end, setWorkEnd] = useState("");
  const [company_name, setCompanyName] = useState("");
  const [description, setDescription] = useState("");

  console.log("ini token", token);
  const navigate = useNavigate();
  const { id } = useParams();

  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  let getData = `https://hireapp-be-production-e91c.up.railway.app/experience/detail/${id}`;
  useEffect(() => {
    axios
      .get(getData, user)
      .then((res) => {
        console.log("Get detail experience success");
        console.log(res.data.data[0]);
        res.data && setData(res.data.data[0]);
      })
      .catch((err) => {
        console.log("Get detail experience fail");
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
    let form = {
      position: position,
      work_start: work_start,
      work_end: work_end,
      company_name: company_name,
      description: description,
    };
    axios
      .put(
        `https://hireapp-be-production-e91c.up.railway.app/experience/${id}`,
        form,
        user
      )
      .then((res) => {
        console.log("Put experience success");
        console.log(res);
        Swal.fire("Success", "Put experience success", "success");
        navigate(`/editProfile`);
      })
      .catch((err) => {
        console.log("Put experience failed");
        console.log(err);
        Swal.fire("Warning", "Put experience failed", "error");
      });
  };
  return (
    <div>
      <div className="container text-start shadow rounded-2 mt-5">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="myfont4 mt-4">Pengalaman kerja</h3>
          </div>
          <hr />
        </div>
        {/* <div className="row mt-4">
          {data ? (
            data.map((item) => (
              <div>
                <div className="col-1">
                  <img src={Assets.tokped} alt="" />
                </div>
                <div
                  key={item.id}
                  className="col-9 offset-1"
                  style={{ marginLeft: "100px", marginTop: "-80px" }}
                >
                  <h5 className="myfont">{item?.position}</h5>
                  <h6 className="myfont3">{item?.company_name}</h6>
                  <h6 className="myfont3 color-font">
                    {item?.work_start}-{item?.work_end}
                  </h6>
                  <h6 className="myfont2 mb-4">{item?.description}</h6>
                  <button
                    className="btn"
                    style={{
                      width: "90px",
                      height: "40px",
                      backgroundColor: "#FBB017",
                      color: "white",
                    }}
                    key={item.id}
                    onClick={() => navigate(`/edit-experiences/${item.id}`)}
                  >
                    Edit
                  </button>
                </div>
                <hr />
              </div>
            ))
          ) : (
            <h1>...Loading</h1>
          )}
        </div> */}
        <Form>
          <div className="row">
            <div className="col-lg-12">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <h6 className="myfont3 color-font">Posisi</h6>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder={data?.position}
                  name="position"
                  onChange={(e) => setPosition(e.target.value)}
                  className="myfont3"
                />
              </Form.Group>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>
                    <h6 className="myfont3 color-font">Bulan/tahun masuk</h6>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={data?.work_start}
                    className="myfont3"
                    name="work_start"
                    onChange={(e) => setWorkStart(e.target.value)}
                  />
                </Form.Group>
              </div>
              <div className="col-lg-6">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>
                    <h6 className="myfont3 color-font">Bulan/tahun keluar</h6>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={data?.work_end}
                    className="myfont3"
                    name="work_end"
                    onChange={(e) => setWorkEnd(e.target.value)}
                  />
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>
                    <h6 className="myfont3 color-font">Nama perusahaan</h6>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={data?.company_name}
                    className="myfont3"
                    name="company_name"
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </Form.Group>
              </div>
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
                  placeholder={data?.description}
                  className="myfont3"
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>
              <hr />
              <div className="col-lg-12 align-items-center mb-5">
                <button
                  className="btn"
                  id="btn-yellw"
                  type="submit"
                  onClick={(e) => handleData(e)}
                  style={{
                    width: "1230px",
                    marginLeft: "26px",
                  }}
                >
                  Update pengalaman kerja
                </button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default EditExperiences;
