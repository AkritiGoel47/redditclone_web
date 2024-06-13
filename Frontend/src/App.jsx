import "./App.css";


import Register from "./pages/Register.jsx";

import axios from "axios";
import { Toaster } from "react-hot-toast";


axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;
function App() {
  return (
    <>
    
    <Register />
     
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
        }}
      />
      
    </>
  );
}

export default App;
