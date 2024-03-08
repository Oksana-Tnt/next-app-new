"use client";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import React, { useEffect } from "react";
import { login } from "@/lib/actions";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  const router = useRouter();
  //   useEffect(() => {
  //     state?.success && router.push("/logIn");
  //   }, [state?.success, router]);
  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />

      <button>Login</button>
      {state?.error && <p>{state.error}</p>}
      <Link href="/register">
        {"Don't have an account?"}
        <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
