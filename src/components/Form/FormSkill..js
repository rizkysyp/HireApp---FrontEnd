import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";

const client = Axios.create({
  url: `https://rich-gold-gorilla-wear.cyclic.app/skill/ `,
});

const FormSkill = () => {
  const [skill, setSkill] = useState("");
  const [posts, setPosts] = useState([]);
  const token = useSelector((state) => state.data);

  const postForm = (e) => {
    e.preventDefault();
    addPosts(skill);
  };
  const addPosts = async (skill) => {
    try {
      let response = await client.post("", {
        skill: skill,
      });
      setPosts([response.data, ...posts]);
      setSkill("");
    } catch (error) {
      console.log(error);
    }
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
        <Form onSubmit={postForm}>
          <div className="row">
            <div className="col-lg-10">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Java"
                  className="myfont3"
                  value={skill}
                  name="name"
                  onChange={(e) => setSkill(e.target.value)}
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
        </Form>
      </div>
    </div>
  );
};
export default FormSkill;
