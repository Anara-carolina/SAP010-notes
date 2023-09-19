import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../src/lib/firebase-config";
import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const provider = new GoogleAuthProvider();

export const AuthGoogleContext = createContext({});

export default function AuthGoogleProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loadStorageAuth = () => {
            const sessionToken = sessionStorage.getItem("@AuthFirebase:token");
            const sessionUser = sessionStorage.getItem("@AuthFirebase:user");
            if (sessionToken && sessionUser) {
                setUser(sessionUser);
            }
        };
        loadStorageAuth();
    }, []);

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = JSON.stringify(result.user);
            setUser(user);
            sessionStorage.setItem("@AuthFirebase:token", token);
            sessionStorage.setItem("@AuthFirebase:user", user);
        } catch (error) {
            console.error("Erro ao fazer login com o Google:", error);
        }
    };

    function signOut() {
        sessionStorage.clear();
        setUser(null);

        return <Navigate to="/" />;
    }

    return (
        <AuthGoogleContext.Provider value={{ signInWithGoogle, signed: !!user, user, signOut }}>
            {children}
        </AuthGoogleContext.Provider>
    );
}
