"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import styles from "./page.module.scss";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

const Register: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("name"));

  return (
    <section className={styles.container}>
      <span>My Chat</span>
      <span>Register</span>
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
              width={42}
              height={42}
            />
          }
          add an avatar
        </label>
        <button type="submit">Sign up</button>
      </form>
      <p>
        You do have an account?{" "}
        {
          <Link href={"login"} className="underline text-indigo-500">
            Login
          </Link>
        }
      </p>
    </section>
  );
};

export default Register;
