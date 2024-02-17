import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DNA } from "react-loader-spinner";
import Jobs from "./Jobs";

const MyJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  //pagination
  const [currentPage, setcurrentPage] = useState(1);
  const itemsPerPage = 4;

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get("http://localhost:3000/guru@gmail.com");
      setJobs(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const lastIndex = startIndex + itemsPerPage;
  const currentJobs = jobs.slice(startIndex, lastIndex);

  const nextPage = () => {
    if (lastIndex < jobs.length) {
      setcurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (startIndex > 0) {
      setcurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    if (searchText.length === 0) {
      fetchData();
    } else {
      const filterData = jobs.filter((job) =>
        job.jobTitle.toLowerCase().includes(searchText.toLowerCase())
      );
      setJobs(filterData);
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/${id}`);
      alert("Job Deleted Successfully");
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className="my-jobs-container">
        <h1 className="text-center p-4">All My Jobs</h1>
        <div className="search-box p-2 text-center mb-2">
          <input
            onChange={(e) => setsearchText(e.target.value)}
            type="text"
            name="search"
            id="search"
            value={searchText}
            className="py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full"
          />
          <button
            onClick={handleSearch}
            className="bg-blue text-white font-semibold px-8 py-2 rounded-sm mb-4"
          >
            Search
          </button>
        </div>
      </div>

      <section className="py-1 bg-blueGray-50">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-blueGray-700">
                    All Jobs
                  </h3>
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <Link
                    to="/post-job"
                    className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    POST A NEW JOB
                  </Link>
                </div>
              </div>
            </div>

            <div className="block w-full overflow-x-auto">
              {isLoading ? (
                <>
                  <div className="absolute left-[50%] top-40">
                    <DNA
                      visible={true}
                      height="80"
                      width="80"
                      ariaLabel="dna-loading"
                      wrapperStyle={{}}
                      wrapperClass="dna-wrapper"
                    />
                  </div>
                </>
              ) : (
                <></>
              )}
              <table className="items-center bg-transparent w-full border-collapse relative">
                <thead>
                  <tr>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      No.
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      TITLE
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      COMPANY NAME
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      SALARY
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      EDIT
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      DELETE
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentJobs.map((job, index) => (
                    <tr key={job._id}>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                        {index + 1}
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                        {job.jobTitle}
                      </td>
                      <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {job.companyName}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {`$${job.minPrice}-$${job.maxPrice}`}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <button>
                          <Link to={`/edit-job/${job._id}`}>Edit</Link>
                        </button>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <button
                          onClick={() => handleDelete(job._id)}
                          className="bg-red-700 py-2 px-6 text-white rounded-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex justify-center text-black space-x-8">
          {lastIndex < jobs.length && (
            <button onClick={nextPage} className="hover:underline">
              Next
            </button>
          )}
          {currentPage > 1 && (
            <button onClick={prevPage} className="hover:underline">
              Previous
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default MyJobs;
