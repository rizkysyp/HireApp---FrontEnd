import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Form } from "react-bootstrap";

const client = axios.create({
  url: `https://rich-gold-gorilla-wear.cyclic.app/experiences/`,
});

const FormExperience = () => {
  const [company_name, setCompany_name] = useState("");
  const [role, setRole] = useState("");
  const [join_date, setJoin_date] = useState("");
  const [description, setDescription] = useState("");

  const [posts, setPosts] = useState([]);

  // const postForm = async (title, body) => {
  //   try {
  //     let response = await client.post("", {
  //       title: title,
  //       body: body,
  //     });
  //     setPosts([response.data, ...posts]);
  //     setCompany_name("");
  //     setRole("");
  //     setJoin_date("");
  //     setDescription("");
  //   } catch (error) {
  //     console.log(error);
  //   }
  const [inputData, setInputData] = useState({
    company_name: "",
    role: "",
    join_date: "",
    description: "",
  });
  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const PostExperience = (e) => {
    e.preventDefault();
    const formExperience = new FormData();
    formExperience.append("skill_name", inputData.skill_name);
    console.log(formExperience);
    const experiences = useSelector((state) => state.user.user);
    useEffect(() => {
      axios
        .post(
          `${process.env.REACT_APP_URL_ROUTE}/experiences${experiences.id}`,
          formExperience
        )
        .then((res) => {
          console.log("Input Data Success");
          console.log(res.data.data);
        })
        .catch((err) => {
          console.log("Input Data Fail");
          console.log(err);
        });
    }, []);
  };
  return (
    <div>
      <div className="container text-start shadow rounded-2 mt-3">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="myfont4 mt-4">Pengalaman kerja</h3>
          </div>
          <hr />
        </div>
        <Form onSubmit={PostExperience}>
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
                  placeholder="web developer"
                  className="myfont3"
                  name="role"
                  value={inputData.role}
                  onChange={handleChange}
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
                    <h6 className="myfont3 color-font">Nama perusahaan</h6>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="PT Harus bisa"
                    className="myfont3"
                    name="company_name"
                    value={inputData.company_name}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
              <div className="col-lg-6">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>
                    <h6 className="myfont3 color-font">Bulan/tahun</h6>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Januari 2018"
                    className="myfont3"
                    name="join_date"
                    value={inputData.join_date}
                    onChange={handleChange}
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
                  placeholder="Deskripsikan pekerjaan anda"
                  className="myfont3"
                  name="description"
                  value={inputData.description}
                  onChange={handleChange}
                />
              </Form.Group>
              <hr />

              <div className="col-lg-12 align-items-center mb-5">
                <button
                  className="btn"
                  id="btn-yellw"
                  type="submit"
                  style={{
                    width: "680px",
                    marginLeft: "26px",
                  }}
                >
                  <h6 className="myfont" style={{ marginTop: "8px" }}>
                    Tambah pengalaman kerja
                  </h6>
                </button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default FormExperience;
