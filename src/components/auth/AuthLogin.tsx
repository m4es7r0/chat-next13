"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import "@/src/styles/authForm.scss";
import Image from "next/image";

type Inputs = {
  email: string;
  password: string;
};

export default function AuthLogin() {
  const router = useRouter();
  const [err, setErr] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      router.replace("/");
    } catch (error) {
      setErr(true);
    }
  };

  return (
    <section className="auth-form-container">
      <Link href={"/"} title="go to home page">
        <span>MyChat</span>
      </Link>
      <span>Login</span>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="email"
          {...register("email", {
            required: true,
            pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          })}
        />
        {errors.email && (
          <span>
            {errors.email.type === "required" ? "this field required" : null}
            {errors.email.type === "pattern" ? "this should be an email" : null}
          </span>
        )}

        <input
          type="password"
          placeholder="password"
          {...register("password", {
            required: true,
          })}
        />
        {(errors.password || err) && (
          <span>password or login is incorrect</span>
        )}

        <button type="submit">
          {auth.currentUser ? (
            <Image
              className="w-7 h-7"
              src="/loader.png"
              width={1920}
              height={1920}
              alt="loader"
            />
          ) : (
            "Sign in"
          )}
        </button>
      </form>
      <p>
        You do not have an account?{" "}
        <Link href={"registration"} className="underline text-indigo-500">
          Sign up
        </Link>
      </p>
    </section>
  );
}
