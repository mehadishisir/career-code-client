import { useContext, useEffect, useState } from "react";

import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const MyApplications = () => {
  const { user } = useContext(AuthContext);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/applications?email=${user.email}`)
      .then((res) => {
        setApplications(res.data);
      });
  }, [user.email]);

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6">My Applications</h2>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Job Title</th>
              <th>Company</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {applications.map((app, index) => (
              <tr key={app._id}>
                <th>{index + 1}</th>
                <td>{app.job_title}</td>
                <td>{app.company}</td>
                <td>{app.applicant_email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplications;
