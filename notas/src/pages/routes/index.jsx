import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../login/index";
import Note from "../note/notePage";
import Notas from "../note/notas";
import { AuthGoogleContext } from "../../../context/AuthContext";
import { useContext } from "react";

function PrivateRoute({ children }) {
  const { signed } = useContext(AuthGoogleContext);
  return signed ? children : <Navigate to="/" />;
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/notas" element={<PrivateRoute>
          <>
            <Note />
            <Notas />
          </>
        </PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}
