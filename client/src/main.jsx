import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/global.css";
import { AuthProvider } from "./context/AuthProvider";
import { AppProvider } from "./context/AppProvider";
import { CarritoProvider } from "./context/CarritoContext";


createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <AuthProvider>
            <AppProvider>
                <CarritoProvider>
                  <App />
                  </CarritoProvider>
            </AppProvider>
        </AuthProvider>
    </BrowserRouter>
);