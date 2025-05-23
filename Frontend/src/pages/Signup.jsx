import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/login");
  };

  return (
    <>
      <Navbar />
      <div className="m-4  ">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center items-center min-h-[60vh] ">
            <div className="border-2 border-black p-6 min-h-[40vh] rounded-2xl bg-neutral ">
              <h1 className="text-amber-50 text-2xl font-bold  text-center p-4 ">
                Sign Up
              </h1>
              <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
                <label className="fieldset-label">UserName</label>
                <input
                  type="text"
                  className="input"
                  placeholder="UserName"
                  {...register("UserName")}
                />

                <label className="fieldset-label">Email</label>
                <input
                  type="email"
                  className="input text-amber-50"
                  placeholder="Email"
                  {...register("Email")}
                />

                <label className="fieldset-label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  {...register("Pass")}
                />

                <button className="btn btn-primary mt-4 w-full " type="Submit">
                  Sign Up
                </button>
                <h1 className=" text-center text-amber-50">OR</h1>

                <button className="btn bg-white text-black border-[#e5e5e5]">
                  <svg
                    aria-label="Email icon"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      fill="none"
                      stroke="black"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </g>
                  </svg>
                  Login with Email
                </button>

                {/* GitHub */}
                <button className="btn bg-black text-white border-black">
                  <svg
                    aria-label="GitHub logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                    ></path>
                  </svg>
                  Login with GitHub
                </button>

                {/* Google */}
                <button className="btn bg-white text-black border-[#e5e5e5]">
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>
              </fieldset>
            </div>
            <div className="img ">
              <img
                src="https://imgs.search.brave.com/_8oyJrZb2p-MI5p8jIRChnHJCDyAgtbLNzxCZqRYc6I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMw/NTI2ODI3Ni92ZWN0/b3IvcmVnaXN0cmF0/aW9uLWFic3RyYWN0/LWNvbmNlcHQtdmVj/dG9yLWlsbHVzdHJh/dGlvbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9bmZ2VWJI/amNORFZJUGRXa2F4/R3gwejBXWmFBRXVC/SzlTeUctYUlxZzIt/MD0"
                alt=""
                className="w-[30vw]"
              />
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Signup;
