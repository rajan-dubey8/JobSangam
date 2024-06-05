import React, { useState } from "react";
import { FaMicrosoft, FaApple } from "react-icons/fa";
import { SiTesla } from "react-icons/si";
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Ensure to bind modal to your app root

const PopularCompanies = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "Redwood City, CA 94065, United Kingdoms",
      openPositions: 10,
      icon: <FaMicrosoft />,
      link: "https://www.microsoft.com",
      logo: "https://logo.clearbit.com/microsoft.com",
    },
    {
      id: 2,
      title: "Tesla",
      location: "Street 10 Bangalore, India",
      openPositions: 5,
      icon: <SiTesla />,
      link: "https://www.tesla.com",
      logo: "https://logo.clearbit.com/tesla.com",
    },
    {
      id: 3,
      title: "Apple",
      location: "Building 3,Main Street, Pune, India",
      openPositions: 20,
      icon: <FaApple />,
      link: "https://www.apple.com",
      logo: "https://logo.clearbit.com/apple.com",
    },
    {
      id: 4,
      title: "Oracle",
      location: "Parkway Mountain View, CA 94043 ,United States",
      openPositions: 10,
      icon: <img src="https://logo.clearbit.com/oracle.com" alt="Oracle" style={{ width: "24px", height: "24px" }} />,
      link: "https://www.oracle.com",
      logo: "https://logo.clearbit.com/oracle.com",
    },
    {
      id: 5,
      title: "NVIDIA",
      location: "Santa Clara, CA 95051, England",
      openPositions: 5,
      icon: <img src="https://logo.clearbit.com/nvidia.com" alt="NVIDIA" style={{ width: "24px", height: "24px" }} />,
      link: "https://www.nvidia.com",
      logo: "https://logo.clearbit.com/nvidia.com",
    },
    {
      id: 6,
      title: "Intel",
      location: "West Tasman Drive, Japan",
      openPositions: 20,
      icon: <img src="https://logo.clearbit.com/intel.com" alt="Intel" style={{ width: "24px", height: "24px" }} />,
      link: "https://www.intel.com",
      logo: "https://logo.clearbit.com/intel.com",
    },
  ];

  const openModal = (company) => {
    setSelectedCompany(company);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedCompany(null);
  };

  return (
    <div className="companies">
      <div className="container">
        <h3>TOP COMPANIES</h3>
        <div className="banner">
          {companies.map((company) => (
            <div className="card" key={company.id} onClick={() => openModal(company)}>
              <div className="content">
                <div className="icon">{company.icon}</div>
                <div className="text">
                  <p>{company.title}</p>
                  <p>{company.location}</p>
                </div>
              </div>
              <button onClick={(e) => { e.stopPropagation(); window.open(company.link, "_blank"); }}>
                Open Positions {company.openPositions}
              </button>
            </div>
          ))}
        </div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="ReactModal__Content" overlayClassName="ReactModal__Overlay">
          {selectedCompany && (
            <div>
              <button className="close-button" onClick={closeModal}>&times;</button>
              <img src={selectedCompany.logo} alt={`${selectedCompany.title} logo`} className="company-logo" />
              <h2>{selectedCompany.title}</h2>
              <p>{selectedCompany.location}</p>
              <p>Open Positions: {selectedCompany.openPositions}</p>
              <a href={selectedCompany.link} target="_blank" rel="noopener noreferrer">
                Visit Company Website
              </a>
              <button onClick={closeModal}>Close</button>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default PopularCompanies;
