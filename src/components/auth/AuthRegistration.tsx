"use client";

import Image from "next/image";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

export default function AuthRegistration() {
  const { register, handleSubmit, watch } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <section className="auth-form-container">
      <Link href={"/"}>
        <span>My Chat</span>
      </Link>
      <span>Registration</span>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="display name"
          {...(register("name"),
          { required: true, minLength: 2, maxLength: 24 })}
        />
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
        <input type="file" id="avatar" />
        <label htmlFor="avatar">
          {
            <Image
              src={"/img/addAvatar.png"}
              alt="add Avatar"
              width={38}
              height={38}
            />
          }
          Add an avatar
        </label>
        <button type="submit">Sign up</button>
      </form>
      <p>
        You do have an account?{" "}
        {
          <Link href={"login"} className="underline text-indigo-500">
            Sign in
          </Link>
        }
      </p>
    </section>
  );
}
