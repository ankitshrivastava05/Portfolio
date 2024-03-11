import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import img1 from "../Hero/images/heroImage.jpg"

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ankit</h1>
        <p className={styles.description}>
           I am a Java Full Stack Developer. I have a good knowledge of Reactjs. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={img1}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};