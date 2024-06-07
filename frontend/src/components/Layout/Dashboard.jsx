
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Context } from "../../main";
import Loading from "../Layout/Loading"; // Ensure this path is correct
// import "./Dashboard.css"; // Import the CSS file

const Dashboard = () => {
  const { user } = useContext(Context);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(true); // Initialize loading state to true

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await axios.get(
          "https://jobsangam.onrender.com/api/v1/user/getuser",
          {
            withCredentials: true,
          }
        );
        setUserInfo(res.data.user);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // Set loading to false after the API call completes
      }
    };

    fetchUserInfo();
  }, []);

  if (loading) {
    return <Loading show={loading} />; // Show the loading spinner if loading
  }

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="profile">
        <h2>{userInfo.name}</h2>
        <p>Email: {userInfo.email}</p>
        <p>Phone: {userInfo.phone}</p>
      </div>
    </div>
  );
};

export default Dashboard;
