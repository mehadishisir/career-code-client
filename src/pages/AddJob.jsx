import axios from "axios";
import Swal from "sweetalert2";

const AddJob = () => {
  const handleAddJob = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const { min, max, currency, responsibilities, requirements, ...newdata } =
      data;
    newdata.salaryRange = { min, max, currency };
    newdata.responsibilities = responsibilities.split(",").map((r) => r.trim());
    newdata.requirements = requirements.split(",").map((req) => req.trim());
    console.log(newdata);
  };

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Add Job</h2>

      <form onSubmit={handleAddJob} className="grid md:grid-cols-2 gap-4">
        <input
          name="title"
          placeholder="Job Title"
          className="input input-bordered w-full"
        />

        <input
          name="company"
          placeholder="Company Name"
          className="input input-bordered w-full"
        />

        <input
          name="company_logo"
          placeholder="Company Logo URL"
          className="input input-bordered w-full"
        />

        <select name="location" className="select select-bordered w-full">
          <option>Dhaka</option>
          <option>Uttara, Dhaka</option>
          <option>Chittagong</option>
          <option>Remote</option>
        </select>

        <select name="jobType" className="select select-bordered w-full">
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Contractual</option>
          <option>Remote</option>
        </select>

        <select name="category" className="select select-bordered w-full">
          <option>Engineering</option>
          <option>Marketing</option>
          <option>Design</option>
          <option>Management</option>
        </select>

        <input
          type="date"
          name="applicationDeadline"
          className="input input-bordered w-full"
        />

        <input
          name="min"
          type="number"
          placeholder="Salary Min"
          className="input input-bordered w-full"
        />

        <input
          name="max"
          type="number"
          placeholder="Salary Max"
          className="input input-bordered w-full"
        />

        <select name="currency" className="select select-bordered w-full">
          <option>BDT</option>
          <option>USD</option>
        </select>

        <input
          name="hr_name"
          placeholder="HR Name"
          className="input input-bordered w-full"
        />

        <input
          name="hr_email"
          placeholder="HR Email"
          className="input input-bordered w-full"
        />

        <textarea
          name="description"
          placeholder="Job Description"
          className="textarea textarea-bordered md:col-span-2"
        />

        <input
          name="requirements"
          placeholder="Requirements (comma separated)"
          className="input input-bordered md:col-span-2"
        />

        <input
          name="responsibilities"
          placeholder="Responsibilities (comma separated)"
          className="input input-bordered md:col-span-2"
        />

        <button className="btn btn-primary md:col-span-2">Add Job</button>
      </form>
    </div>
  );
};

export default AddJob;
