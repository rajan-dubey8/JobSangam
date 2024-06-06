import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../main";
import Loading from "../Layout/Loading"; // Ensure this path is correct
import Pagination from "./Pagination";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading state to true
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 12;
  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(
          "https://jobsangam.onrender.com/api/v1/job/getall",
          {
            withCredentials: true,
          }
        );
        setJobs(res.data.jobs);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); // Set loading to false after the API call completes
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    if (!isAuthorized) {
      navigateTo("/");
    }
  }, [isAuthorized, navigateTo]);

  if (loading) {
    return <Loading show={loading} />; // Show the loading spinner if loading
  }

  // Get current jobs
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="jobs page">
      <div className="container">
        <h1
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "2.5rem",
            color: "#333",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          All Available Jobs
        </h1>
        <div className="banner">
          {currentJobs.map((element) => {
            return (
              <div className="card" key={element._id}>
                <p className="job-title">{element.title}</p>
                <p className="job-category">{element.category}</p>
                <p className="job-country">{element.country}</p>
                <Link to={`/job/${element._id}`} className="job-details-link">
                  Job Details
                </Link>
              </div>
            );
          })}
        </div>
        <Pagination
          jobsPerPage={jobsPerPage}
          totalJobs={jobs.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
};

export default Jobs;
