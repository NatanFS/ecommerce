import React from "react";
import Checkout from "../components/Checkout";
import Layout from "./Layout";
import { useAuth } from '../services/autenticacao';

function CheckoutPage() {
    const { authenticated, user, logout } = useAuth();

    if (!authenticated) {
        return (<Layout><div>Faça login para visualizar essa página</div></Layout>)
    }

    return (
        <div>
            <Layout>
                <h2 className="text-2xl font-bold mb-4">Checkout</h2>
                <Checkout />
            </Layout>
        </div>
    );
}

export default CheckoutPage;