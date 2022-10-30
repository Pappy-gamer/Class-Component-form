import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import Form from "./Form";
import HowItWorks from "./HowItWorks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/howitworks" element={<HowItWorks />} />
      </Routes>
      {/* <Form /> */}
    </Router>
  </React.StrictMode>
);
