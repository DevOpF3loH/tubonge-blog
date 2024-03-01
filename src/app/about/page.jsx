import Image from "next/image";
import React from "react";
import styles from "./About.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Tubonge</h2>
        <h1 className={styles.title}>
          We love you, we forgive, we are sorry, thank you!
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis et
          quibusdam ipsum exercitationem assumenda dicta eaque deserunt. Numquam
          dolores ab repudiandae quis autem, quod fugit laudantium odit
          molestiae, voluptas iure.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
