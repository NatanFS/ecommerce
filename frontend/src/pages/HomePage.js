import React from "react";
import ListaProdutos from "../components/ListaProdutos";
import Layout from "./Layout";

function HomePage() {
    return (
        <div>
            <Layout>
                <ListaProdutos/>
            </Layout>
        </div>
    );
  }
  
export default HomePage;