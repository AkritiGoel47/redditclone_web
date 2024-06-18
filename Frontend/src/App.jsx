// import "./App.css";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
import { Toaster } from "react-hot-toast";


axios.defaults.baseURL = "http://localhost:8000";
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