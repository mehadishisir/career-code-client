import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const job = useLoaderData();

  const {
    title,
    company,
    company_logo,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    requirements,
    responsibilities,
    hr_name,
    hr_email,
    _id,
  } = job;

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src={company_logo}
          alt={company}
          className="w-16 h-16 object-contain"
        />
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-gray-500">{company}</p>
        </div>
      </div>

      {/* Job Info */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="card bg-base-100 shadow">
          <div className="card-body space-y-2">
            <p>
              📍 <strong>Location:</strong> {location}
            </p>
            <p>
              💼 <strong>Job Type:</strong> {jobType}
            </p>
            <p>
              🏷 <strong>Category:</strong> {category}
            </p>
            <p>
              ⏰ <strong>Deadline:</strong> {applicationDeadline}
            </p>
            <p>
              💰 <strong>Salary:</strong> {salaryRange?.min} -{" "}
              {salaryRange?.max} {salaryRange?.currency?.toUpperCase()}
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="text-xl font-semibold mb-2">HR Contact</h2>
            <p>
              <strong>Name:</strong> {hr_name}
            </p>
            <p>
              <strong>Email:</strong> {hr_email}
            </p>

            <Link to={`/jobApply/${_id}`}>
              <button className="btn btn-primary mt-4">Apply Now</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Job Description</h2>
        <p className="text-gray-600">{description}</p>
      </div>

      {/* Requirements */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Requirements</h2>
        <div className="flex flex-wrap gap-2">
          {requirements?.map((skill, index) => (
            <span key={index} className="badge badge-outline">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Responsibilities */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">Responsibilities</h2>
        <ul className="list-disc ml-6 space-y-1 text-gray-600">
          {responsibilities?.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobDetails;
