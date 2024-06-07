import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar.jsx";
// // import Home from "./pages/Home.jsx";

// import Footer from "./components/Footer.jsx";
// import Careers from "./pages/Careers.jsx";
// import Press from "./pages/Press.jsx";
// import Brand from "./pages/Brand.jsx";
// import Transparency from "./pages/Transparency.jsx";
import Register from "./pages/Register.jsx";
// import Login from "./pages/Login.jsx";
import axios from "axios";
import { Toaster } from "react-hot-toast";
// import Register from "./pages/Register.jsx";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;
function App() {
  return (
    <>
    <Register />
      {/* <Navbar /> */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 2000,
        }}
      />
      {/* <Routes>
       <Route path="/" element={<Register />} />
     
       
       <Route path="/brand" element={<Brand />} />
       <Route path="/press" element={<Press />} />
       <Route path="/careers" element={<Careers />} />
       <Route path="/transparency" element={<Transparency />} />
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/home" element={<Home />} /> */}
       
      {/* </Routes>
      <Footer /> */} 
    </>
  );
}

export default App;
