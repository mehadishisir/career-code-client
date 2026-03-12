import React from "react";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    title,
    company,
    company_logo,
    location,
    jobType,
    salaryRange,
    applicationDeadline,
    _id,
  } = job;

  return (
    <div className="card bg-base-100 shadow-xl border">
      <div className="card-body">
        {/* company info */}
        <div className="flex items-center gap-4">
          <img
            src={company_logo}
            alt={company}
            className="w-12 h-12 object-contain"
          />
          <div>
            <h2 className="card-title">{title}</h2>
            <p className="text-sm text-gray-500">{company}</p>
          </div>
        </div>

        {/* job info */}
        <div className="mt-2 space-y-1 text-sm">
          <p>📍 {location}</p>
          <p>💼 {jobType}</p>
          <p>
            💰 {salaryRange?.min} - {salaryRange?.max}{" "}
            {salaryRange?.currency?.toUpperCase()}
          </p>
          <p>⏰ Deadline: {applicationDeadline}</p>
        </div>

        {/* buttons */}
        <div className="card-actions justify-end mt-4">
          <Link to={`/jobs/${_id}`} className="btn btn-outline btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
