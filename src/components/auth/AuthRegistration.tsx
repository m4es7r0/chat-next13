"use client";

import { auth, db, storage } from "@/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import {
  getDownloadURL,
  ref as fireRef,
  uploadBytesResumable,
} from "firebase/storage";

import NextImage from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  displayName: string;
  email: string;
  password: string;
  file: any;
};

export default function AuthRegistration() {
  const router = useRouter();
  const [err, setErr] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>();

  console.log(watch("file"));

  const fileRef = useRef<HTMLInputElement | null>(null);
  const { ref, ...rest } = register("file");

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      //Create user
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = fireRef(storage, `${data.displayName + date}`);
      const defaultUserImage = await fetch("/img/user.svg").then((res) =>
        res.blob()
      );

      await uploadBytesResumable(
        storageRef,
        data.file.length !== 0 ? data.file[0] : defaultUserImage
      ).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName: data.displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName: data.displayName,
              email: data.email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            router.replace("/");
          } catch (err) {
            console.error(err);
            setErr(true);
          }
        });
      });
    } catch (err) {
      setErr(true);
    }
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
          {...register("displayName", {
            required: true,
            minLength: 2,
            maxLength: 24,
          })}
        />
        {errors.displayName && (
          <span>
            {errors.displayName.type === "required"
              ? "this field required"
              : null}
            {errors.displayName.type === "minLength"
              ? "min length 2 symb"
              : null}
            {errors.displayName.type === "maxLength"
              ? "max length 24 symb"
              : null}
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
            {errors.password!.type === "required"
              ? "this field required"
              : null}
            {errors.password!.type === "minLength" ? "min length 8 symb" : null}
            {errors.password!.type === "maxLength"
              ? "max length 24 symb"
              : null}
          </span>
        )}
        {err ? <span>something went wrong</span> : null}

        <input
          type="file"
          accept="image/*"
          id="avatar"
          {...rest}
          ref={(e) => {
            ref(e);
            fileRef.current = e;
          }}
        />
        <label
          htmlFor="avatar"
          tabIndex={0}
          onKeyDown={(e) => {
            if (fileRef.current && e.key === "Enter") fileRef.current.click();
          }}
        >
          {
            <NextImage
              src={"/img/addAvatar.png"}
              alt="add Avatar"
              width={38}
              height={38}
            />
          }
          Add an avatar
        </label>
        <button type="submit">
          {auth.currentUser ? (
            <NextImage
              className="w-7 h-7"
              src="/loader.png"
              width={1920}
              height={1920}
              alt="loader"
            />
          ) : (
            "Sign up"
          )}
        </button>
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
