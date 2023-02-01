import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery'

$(document).ready(function () {
  $(window).scroll(function (e) {
    let windowTop = $(this).scrollTop();
    $(".link-area a").each(function (event) {
      if (windowTop >= $($(this).attr("href")).offset().top - 100) {
        // Remove 'active' from previously highlighted menu items
        $(".link-area .active").removeClass("active");

        // Highlight the current menu item by adding 'active' class
        $(this).addClass("active");
      }
    });
  });
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
