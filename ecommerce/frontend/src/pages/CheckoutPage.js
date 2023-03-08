import React from "react";
import Checkout from "../components/Checkout";
import Layout from "./Layout";

function CheckoutPage() {
    return (
        <div>
            <Layout>
                <h2 className="text-2xl font-bold mb-4">Checkout</h2>
                <Checkout/>
            </Layout>
        </div>
    );
  }
  
export default CheckoutPage;