import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How JobSangam Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
                By creating an account, you gain access to a vibrant community where individuals
                 and businesses come together to achieve their goals <br /> <br />
                Join JobSangam Today and Let Your Career Journey Begin!
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
                 Whether you're looking for skilled professionals for your projects or seeking exciting job opportunities, 
                 JobSangam provides a diverse pool of talent and opportunities tailored to your needs.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
                 Post job listings and reach a wide audience of qualified candidates. Describe your requirements, 
                 and let JobSangam help you find the perfect match.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
