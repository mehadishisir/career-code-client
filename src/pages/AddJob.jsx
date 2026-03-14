import axios from "axios";
import Swal from "sweetalert2";

const AddJob = () => {
  const handleAddJob = (e) => {
    e.preventDefault();

    const form = e.target;

    const title = form.title.value;
    const company = form.company.value;
    const company_logo = form.logo.value;
    const location = form.location.value;
    const category = form.category.value;
    const jobType = form.jobType.value;
    const applicationDeadline = form.deadline.value;

    const salaryMin = form.min.value;
    const salaryMax = form.max.value;
    const currency = form.currency.value;

    const description = form.description.value;
    const hr_name = form.hr_name.value;
    const hr_email = form.hr_email.value;

    const newJob = {
      title,
      company,
      company_logo,
      location,
      category,
      jobType,
      applicationDeadline,
      salaryRange: {
        min: salaryMin,
        max: salaryMax,
        currency: currency,
      },
      description,
      hr_name,
      hr_email,
      status: "active",
    };

    axios
      .post("http://localhost:5000/jobs", newJob)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Job Added Successfully!",
            icon: "success",
          });
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Add New Job</h2>

      <form
        onSubmit={handleAddJob}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Job Title */}
        <input
          name="title"
          placeholder="Job Title"
          className="input input-bordered w-full"
          required
        />

        {/* Company Name */}
        <input
          name="company"
          placeholder="Company Name"
          className="input input-bordered w-full"
          required
        />

        {/* Company Logo */}
        <input
          name="logo"
          placeholder="Company Logo URL"
          className="input input-bordered w-full"
        />

        {/* Location */}
        <select name="location" className="select select-bordered w-full">
          <option value="">Select Location</option>
          <option>Dhaka</option>
          <option>Chittagong</option>
          <option>Sylhet</option>
          <option>Rajshahi</option>
          <option>Khulna</option>
          <option>Remote</option>
        </select>

        {/* Job Category */}
        <select name="category" className="select select-bordered w-full">
          <option value="">Select Category</option>
          <option>Engineering</option>
          <option>Design</option>
          <option>Marketing</option>
          <option>Management</option>
        </select>

        {/* Job Type */}
        <select name="jobType" className="select select-bordered w-full">
          <option value="">Job Type</option>
          <option>Remote</option>
          <option>Hybrid</option>
          <option>Onsite</option>
        </select>

        {/* Deadline */}
        <input
          type="date"
          name="deadline"
          className="input input-bordered w-full"
        />

        {/* Salary Min */}
        <input
          name="min"
          type="number"
          placeholder="Minimum Salary"
          className="input input-bordered w-full"
        />

        {/* Salary Max */}
        <input
          name="max"
          type="number"
          placeholder="Maximum Salary"
          className="input input-bordered w-full"
        />

        {/* Currency */}
        <select name="currency" className="select select-bordered w-full">
          <option value="BDT">BDT</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>

        {/* HR Name */}
        <input
          name="hr_name"
          placeholder="HR Name"
          className="input input-bordered w-full"
        />

        {/* HR Email */}
        <input
          name="hr_email"
          placeholder="HR Email"
          className="input input-bordered w-full"
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Job Description"
          className="textarea textarea-bordered md:col-span-2"
        ></textarea>

        {/* Button */}
        <button className="btn btn-primary md:col-span-2">Add Job</button>
      </form>
    </div>
  );
};

export default AddJob;
