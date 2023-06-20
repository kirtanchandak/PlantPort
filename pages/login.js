import Layout from "@/components/Layout";
import React from "react";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandeler = ({ email, password }) => {
    console.log(email, password);
  };

  return (
    <>
      <Layout>
        <form
          onSubmit={handleSubmit(submitHandeler)}
          className="flex flex-col justify-center items-center m-24 md:m-32 pt-10"
        >
          <h1 className="text-4xl font-bold">Login</h1>
          <div className="flex flex-col gap-1 pt-4">
            <label htmlFor="" className="text-xl">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border-2 border-gray-500 rounded-sm"
              {...register("email", { required: "Please enter email!" })}
            />
          </div>
          {errors.email && (
            <div className="text-red-500 mt-1">{errors.email.message}</div>
          )}
          <div className="flex flex-col gap-1 pt-3">
            <label htmlFor="" className="text-xl">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border-2 border-gray-500 rounded-sm"
              {...register("password", {
                required: "Please enter password!",
                minLength: {
                  value: 6,
                  message: "Password must be atleast 6 characters long!",
                },
              })}
            />
          </div>
          {errors.password && (
            <div className="text-red-500 mt-1">{errors.password.message}</div>
          )}
          <button className="mt-4 px-3 py-[3px] rounded-md bg-green-500">
            SignIn
          </button>
        </form>
      </Layout>
    </>
  );
}

export default Login;