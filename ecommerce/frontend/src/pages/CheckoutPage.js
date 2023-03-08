import React from "react";
import Carrinho from "../components/Carrinho";
import Layout from "./Layout";

function CheckoutPage() {
    return (
        <div>
            <Layout>
                <h1>Checkout</h1>
                <Carrinho/>
            </Layout>
        </div>
    );
  }
  
export default CheckoutPage;