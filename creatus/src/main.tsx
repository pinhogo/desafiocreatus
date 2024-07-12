import React from "react";
import ReactDOM from "react-dom/client";
import Rigthd from "./components/login/rigthd.tsx";
import "./index.css";
import Leftd from "./components/login/leftd.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="flex flex-row">
      <Leftd />
      <Rigthd />
    </div>
  </React.StrictMode>
);
