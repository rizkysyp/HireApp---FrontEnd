import React from "react";
import { Link } from "react-router-dom";
import styles from "./dropdownsort.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const DropdownSort = () => {
  return (
    <div className={`dropdown ${styles["dropdown-wrapper"]}`}>
      <Link
        className={`btn dropdown-toggle ${styles.toggler}`}
        to="#"
        role="button"
        id="dropdownMenuLink"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <label className={styles.label}>Kategori</label>
      </Link>

      <ul
        className={`dropdown-menu ${styles.menu}`}
        aria-labelledby="dropdownMenuLink"
      >
        <li>
          <Link to="#" className={styles.options}>
            Sortir berdasarkan nama
          </Link>
        </li>
        <li>
          <Link to="#" className={styles.options}>
            Sortir berdasarkan Skill
          </Link>
        </li>
        <li>
          <Link to="#" className={styles.options}>
            Sortir berdasarkan Lokasi
          </Link>
        </li>
        <li>
          <Link to="#" className={styles.options}>
            Sortir berdasarkan freelance
          </Link>
        </li>
        <li>
          <Link to="#" className={styles.options}>
            Sortir berdasarkan fulltime
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownSort;
