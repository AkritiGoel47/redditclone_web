import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import "../assets/styles/Login.css";
import { MdEmail } from "react-icons/md";
import { FaLock  } from "react-icons/fa";


function Login() {

  const url = "http://localhost:8000";
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async(e) => {
    e.preventDefault();
    const {  email, password } = data;
    try {
      const response = await axios.post(
        `${url}/api/login`, 
        {
          
          email,
          password,
        },
        { withCredentials: true } 
      );
      if (response.status === 200) {
        setData({  email: "", password: "" });
        toast.success("Login Successful. Welcome!");
        
      } else if (response.data.error) {
        toast.error(response.data.error);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="info"> 
    <div className="form-box login">
      <form onSubmit={loginUser}>

        <h1>Login</h1>
      <div className="input-box">
       
        <input
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <MdEmail className="icon"/>
        </div>

      <div className="input-box">
        
        <input
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
         <FaLock className="icon" />
        </div>
        <div className="remember-forgot">
         <label> <input type="checkbox" />Remember password</label>
          <a href="#">Forgot password?</a>
          </div>
        <button type="submit"> Login</button>
        <div className="register">
          <p>Don't have an account?<Link to="/register"> Register</Link></p>
       
          
          </div>
      </form>
    </div>
    </div>
  );
}

export default Login;
