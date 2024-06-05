// import React, { useContext, useState } from "react";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { RiLock2Fill } from "react-icons/ri";
// import { Link, Navigate } from "react-router-dom";
// import { FaRegUser } from "react-icons/fa";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { Context } from "../../main";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("");
//   const [isHovered, setIsHovered] = useState(false); // State for hover effect

//   const { isAuthorized, setIsAuthorized } = useContext(Context);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(
//         "http://localhost:4000/api/v1/user/login",
//         { email, password, role },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );
//       toast.success(data.message);
//       setEmail("");
//       setPassword("");
//       setRole("");
//       setIsAuthorized(true);
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   if (isAuthorized) {
//     return <Navigate to={"/"} />;
//   }

//   return (
//     <>
//       <section className="authPage">
//         <div className="container">
//           <div className="header">
//             <img src="/JobZeelogo.png" alt="logo" />
//             <h3>Hello Again !!</h3>
//           </div>
//           <form>
//             <div className="inputTag">
//               <label>Login As</label>
//               <div>
//                 <select value={role} onChange={(e) => setRole(e.target.value)}>
//                   <option value="">Select Role</option>
//                   <option value="Manager">Manager</option>
//                   <option value="Job Striver">Job Striver</option>
//                 </select>
//                 <FaRegUser />
//               </div>
//             </div>
//             <div className="inputTag">
//               <label>Email Address</label>
//               <div>
//                 <input
//                   type="email"
//                   placeholder="abc@gmail.com"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   style={isHovered ? styles.hoveredInput : styles.input} // Apply inline style
//                   onMouseEnter={() => setIsHovered(true)} // Set isHovered to true on mouse enter
//                   onMouseLeave={() => setIsHovered(false)} // Set isHovered to false on mouse leave
//                 />
//                 <MdOutlineMailOutline />
//               </div>
//             </div>
//             <div className="inputTag">
//               <label>Password</label>
//               <div>
//                 <input
//                   type="password"
//                   placeholder="Your Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   style={isHovered ? styles.hoveredInput : styles.input} // Apply inline style
//                   onMouseEnter={() => setIsHovered(true)} // Set isHovered to true on mouse enter
//                   onMouseLeave={() => setIsHovered(false)} // Set isHovered to false on mouse leave
//                 />
//                 <RiLock2Fill />
//               </div>
//             </div>
//             <button type="submit" onClick={handleLogin} style={isHovered?styles.hoveredButton:styles.button}> {/* Apply inline style */}
//               Login
//             </button>
//             <Link to={"/register"}>Register Now</Link>
//           </form>
//         </div>
//         <div className="banner">
//           <img src="/login.png" alt="login" />
//         </div>
//       </section>
//     </>
//   );
// };

// // Define inline styles
// const styles = {
//   input: {
//     fontSize: '16px',
//     padding: '8px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     marginRight: '10px',
//   },
//   hoveredInput: {
//     fontSize: '16px',
//     padding: '8px',
//     border: '1px solid #0056b3', // Change border color on hover
//     borderRadius: '5px',
//     marginRight: '10px',
//   },
//   button: {
//     padding: '10px 20px',

//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s',
//   },
//   hoveredButton:{
//     padding: '10px 20px',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     border: '1px solid #0056b3',
//     transition: 'background-color 0.2s',
//   }
// };

// export default Login;




import React, { useContext, useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { Link, Navigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";
import Loading from "../Layout/Loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [isHovered, setIsHovered] = useState(false); // State for hover effect
  const [loading, setLoading] = useState(false);

  const { isAuthorized, setIsAuthorized } = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        { email, password, role },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setEmail("");
      setPassword("");
      setRole("");
      setIsAuthorized(true);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  if (isAuthorized) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <Loading show={loading} />
      <section className="authPage">
        <div className="container">
          <div className="header">
            <img src="/JobZeelogo.png" alt="logo" />
            <h3>Hello Again !!</h3>
          </div>
          <form>
            <div className="inputTag">
              <label>Login As</label>
              <div>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="">Select Role</option>
                  <option value="Manager">Manager</option>
                  <option value="Job Striver">Job Striver</option>
                </select>
                <FaRegUser />
              </div>
            </div>
            <div className="inputTag">
              <label>Email Address</label>
              <div>
                <input
                  type="email"
                  placeholder="abc@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={isHovered ? styles.hoveredInput : styles.input} // Apply inline style
                  onMouseEnter={() => setIsHovered(true)} // Set isHovered to true on mouse enter
                  onMouseLeave={() => setIsHovered(false)} // Set isHovered to false on mouse leave
                />
                <MdOutlineMailOutline />
              </div>
            </div>
            <div className="inputTag">
              <label>Password</label>
              <div>
                <input
                  type="password"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={isHovered ? styles.hoveredInput : styles.input} // Apply inline style
                  onMouseEnter={() => setIsHovered(true)} // Set isHovered to true on mouse enter
                  onMouseLeave={() => setIsHovered(false)} // Set isHovered to false on mouse leave
                />
                <RiLock2Fill />
              </div>
            </div>
            <button
              type="submit"
              onClick={handleLogin}
              style={isHovered ? styles.hoveredButton : styles.button}
            >
              {" "}
              {/* Apply inline style */}
              Login
            </button>
            <Link to={"/register"}>Register Now</Link>
          </form>
        </div>
        <div className="banner">
          <img src="/login.png" alt="login" />
        </div>
      </section>
    </>
  );
};

// Define inline styles
const styles = {
  input: {
    fontSize: "16px",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginRight: "10px",
  },
  hoveredInput: {
    fontSize: "16px",
    padding: "8px",
    border: "1px solid #0056b3", // Change border color on hover
    borderRadius: "5px",
    marginRight: "10px",
  },
  button: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  hoveredButton: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    border: "1px solid #0056b3",
    transition: "background-color 0.2s",
  },
};

export default Login;
