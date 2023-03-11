import React, { useState } from "react";
import classes from "./navbar.module.css";
import { Link } from "react-router-dom";
import childImage from "../../assets/1.jpg";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to="/">Webp</Link>
        </div>
        <ul className={classes.center}>
          <li className={classes.listItem}>Start</li>
          <li className={classes.listItem}>About</li>
          <li className={classes.listItem}>Kontakt</li>
          <li className={classes.listItem}>Categories</li>
        </ul>
        <div className={classes.right}>
          <img
            onClick={() => setShowModal((prev) => !prev)}
            src={childImage}
            alt="..."
            className={classes.img}
          />
          {showModal && (
            <div className={classes.modal}>
              <Link to="/create">Create</Link>
              <span>Logout</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
