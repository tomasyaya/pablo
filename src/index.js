import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import DogProvider from "./context/DogContext";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <DogProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </DogProvider>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
