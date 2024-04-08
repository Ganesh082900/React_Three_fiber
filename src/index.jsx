import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App";
import { GlobalProvider } from "./context/globalContext";

createRoot(document.getElementById("root")).render(
  <GlobalProvider>
    <App />
  </GlobalProvider>
  // <App />
);
