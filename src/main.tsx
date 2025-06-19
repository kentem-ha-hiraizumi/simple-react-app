import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./pages/App/App.tsx";

// biome-ignore lint/style/noNonNullAssertion: React公式のため
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
