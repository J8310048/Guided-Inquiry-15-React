import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// this locates the root in my html file
const rootElement = document.getElementById("root");

// this renders the app component on the browser
createRoot(rootElement).render(<App />);
