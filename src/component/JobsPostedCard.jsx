import React, { use } from "react";

const JobsPostedCard = ({ JobsApi }) => {
  const jobs = use(JobsApi);
  console.log(jobs);
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6">
        You Posted: {jobs.length} Jobs
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div key={job._id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              {/* Company */}
              <div className="flex items-center gap-3 mb-3">
                <img src={job.company_logo} alt="" className="w-10 h-10" />
                <div>
                  <h3 className="font-bold">{job.company}</h3>
                  <p className="text-sm text-gray-500">{job.location}</p>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold">{job.title}</h2>

              {/* Type & Category */}
              <div className="flex gap-2 mt-2">
                <span className="badge badge-outline">{job.jobType}</span>
                <span className="badge badge-outline">{job.category}</span>
              </div>

              {/* Salary */}
              <p className="mt-2 text-sm text-gray-600">
                Salary: {job.salaryRange?.min} - {job.salaryRange?.max}{" "}
                {job.salaryRange?.currency}
              </p>

              {/* Deadline */}
              <p className="text-sm text-red-500">
                Deadline: {job.applicationDeadline}
              </p>

              {/* Buttons */}
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-sm btn-info">View</button>
                <button className="btn btn-sm btn-warning">Edit</button>
                <button className="btn btn-sm btn-error">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsPostedCard;
