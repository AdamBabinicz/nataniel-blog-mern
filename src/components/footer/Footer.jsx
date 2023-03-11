import React from "react";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            quas iusto perferendis sequi esse! Blanditiis, tempora nostrum,
            ipsam, iste voluptatem fuga et possimus sit aliquam obcaecati dolore
            impedit aperiam delectus?
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: +123 456 789 </span>
          <span>YouTube: WebDevMania</span>
          <span>GitHub: WebDevMania</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent: Europe</span>
          <span>Country: Poland</span>
          <span>Current Location: Poland</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
