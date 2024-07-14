import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/Login.tsx";
import "./index.css";
//import Leftd from "./components/login/leftd.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div>
      <Login />
    </div>
  </React.StrictMode>
);
