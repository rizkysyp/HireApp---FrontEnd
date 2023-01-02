import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Form } from "react-bootstrap";

const client = axios.create({
  url: `https://rich-gold-gorilla-wear.cyclic.app/skill/ `,
});

const FormSkill = () => {
  const [inputData, setInputData] = useState({
    skill_name: "",
  });
  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const PostSkill = (e) => {
    e.preventDefault();
    const formSkill = new FormData();
    formSkill.append("skill_name", inputData.skill_name);
    console.log(formSkill);
    const skill = useSelector((state) => state.user.user);
    useEffect(() => {
      axios
        .post(
          `${process.env.REACT_APP_URL_ROUTE}/skill${skill.id_users}`,
          formSkill
        )
        .then((res) => {
          console.log("Input Data Success");
          console.log(res);
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
            <h3 className="myfont4 mt-4">Skill</h3>
          </div>
          <hr />
        </div>
        <form onSubmit={PostSkill}>
          <div className="row">
            <div className="col-lg-10">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Skill"
                  name="skill_name"
                  value={inputData.skill_name}
                  onChange={handleChange}
                  className="myfont3"
                />
              </Form.Group>
            </div>
            <div className="col-lg-2">
              <button
                type="submit"
                className="btn"
                style={{ backgroundColor: "#FBB017", color: "white" }}
              >
                Simpan
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default FormSkill;
