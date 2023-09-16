import React from "react";
import ReactDOM from "react-dom";
import { AuthGoogleProvider } from "./../context/AuthContext"; // Importe o componente AuthGoogleProvider


export default function App() {
    return (
    <AuthGoogleProvider>
    <AppRoutes />
    </AuthGoogleProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));