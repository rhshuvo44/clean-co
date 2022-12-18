import React from "react";
import { useForm } from "react-hook-form";

const AddServices = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <input
                type="text"
                placeholder="Service Name"
                className="input input-bordered"
                {...register("serviceName")}
              />
            </div>
            <div className="form-control my-3">
              <input
                type="text"
                placeholder="Services Price"
                className="input input-bordered"
                {...register("price")}
              />
            </div>
            <div className="form-control">
              <textarea
                className="textarea textarea-bordered"
                placeholder="Discretion"
                {...register("discretion")}
              ></textarea>
            </div>
            <div className="form-control mt-3">
              <input type="file" className="file-input file-input-bordered" />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Add Service</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddServices;
