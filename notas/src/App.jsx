// App.jsx
import React from "react";
import ReactDOM from "react-dom";
import { AuthGoogleProvider } from "../context/AuthContext";
import AppRoutes from "./AppRoutes"; // Importe seus componentes de rota

export default function App() {
    return (
        <AuthGoogleProvider>
            <AppRoutes />
        </AuthGoogleProvider>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
