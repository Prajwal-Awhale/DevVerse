import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import JobData from "../Api/JobData.json";
import Sidebar from "./Sidebar";
import { CiLocationOn } from "react-icons/ci";

const Jobs = () => {
  return (
    <div className="flex flex-col min-h-screen">
     
      <Navbar  />

      <div className="flex flex-grow pt-5">
      
     


        <div className="flex-1 p-6 overflow-y-auto">
          <h1 className="text-3xl font-bold text-primary text-center mt-5">
            Available jobs ({JobData.length})
          </h1>

          <ul className="flex flex-wrap gap-6 justify-center p-6">
            {JobData.map((job, index) => (
              <li
                key={job.id}
                className="list-none animate-fade-in-up duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="border-2 border-black rounded-2xl">
                  <div className="card bg-base-100 w-96 shadow-sm p-1">
                    <figure>
                      <img
                        src={job.logo}
                        alt={job.title}
                        className="p-2 mt-4 max-h-[8vh] object-contain"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        {job.title}
                        <div className="badge badge-secondary">NEW</div>
                      </h2>
                      <p>{job.description}</p>
                      <div className="card-actions justify-start mt-5 flex flex-wrap gap-2">
                        <div className="badge badge-outline flex items-center gap-1">
                          <CiLocationOn /> {job.location}
                        </div>
                        <div className="badge badge-outline">{job.package}</div>
                        <div className="badge badge-outline">
                          Openings: {job.openings}
                        </div>
                      </div>
                      <button className="btn btn-primary m-5">Apply</button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

    
      <Footer />
    </div>
  );
};

export default Jobs;
