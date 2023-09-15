import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import LoginPage from "../login/index";
import { AuthGoogleContext } from "../../../context/AuthContext";
import { useContext } from "react";
import Note from "../noteHome/note";

function PrivateRoute({children}) {
    const { signed } = useContext(AuthGoogleContext);
    return signed ? children : <Navigate to="/" />;
}

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/note" element={<PrivateRoute><Note /></PrivateRoute>} />
            </Routes>
        </BrowserRouter>
    );
}