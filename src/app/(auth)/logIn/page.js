import LoginForm from "@/components/LoginForm/LoginForm";
import { handleGithubLogin } from "@/lib/actions";
import { auth } from "@/lib/auth";
import React from "react";
import styles from "./logIn.module.css";

const LogInPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LogInPage;
