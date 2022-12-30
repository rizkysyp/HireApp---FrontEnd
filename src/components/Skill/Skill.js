import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
const Skill = () => {
  const [data, setData] = useState(null);
  const id = localStorage.getItem("Id");
  let user = `${process.env.REACT_APP_URL_ROUTE}/skill/${id}`;
  useEffect(() => {
    axios
      .get(user)
      .then((res) => {
        console.log("get data success");
        console.log(res.data);
        res.data && setData(res.data.data);
      })
      .catch((err) => {
        console.log("get data fail");
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="row mt-2">
        {data ? (
          data.map((item) => (
            <div className="col-5 ">
              <div className="card-1 mt-3">
                <div
                  className="btn"
                  style={{ backgroundColor: "#FBB017", color: "white" }}
                >
                  {item.skill_name}
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1>...Loading</h1>
        )}
      </div>
    </div>
  );
};
export default Skill;
