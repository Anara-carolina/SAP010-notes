import React, { useContext } from "react";
import paper from "../../assets/papel.png";
import google from "../../assets/icon-google.png";
import { AuthGoogleContext } from "../../../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function LoginPage() {
    const { signInWithGoogle, signed } = useContext(AuthGoogleContext);

    const signInClick = async (e) => {
        e.preventDefault();
        await signInWithGoogle();
    };

    if (!signed) {
        return (
            <div className="LoginPage">
                <picture className="Login">
                    <img src={paper} alt="Ícone de Papel" />
                </picture>
                <div>
                    <h1 className="blocoText">SEU BLOCO DE </h1>
                    <h2 className="blocoText"> Notas </h2>
                </div>
                <form className="formulario">
                    <p className="textGoogle">Faça o login para começar a fazer suas anotações</p>
                    <button className="googleBtn" onClick={signInClick}>
                        <img src={google} alt="Ícone do Google" />
                    </button>
                </form>
            </div>
        );
    }
    return <Navigate to="/" />;
}
