import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RootRoutes from "./routes/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RootRoutes />
  </StrictMode>,
);
