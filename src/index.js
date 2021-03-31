import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import DogProvider from "./context/DogContext";
import ErrorBoundery from "./components/ErrorBoundery/ErrorBoundery";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <DogProvider>
        <ErrorBoundery>
          <App />
        </ErrorBoundery>
      </DogProvider>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
