import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdicionarProdutoPage from "./pages/AdicionarProduto";
import CadastroPage from "./pages/CadastroPage";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PaginaProduto from "./pages/PaginaProduto";
import PerfilUsuarioPage from "./pages/UsuarioPage";

const RoutesComponent= () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = { <HomePage/> }/>
                <Route path="/checkout" element = { <CheckoutPage/> }/>
                <Route path="/produto/:id" element = { <PaginaProduto/> }/>
                <Route path="/adicionar-produto" element = { <AdicionarProdutoPage/> }/>
                <Route path="/login" element = { <LoginPage/> }/>
                <Route path="/perfil" element = { <PerfilUsuarioPage/> }/>
                <Route path="/cadastro" element = { <CadastroPage/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComponent;
