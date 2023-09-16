import React, { useContext } from "react";
import { AuthGoogleContext } from "../../../context/AuthContext";
import { Navigate } from "react-router-dom";
import "./LoginPage.css";
import paper from "../../assets/papel.png";
import papel from "../../assets/papel1.png";
import google from "../../assets/icon-google.png";
import stickers from "../../assets/stickers.png";
import sticker from "../../assets/sticker.png";
import flor from "../../assets/icon-flor.png";

export default function LoginPage() {
    const { signInWithGoogle, signed } = useContext(AuthGoogleContext);

    const signInClick = async (e) => {
        e.preventDefault();
        await signInWithGoogle();
    };

    if (!signed) {
        return (
            <div className="LoginPage">
                <div class="imagensLogin">
                    <picture>
                        <img src={paper} class="papel" alt="Papel" />
                        <img src={papel} class="paper" alt="Papel" />

                        <img src={stickers} class="adesivo" alt="adesivos" />

                    </picture>
                    <picture> <img src={sticker} class="adesivo1" alt="adesivos" />
                    </picture>
                </div>
                <div class="textoLogin">
                    <form class="formulario">
                        <h1 class="blocoText">SEU BLOCO DE </h1>
                        <h2 class="notaText"> Notas </h2>
                        <img src={flor} class="flower" alt="icone de flor" />
                        <p className="textGoogle">Faça o login para começar a fazer suas anotações</p>
                        <button className="googleBtn" onClick={signInClick}>
                            <img src={google} class="imgGoogle" alt="Ícone do Google" />
                        </button>
                    </form>
                </div>

            </div>
        );
    }
    return <Navigate to="/" />;
}
