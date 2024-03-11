import React from "react";

import styles from "./Skills.module.css";

import skills from "../../data/skills.json";
import { SkillsCard } from "./SkillsCard";

const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.skills}>
        {skills.map((skill, id) => {
          return <SkillsCard key={id} skill={skill} />;
        })}
      </div>
    </section>
  );
};

export default Skills