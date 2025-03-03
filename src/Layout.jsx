import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from "./App";
import injectContext from "./Store/AppContext";

//Este es el componente que estará envuelto por el contexto, gracias a injextContext
const Layout = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="*" element={<h1>No encontrado</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default injectContext(Layout);