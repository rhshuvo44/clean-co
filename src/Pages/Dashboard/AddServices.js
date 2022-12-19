import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import servicesApi from "../../api/servicesApi";

const AddServices = () => {
  const [imageUrl, setImageUrl] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const uploadImage = (event) => {
    const image = event.target.files[0];

    const formData = new FormData();

    formData.set("image", image);
    axios
      .post(
        "https://api.imgbb.com/1/upload?key=84a5698c1163075e540df1dc6008c8cf",
        formData
      )
      .then((res) => setImageUrl(res.data.data.url));
  };

  const onSubmit = (data) => {
    const services = {
      ...data,
      image: imageUrl,
    };
    servicesApi.post("add-service", services).then((res) => {
      reset();
      setImageUrl("");
    });
  };

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
              <input
                onChange={uploadImage}
                type="file"
                className="file-input file-input-bordered"
              />
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
