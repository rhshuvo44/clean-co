import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex justify-center items-center h-screen bg-accent">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              {...register("email", { required: true })}
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full my-3"
              {...register("password", { required: true })}
            />

            <input
              type="submit"
              value="Login"
              className="btn btn-primary w-full"
            />
          </form>
          <div className="divider">OR</div>
          <button
            type="submit"
            className="btn  btn-outline btn-secondary w-full"
          >
            continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
