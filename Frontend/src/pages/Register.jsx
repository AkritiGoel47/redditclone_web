import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate,Link } from "react-router-dom";
import  RegisterCSS from "../assets/styles/Register.module.css";
import { FaUser,FaLock  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";




function Register() {
  const url = "http://localhost:8000";
  const navigate = useNavigate();
  const [data, setData] = useState({ name: "", email: "", password: "" });

  
  const registerUser = async (e) => {
    e.preventDefault();

    const { name, email, password } = data;
    try {
      const response = await axios.post(
        `${url}/api/register`, 
        {
          name,
          email,
          password,
        },
        { withCredentials: true } 
      );
      console.log(response);
      if (response.status === 200) {
        setData({ name: "", email: "", password: "" });
        toast.success("Registration Successful. Welcome!");
        navigate("/post")
        
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
    <div className={RegisterCSS.background}>
    <div className={RegisterCSS.info}>   
    
      <div className={RegisterCSS.form_box }>
      
      <form onSubmit={registerUser}>
        <h1>Register</h1>
      <div className={RegisterCSS.input_box}>
        <input
          className={RegisterCSS.input}
          type="text"
          placeholder="Username"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}

        />
        <FaUser className={RegisterCSS.icon}/>
        </div>
       <div className={RegisterCSS.input_box}>
        <input
          className={RegisterCSS.input}
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <MdEmail className={RegisterCSS.icon}/>
        </div>
        <div className={RegisterCSS.input_box}>
        <input
        className={RegisterCSS.input}
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <FaLock className={RegisterCSS.icon} />
        </div>
        <div className={RegisterCSS.remember_forgot}>
         <label> <input className={RegisterCSS.input} type="checkbox" />I agree to the terms and conditions</label>
         
          </div>
       
        <button type="submit"className={RegisterCSS.button}>Register</button>
        <div className={RegisterCSS.login}>
          <p>Already Registered?<Link to="/login">Login</Link> </p>
       
          
          </div>


      </form>
      </div>
    </div>
    </div>
    
   
  );

  
}

export default Register;
