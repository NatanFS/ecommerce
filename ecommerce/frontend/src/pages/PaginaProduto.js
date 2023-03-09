import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import { useParams } from "react-router-dom"
import { api } from '../services/autenticacao';

const PaginaProduto = () => {
    const [produto, setProduto] = useState(null);
    const { id } = useParams()
    useEffect(() => {
        api.get(`/produtos/${id}`)
            .then(response => setProduto(response.data))
            .catch(error => {
              console.error(error);
            });
      }, []);

    if (!produto) {
        return <Layout><div>Carregando...</div></Layout>
    }
    return (
        <Layout>
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row md:items-center">
                    <div className="md:w-1/2">
                        <img
                            className="object-contain object-center w-[600] h-[400] "
                            src={produto.imagem}
                            alt="Product"
                        />
                    </div>
                    <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
                        <h1 className="text-3xl font-bold mb-2">{produto.nome}</h1>
                        <p className="mb-4">
                            {produto.descricao}
                        </p>
                        <div className="flex items-center mb-4">
                            <span className="text-gray-600 text-lg font-bold mr-2">{produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                            <span className="text-sm text-gray-400 line-through">{(produto.preco + produto.preco*1.1).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            Adicionar ao carrinho
                        </button>
                        {/* <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full ml-2">
                            Favoritar
                        </button> */}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default PaginaProduto;
