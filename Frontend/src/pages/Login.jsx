// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import LoginCSS from  "../assets/styles/Login.module.css";
// import { MdEmail } from "react-icons/md";
// import { FaLock } from "react-icons/fa";

// function Login() {
//   const url = "http://localhost:8000";
//   const navigate = useNavigate();
//   const [data, setData] = useState({
//     email: "",
//     password: "",
//   });

//   const loginUser = async (e) => {
//     e.preventDefault();
//     const { email, password } = data;
//     try {
//       const response = await axios.post(
//         `${url}/api/login`,
//         {
//           email,
//           password,
//         },
//         { withCredentials: true }
//       );
//       if (response.status === 200) {
//         setData({ email: "", password: "" });
//         toast.success("Login Successful. Welcome!");
        
//         if(response.data.role === 'admin'){
//           navigate("/admin/dashboard");
//         }
//         else{
//         navigate("/post");
//         }
        
//       } else if (response.data.error) {
//         toast.error(response.data.error);
//       } else {
//         toast.error("An error occurred. Please try again.");
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className={LoginCSS.background}>
//     <div className={LoginCSS.info}>
//       <div className={LoginCSS.form_box}>
//         <form onSubmit={loginUser}>
//           <h1>Login</h1>
//           <div className={LoginCSS.input_box}>
//             <input
//               className={LoginCSS.input}
//               type="email"
//               placeholder="Email"
//               value={data.email}
//               onChange={(e) => setData({ ...data, email: e.target.value })}
//             />
//             <MdEmail className={LoginCSS.icon} />
//           </div>

//           <div className={LoginCSS.input_box}>
//             <input
//             className={LoginCSS.input}
//               type="password"
//               placeholder="Password"
//               value={data.password}
//               onChange={(e) => setData({ ...data, password: e.target.value })}
//             />
//             <FaLock className={LoginCSS.icon} />
//           </div>
//           <div className={LoginCSS.remember_forgot}>
//             <label>
            
//               <input type="checkbox" className={LoginCSS.input} />
//               Remember password
//             </label>
//             <a href="#">Forgot password?</a>
//           </div>
//           <button type="submit"className={LoginCSS.button}> Login</button>
//           <div className={LoginCSS.register}>
//             <p>
//               Don't have an account?<Link to="/"> Register</Link>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default Login;
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import LoginCSS from "../assets/styles/Login.module.css";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

function Login() {
  const url = "http://localhost:8000";
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const response = await axios.post(
        `${url}/api/login`, // Fixed template string
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      console.log("Login response:", response); // Debug log

      if (response.status === 200) {
        setData({ email: "", password: "" });
        toast.success("Login Successful. Welcome!");

        const userRole = response.data.data.role; // Ensure this matches your backend response

        if (userRole === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/post");
        }
      } else if (response.data.error) {
        toast.error(response.data.error);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } catch (error) {
      console.log("Login error:", error); // Debug log
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className={LoginCSS.background}>
      <div className={LoginCSS.info}>
        <div className={LoginCSS.form_box}>
          <form onSubmit={loginUser}>
            <h1>Login</h1>
            <div className={LoginCSS.input_box}>
              <input
                className={LoginCSS.input}
                type="email"
                placeholder="Email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
              <MdEmail className={LoginCSS.icon} />
            </div>

            <div className={LoginCSS.input_box}>
              <input
                className={LoginCSS.input}
                type="password"
                placeholder="Password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
              <FaLock className={LoginCSS.icon} />
            </div>
            <div className={LoginCSS.remember_forgot}>
              <label>
                <input type="checkbox" className={LoginCSS.input} />
                Remember password
              </label>
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit" className={LoginCSS.button}>Login</button>
            <div className={LoginCSS.register}>
              <p>
                Don't have an account?<Link to="/"> Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

