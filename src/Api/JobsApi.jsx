const JobsApi = (email) => {
  return fetch(`http://localhost:5000/jobs?email=${email}`).then((res) =>
    res.json(),
  );
};

export default JobsApi;
