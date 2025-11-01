import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./RotatingBorder.scss";
import App from "./App.tsx";

// Immediately hide scrollbar on script load
document.documentElement.classList.add("no-scroll"); // Targets <html>

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);


// Hide preloader when everything is loaded
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add("hidden");
      document.documentElement.classList.remove("no-scroll");
    }, 5000);
  }
});
