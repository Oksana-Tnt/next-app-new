import React from "react";
import styles from "./register.module.css";
import RegisterForm from "@/components/RegisterForm/RegisterForm";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <dib className={styles.wrapper}>
        <RegisterForm />
      </dib>
    </div>
  );
};

export default RegisterPage;
