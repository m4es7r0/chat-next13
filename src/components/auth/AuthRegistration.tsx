"use client";

import { useAppActions, useAppSelector } from "@/src/hooks/useRedux";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

export default function AuthRegistration() {
  const { getRegisterData } = useAppActions();
  const fileRef = useRef<HTMLInputElement | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    getRegisterData(data);
  };

  return (
    <section className="auth-form-container">
      <Link href={"/"} title="go to home page">
        <span>MyChat</span>
      </Link>
      <span>Registration</span>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="display name"
          {...register("name", { required: true, minLength: 2, maxLength: 24 })}
        />
        {errors.name && (
          <span>
            {errors.name.type === "required" ? "this field required" : null}
            {errors.name.type === "minLength" ? "min length 2 symb" : null}
            {errors.name.type === "maxLength" ? "max length 24 symb" : null}
          </span>
        )}

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
            minLength: 8,
            maxLength: 24,
          })}
        />
        {errors.password && (
          <span>
            {errors.password.type === "required" ? "this field required" : null}
            {errors.password.type === "minLength" ? "min length 8 symb" : null}
            {errors.password.type === "maxLength" ? "max length 24 symb" : null}
          </span>
        )}

        <input type="file" id="avatar" ref={fileRef} />
        <label
          htmlFor="avatar"
          tabIndex={0}
          onKeyDown={(e) => {
            if (fileRef.current && e.key === "Enter") fileRef.current.click();
          }}
        >
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
