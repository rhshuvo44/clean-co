import React from "react";
import { useForm } from "react-hook-form";

const Estimate = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="bg-neutral w-full md:w-[70%] mx-auto p-10 relative mb-20 shadow-lg mt-[-30px] rounded z-20">
      <h2 className="text-5xl text-primary ">Get Free Estimate</h2>
      {/* Estimate from start  */}
      <form
        className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered w-full"
          {...register("name", { required: true })}
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="input input-bordered w-full"
          {...register("number", { required: true })}
        />
        <input
          type="text"
          placeholder="Type of cleaning"
          className="input input-bordered w-full"
          {...register("typeCleaning", { required: true })}
        />
        <input
          type="text"
          placeholder="Type of cleaning"
          className="input input-bordered w-full"
          {...register("typeCleaning", { required: true })}
        />
        <input
          type="text"
          placeholder="Number of bedrooms"
          className="input input-bordered w-full"
          {...register("bedrooms", { required: true })}
        />
        <input
          type="text"
          placeholder="Number of bathrooms"
          className="input input-bordered w-full"
          {...register("bathrooms", { required: true })}
        />
        <input
          type="text"
          placeholder="Frequency of Cleaning"
          className="input input-bordered w-full"
          {...register("frequencyCleaning", { required: true })}
        />
        <input
          type="text"
          placeholder="Type of Cleaning"
          className="input input-bordered w-full"
          {...register("typeCleaning", { required: true })}
        />
        <input
          type="submit"
          value="REQUEST A QOUTE"
          className="btn btn-primary"
        />
      </form>
      {/* Estimate from end  */}
    </div>
  );
};

export default Estimate;
