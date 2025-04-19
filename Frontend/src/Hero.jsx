import React from "react";
import "./index.css";
import { MdArrowCircleRight } from "react-icons/md";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <div>
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-remote-recruitment-illustration_52683-143689.jpg?semt=ais_hybrid&w=740"
          alt=""
          className=" h-[60vh] w-[50vw] object-contain max-h-none max-w-none float-end"
        />
      </div>
      <div>
        {" "}
        <h2 className=" text-3xl md:text-6xl font-extrabold text-amber-950 tracking-tight text-center mt-[10rem] px-4 txt">
          "Your code. Your career. Your future. All in one place." <br />{" "}
          <span className="text-amber-500">land your dream job</span> with{" "}
          <span className="text-red-600  ">@DevVerse</span> ..!!
        </h2>
        <div className="flex mt-5 flex-col items-center">
          <Link to="/signup">
            <button className="btn btn-primary align-middle">
              
              View Jobs <MdArrowCircleRight />{" "}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
