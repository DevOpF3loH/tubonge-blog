import styles from "./Register.module.css";
import React from "react";
import RegisterForm from "@/components/registerForm/RegisterForm";

function RegisterPage() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <RegisterForm />
      </div>
    </div>
  );
}

export default RegisterPage;
