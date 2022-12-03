import React from "react";
import bucketgirl from "../../assets/image/bucketgirl .png";

const Banner = () => {
  return (
    <div className="hero h-screen lg:h-[80vh] bg-accent mt-16 relative z-10">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <p>Best Quality</p>
          <h1 className="text-5xl font-bold max-w-lg">
            Professional Cleaning Service
          </h1>
          <p className="py-6 max-w-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <div className="h-[80vh] shrink-0">
          <img src={bucketgirl} className="h-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
