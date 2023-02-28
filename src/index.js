import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Payment from "./Components/PricingPlan/components/Payment";
//import CounterInput from 'react-bootstrap-personalized-counter';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/subscriptions" element={<Payment />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
