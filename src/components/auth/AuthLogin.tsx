"use client";

import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

import "@/src/styles/authForm.scss";

type Inputs = {
  email: string;
  password: string;
};

export default function AuthLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
        {errors.password && <span>password or login is incorrect</span>}

        <button type="submit">Sign in</button>
      </form>
      <p>
        You do not have an account?{" "}
        {
          <Link href={"registration"} className="underline text-indigo-500">
            Sign up
          </Link>
        }
      </p>
    </section>
  );
}
