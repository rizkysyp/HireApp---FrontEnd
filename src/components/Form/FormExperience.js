import React, { useState, useEffect } from "react";
import axios from "axios";
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

  const postForm = async (title, body) => {
    try {
      let response = await client.post("", {
        title: title,
        body: body,
      });
      setPosts([response.data, ...posts]);
      setCompany_name("");
      setRole("");
      setJoin_date("");
      setDescription("");
    } catch (error) {
      console.log(error);
    }
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
        <Form onSubmit={postForm}>
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
                  value={company_name}
                  name="company_name"
                  onChange={(e) => setCompany_name(e.target.value)}
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
                    value={role}
                    name="company_name"
                    onChange={(e) => setRole(e.target.value)}
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
                    value={join_date}
                    name="join_date"
                    onChange={(e) => setJoin_date(e.target.value)}
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
                  value={description}
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>
              <hr />

              <div className="col-lg-12 align-items-center mb-5">
                <button
                  type="submit"
                  className="btn"
                  id="btn-yellw"
                  style={{
                    width: "680px",
                    marginLeft: "26px",
                  }}
                >
                  Tambah pengalaman kerja
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
