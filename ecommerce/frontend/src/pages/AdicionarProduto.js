import React, { useEffect } from "react";
import AdicionarProdutoForm from "../components/AdicionarProdutoForm";
import { useAuth } from "../services/autenticacao";
import Layout from "./Layout";

function AdicionarProdutoPage() {
    const { authenticated, user, logout } = useAuth();

    if (!authenticated) {
        return (<Layout><div>Faça login para visualizar essa página</div></Layout>)
    } else if (!user.is_staff){
        (<Layout><div>Você não tem permissão para ver essa página.</div></Layout>)
    }

    return (
        <div>
            <Layout>
                <AdicionarProdutoForm/>
            </Layout>
        </div>
    );
  }
  
export default AdicionarProdutoPage;