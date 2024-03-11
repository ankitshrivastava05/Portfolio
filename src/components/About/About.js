import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import img1 from "../About/images/aboutImage.png"
import img2 from "../About/images/frontend.jpeg"
import img3 from "../About/images/backend.jpeg"

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={img1}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={img2} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with knowledge of Reactjs Framework in building responsive
                and optimized sites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={img3} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have knowledge of Java for developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};