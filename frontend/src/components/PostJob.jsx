import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";

function PostJob() {
  const navigate = useNavigate();
  const [title, setTitle] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [salary, setSalary] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleCancel = () => {
    navigate("/");
  };

  const handlePost = (e) => {
    e.preventDefault();
    const postData = async () => {
      try {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${Cookies.get("token")}`
          },
          body: JSON.stringify({
            title,
            company,
            location,
            salary,
            description
          }),
        };
        const response = await fetch(
          "https://job-web-application-ktk3.onrender.com/api/jobs/",
          options
        );
        const data = await response.json();

        if (response.ok) {
          toast.success("Job Posted Successfully!"); // show toast only if successful
          console.log("Success:", data);
        } else {
          toast.error(data.message || "Failed to post job"); // error toast
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("Something went wrong!");
      }
    };
    postData();
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <div className="inline-block p-3 bg-blue-600 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900">
            Post a New Job
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Find the perfect candidate for your open position
          </p>
        </div>

        <form className="mt-10 space-y-8" onSubmit={handlePost}>
          <div className="bg-white shadow sm:rounded-lg p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Basic Information
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              {/* Job Title Input */}
              <div className="sm:col-span-1">
                <div>
                  <label
                    htmlFor="jobTitle"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Job Title *
                  </label>
                  <div className="mt-1">
                    <input
                      onChange={(e) => setTitle(e.target.value)}
                      value={title}
                      type="text"
                      name="jobTitle"
                      id="jobTitle"
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="e.g. Senior Frontend Developer"
                    />
                  </div>
                </div>
              </div>

              {/* Company Name Input */}
              <div className="sm:col-span-1">
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Company Name *
                  </label>
                  <div className="mt-1">
                    <input
                      onChange={(e) => setCompany(e.target.value)}
                      value={company}
                      type="text"
                      name="companyName"
                      id="companyName"
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="e.g. TechCorp Inc."
                    />
                  </div>
                </div>
              </div>

              {/* Location Input */}
              <div className="sm:col-span-1">
                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Location *
                  </label>
                  <div className="mt-1">
                    <input
                      onChange={(e) => setLocation(e.target.value)}
                      value={location}
                      type="text"
                      name="location"
                      id="location"
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="e.g. San Francisco, CA or Remote"
                    />
                  </div>
                </div>
              </div>

              {/* Salary Range Input */}
              <div className="sm:col-span-1">
                <div>
                  <label
                    htmlFor="salary"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Salary Range{" "}
                    <span className="text-gray-500">(Optional)</span>
                  </label>
                  <div className="mt-1">
                    <input
                      onChange={(e) => setSalary(e.target.value)}
                      value={salary}
                      type="text"
                      name="salary"
                      id="salary"
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="e.g. $80,000 - $120,000"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow sm:rounded-lg p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Job Description
            </h3>
            <div className="mt-6 space-y-6">
              {/* Job Description Textarea */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Job Description *
                </label>
                <div className="mt-1">
                  <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    id="description"
                    name="description"
                    rows={4}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Describe the role, responsibilities, and what makes this position exciting..."
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-5">
            <button
              type="button"
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostJob;
