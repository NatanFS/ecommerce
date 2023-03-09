import React, { useEffect, useState } from "react";
import { api } from "../services/autenticacao";
import Carrinho from "./Carrinho";
import CartaoCredito from "./CartaoCredito";
import Endereco from "./Endereco";

const Checkout = ({ }) => {

    const [itensCarrinho, setItens] = useState([])

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log("hello")
        console.log(token)
        api.get('/carrinho/lista')
            .then(response => {
                setItens(response.data)
                console.log(response.data)
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const confirmarCompra = () => {
        api.post('/pedido/realizar/')
            .then(response => {
                setItens(response.data)
                console.log(response.data)
            })
            .catch(error => {
                console.error(error);
            });
    }


    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            {/* <div className="flex items-center justify-between my-2 gap-2">
                <Endereco />
                <CartaoCredito />
            </div> */}
            <Carrinho items={itensCarrinho} />
            <div className="flex justify-between mt-4 gap-2">
                <div>
                    <p className="inline-block bold mr-2">Total:</p>
                    {itensCarrinho
                        ? itensCarrinho.reduce(
                            (total, item) => total + item.quantidade * item.produto.preco,
                            0
                        ).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                        : 0
                    }
                </div>
                <button
                    onClick={() => setShowModal(true)}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                    Comprar
                </button>
            </div>
            {showModal && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
                    <div className="w-[460px] bg-white p-6 rounded c">
                        <h2 className="text-lg font-medium mb-4">Confirmar compra</h2>
                        <p>Resumo do pedido: </p>
                        {itensCarrinho.map((item) => (
                            <div className="flex items-center justify-between">
                                <div>
                                    <p>{item.quantidade} x {item.produto.nome}</p>
                                </div>
                                <div>
                                    <p>{(item.produto.preco * item.quantidade).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                                </div>
                            </div>
                        ))}


                        <div className="flex items-center justify-between">
                            <p className="bold">Total: </p>
                            <p> {itensCarrinho.reduce((total, item) => total + (item.quantidade * item.produto.preco), 0)
                                .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                        </div>
                        <div className="flex justify-end gap-2 mt-3">
                            <button
                                onClick={() => { setShowModal(false) }}
                                className="bg-white border border-blue-600 text-blue-600 hover: py-2 px-4 rounded">
                                Voltar
                            </button>
                            <button
                                onClick={confirmarCompra}
                                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Checkout;




