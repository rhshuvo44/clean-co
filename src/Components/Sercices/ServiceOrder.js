import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import servicesApi from "../../api/servicesApi";
import auth from "../../firebase.init";
import { AiOutlineStar } from "react";

const ServiceOrder = () => {
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const [user, loading, error] = useAuthState(auth);
  if (user) {
    console.log(user);
  }
  const [singleService, setSingleService] = useState([]);
  useEffect(() => {
    servicesApi
      .get(`get-service/${id}`)
      .then((res) => setSingleService(res.data));
  }, [id]);
  const onSubmit = async (data) => {
    const order = {};
    const res = await servicesApi.post("");
    reset();
  };
  return (
    <div className="mt-16 p-10 flex justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-5xl font-bold">Service Order</h2>
          <div className="divider"><AiOutlineStar/></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              className="input input-bordered  w-full max-w-xs"
              {...register("name")}
            />
            <input
              type="email"
              className="input input-bordered my-2 w-full max-w-xs"
              {...register("email")}
            />
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              {...register("service")}
            />
            <input
              type="text"
              className="input my-2 input-bordered w-full max-w-xs"
              {...register("price")}
            />
            <textarea
              className="textarea textarea-bordered w-full max-w-xs"
              placeholder="Address"
            ></textarea>
            <input
              type="submit"
              value="Order Confirm"
              className="btn btn-primary w-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceOrder;
