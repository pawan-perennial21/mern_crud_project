import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/ContextProvider.tsx";


ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
).render(
    <UserProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </UserProvider>
);
