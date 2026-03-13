import React, { use, useContext } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const ApplyJob = () => {
  const job = useLoaderData();
  console.log(job);
  const { user } = useContext(AuthContext);

  const { title, company, company_logo, hr_email } = job;

  const handleApply = (e) => {
    e.preventDefault();

    const form = e.target;

    const linkedin = form.linkedin.value;
    const resume = form.resume.value;

    const application = {
      email: user.email,
      linkedin,
      resume,
      job_title: title,
      company,
      hr_email,
    };

    console.log(application);
    axios
      .post("http://localhost:5000/applications", application)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Apply Done",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Job Info */}
      <div className="flex items-center gap-4 mb-8">
        <img src={company_logo} className="w-14" />
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-gray-500">{company}</p>
        </div>
      </div>

      {/* Form */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-xl font-semibold mb-4">Apply for this Job</h2>

          <form onSubmit={handleApply} className="space-y-4">
            <input
              type="text"
              name="linkedin"
              placeholder="LinkedIn Profile"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="resume"
              placeholder="Resume Link (Google Drive / Portfolio)"
              className="input input-bordered w-full"
            />
            <button className="btn btn-primary w-full">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyJob;
