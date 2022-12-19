import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { AiOutlineStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import servicesApi from "../../api/servicesApi";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const ServiceOrder = () => {
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const [user, loading] = useAuthState(auth);
  const [singleService, setSingleService] = useState([]);
  useEffect(() => {
    servicesApi
      .get(`get-service/${id}`)
      .then((res) => setSingleService(res.data));
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  const onSubmit = async (data) => {
    const order = {
      name: user.displayName,
      email: user.email,
      serviceName: singleService.serviceName,
      price: singleService.price,
      ...data,
    };
    const res = await servicesApi.post("add-order", order);
    console.log(res.status);
    if (res.status === 200) {
      toast.success("Order Successful");
      reset();
    }
    if (res.status !== 200) {
      toast.error("Order Fail");
    }
  };
  return (
    <div className="mt-16 p-10 flex justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-5xl font-bold">Service Order</h2>
          <div className="divider">
            <AiOutlineStar className="w-14 h-14 text-primary" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              value={user.displayName}
              disabled
              className="input input-bordered  w-full max-w-xs"
            />
            <input
              type="email"
              value={user.email}
              disabled
              className="input input-bordered my-2 w-full max-w-xs"
            />
            <input
              type="text"
              value={singleService.serviceName}
              disabled
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              value={singleService.price}
              disabled
              className="input my-2 input-bordered w-full max-w-xs"
            />
            <textarea
              className="textarea textarea-bordered w-full max-w-xs"
              placeholder="Address"
              {...register("address")}
              required
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
