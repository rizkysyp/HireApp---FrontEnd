import React from "react";
import DropdownSort from "./dropdownsort";

import styles from "./searchbar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import searchImg from "./search.png";

const Searchbar = ({ onChange, onClick }) => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "none",
        borderRadius: "10px",
        marginTop: "50px",
        padding: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        background: "white",
      }}
    >
      <input
        type="search"
        className={styles.search}
        placeholder="Search for any skill"
        onChange={onChange}
      />
      <div className={styles.searchImg}>
        <img src={searchImg} alt="search" style={{ width: "40px" }} />
      </div>
      <div className={styles.vl}></div>
      <DropdownSort />
      <button
        type="submit"
        className={styles["search-button"]}
        onClick={onClick}
        value=""
        title="Search"
      >
        Search
      </button>
    </div>
  );
};

export default Searchbar;
