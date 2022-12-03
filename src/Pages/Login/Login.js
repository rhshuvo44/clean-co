import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  if (error || gError) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading || gLoading) {
    return <p>Loading...</p>;
  }
  if (user || gUser) {
    return (
      <div>
        <p>Signed In User: {user.email}</p>
      </div>
    );
  }
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    signInWithEmailAndPassword(email, password);
    console.log(data);
  };
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
            onClick={() => signInWithGoogle()}
          >
            continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
