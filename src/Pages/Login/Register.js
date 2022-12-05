import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Components/Shared/Loading";
import auth from "../../firebase.init";
const Register = () => {
  const { register, handleSubmit } = useForm();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/dashboard";

  if (user || gUser) {
    navigate(from, { replace: true });
  }
  if (error || gError || updateError) {
    return (
      <p className="text-red-500 mb-5">
        Error: {error?.message || gError?.message}
      </p>
    );
  }
  if (loading || gLoading || updating) {
    return <Loading />;
  }
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };
  return (
    <div className="flex justify-center items-center h-screen bg-accent">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
              {...register("name", { required: true })}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full my-3"
              {...register("email", { required: true })}
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full mb-3"
              {...register("password", { required: true })}
            />

            <input
              type="submit"
              value="Sign Up"
              className="btn btn-primary w-full"
            />
          </form>
          <p>
            New to Clean Co ?
            <Link to="/login" className="text-primary">
              {" "}
              Login
            </Link>
          </p>
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

export default Register;
