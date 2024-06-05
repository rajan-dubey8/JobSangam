import React from "react";
import { useContext } from "react";
import { Context } from "../../main";
import { Navigate } from "react-router-dom";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import PopularCategories from "./PopularCategories";
import PopularCompanies from "./PopularCompanies";

const Home = () => {
  const { isAuthorized } = useContext(Context);
  if (!isAuthorized) {
    return <Navigate to={"/login"} />;
  }
  return (
    <>
      <section className="homePage page">
        <HeroSection />
        <HowItWorks />
        <PopularCategories />
        <PopularCompanies />
      </section>
    </>
  );
};

export default Home;

 

// applied preLoader 

// import React, { useContext, useEffect, useState } from "react";
// import { Context } from "../../main";
// import { Navigate } from "react-router-dom";
// import HeroSection from "./HeroSection";
// import HowItWorks from "./HowItWorks";
// import PopularCategories from "./PopularCategories";
// import PopularCompanies from "./PopularCompanies";
// import Loading from "../Layout/Loading";

// const Home = () => {
//   const { isAuthorized } = useContext(Context);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading time for demonstration purposes
//     const timer = setTimeout(() => setLoading(false), 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   if (!isAuthorized) {
//     return <Navigate to={"/login"} />;
//   }

//   return (
//     <>
//       <Loading show={loading} />
//       {!loading && (
//         <section className="homePage page">
//           <HeroSection />
//           <HowItWorks />
//           <PopularCategories />
//           <PopularCompanies />
//         </section>
//       )}
//     </>
//   );
// };

// export default Home;
