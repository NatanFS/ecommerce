import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";

const RoutesComponent= () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = { <HomePage/> }/>
                <Route path="/checkout" element = { <CheckoutPage/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComponent;
