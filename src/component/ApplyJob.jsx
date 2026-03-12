import React from "react";
import { useLoaderData } from "react-router";

const ApplyJob = () => {
  const job = useLoaderData();

  const { title, company, company_logo, hr_email } = job;

  const handleApply = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const linkedin = form.linkedin.value;
    const resume = form.resume.value;

    const application = {
      name,
      email,
      linkedin,
      resume,
      job_title: title,
      company,
      hr_email,
    };

    console.log(application);

    fetch("http://localhost:5000/job-applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(application),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Application Submitted Successfully");
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
