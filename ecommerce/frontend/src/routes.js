import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdicionarProdutoForm from "./components/AdicionarProdutoForm";
import AdicionarProdutoPage from "./pages/AdicionarProduto";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";
import PaginaProduto from "./pages/PaginaProduto";

const RoutesComponent= () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = { <HomePage/> }/>
                <Route path="/checkout" element = { <CheckoutPage/> }/>
                <Route path="/produto/:id" element = { <PaginaProduto/> }/>
                <Route path="/adicionar-produto" element = { <AdicionarProdutoPage/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComponent;
