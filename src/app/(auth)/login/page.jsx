"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "./loginPage.module.css";
import Image from "next/image";

const LoginPage = () => {
  const { data, status } = useSession();
 
  const router = useRouter();

  if (status === "loading")
    return <div className={styles.loading}>Loading...</div>;

  if (status === "authenticated") {
    router.push("/");
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Sign in to The Scribbly</h1>
        <p className={styles.subtitle}>Your creative space awaits.</p>

        <button
          className={`${styles.btn} ${styles.google}`}
          onClick={() => signIn("google")}
        >
          <Image src="/google-icon.svg" alt="Google" width={20} height={20} />
          <span>Continue with Google</span>
        </button>

        <button
          className={`${styles.btn} ${styles.github}`}
          onClick={() => signIn("github")}
        >
          <Image src="/github-icon.svg" alt="GitHub" width={20} height={20} />
          <span>Continue with GitHub</span>
        </button>

        <button className={`${styles.btn} ${styles.facebook}`}>
          <Image
            src="/facebook-icon.svg"
            alt="Facebook"
            width={20}
            height={20}
          />
          <span>Continue with Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
