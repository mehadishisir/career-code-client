import React, { Suspense, useContext } from "react";
import JobsPostedCard from "../component/JobsPostedCard";
import JobsApi from "../Api/JobsApi";
import { AuthContext } from "../context/AuthContext";

const MyPostedJob = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>Your Jobs</h1>
      <div>
        <Suspense fallback={"jobs loAding...................."}>
          <JobsPostedCard JobsApi={JobsApi(user.email)}></JobsPostedCard>
        </Suspense>
      </div>
    </div>
  );
};

export default MyPostedJob;
