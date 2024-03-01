import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Tubonge</div>
      <div className={styles.text}>Sema, usiskike?</div>
    </div>
  );
};

export default Footer;
