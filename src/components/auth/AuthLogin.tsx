"use client";

import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

import "@/src/styles/authForm.scss";

type Inputs = {
  email: string;
  password: string;
};

export default function AuthLogin() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <section className="auth-form-container">
      <span>My Chat</span>
      <span>Login</span>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="email"
          {...(register("email"),
          {
            required: true,
          })}
        />
        <input
          type="password"
          placeholder="password"
          {...(register("password"),
          { required: true, minLength: 8, maxLength: 24 })}
        />
        <button type="submit">Sign in</button>
      </form>
      <p>
        You do not have an account?{" "}
        {
          <Link href={"register"} className="underline text-indigo-500">
            Sign up
          </Link>
        }
      </p>
    </section>
  );
}
