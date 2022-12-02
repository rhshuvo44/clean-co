import React from "react";
import bucketgirl from "../../assets/image/bucketgirl .png";

const Banner = () => {
  return (
    <div className="hero lg:h-[60vh] bg-accent mt-16">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <p>Best Quality</p>
          <h1 className="text-5xl font-bold max-w-lg">Professional Cleaning Service</h1>
          <p className="py-6 max-w-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <div className="h-[60vh]">
          <img src={bucketgirl} className="max-w-sm rounded-lg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
