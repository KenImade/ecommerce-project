import React from "react";
import "./ErrorPage.css";
import errorImg from "./assets/error.jpg";

export default function ErrorPage({error}) {
    return (
        <div className="error-page">
            <h1 className="text">Oops...the following error occurred:</h1>
            <p>{error}</p>
            <div className="error-page-img">
                <img src={errorImg} alt="error" />
            </div>
        </div>
    )
}