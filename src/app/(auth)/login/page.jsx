import LoginForm from '@/components/loginForm/LoginForm';
import styles from "./Login.module.css";
import React from 'react';

function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage