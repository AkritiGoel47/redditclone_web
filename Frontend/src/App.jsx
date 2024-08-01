// import "./App.css";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
import { Toaster } from "react-hot-toast";


axios.defaults.baseURL = "https://redditclone-web-backend.onrender.com";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
    

      <Outlet />

      <Toaster
        position="top-center"
        toastOptions={{
          duration: 1000,
        }}
      />
    </>
  );
}

export default App