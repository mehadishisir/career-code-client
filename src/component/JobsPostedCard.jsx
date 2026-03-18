import React, { use } from "react";

const JobsPostedCard = ({ JobsApi }) => {
  const jobs = use(JobsApi);
  console.log(jobs);
  return <div>you posted:{jobs.length}</div>;
};

export default JobsPostedCard;
