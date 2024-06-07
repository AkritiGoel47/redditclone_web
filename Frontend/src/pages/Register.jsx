import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate,Link } from "react-router-dom";
import "../assets/styles/Register.css";


function Register() {
  const url = "http://localhost:8000";
  const navigate = useNavigate();
  const [data, setData] = useState({ name: "", email: "", password: "" });

  const registerUser = async (e) => {
    e.preventDefault();

    const { name, email, password } = data;
    try {
      const response = await axios.post(
        `${url}/register`, 
        {
          name,
          email,
          password,
        },
        { withCredentials: true } 
      );

      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        setData({ name: "", email: "", password: "" });
        toast.success("Registration Successful. Welcome!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="info">
      <Toaster />
      <form onSubmit={registerUser}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Username"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <div className="remember-forgot">
          <button type="checkbox">Remember me</button>
          <a href="#">Forgot password?</a>
          </div>
       
        <button type="submit">Submit</button>
        <div className="login">
          <p>Already Registered?</p><Link to="/login">Login</Link>
          
          </div>


      </form>
    </div>
  );
}

export default Register;
