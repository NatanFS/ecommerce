import React, { useState } from "react";
import Carrinho from "./Carrinho";
import CartaoCredito from "./CartaoCredito";
import Endereco from "./Endereco";

const Checkout = ({  }) => {

    const produtos = [
        {
          produto: {
            id: 1,
            nome: "Produto 1",
            descricao: "Descrição do produto 1",
            preco: 10,
            imagem: "https://images-na.ssl-images-amazon.com/images/I/51bnrgemNdL._AC_UL675_SR675,480_.jpg",
          },
          quantidade: 1
        },
        {
          produto: {
            id: 2,
            nome: "Produto 2",
            descricao: "Descrição do produto 2",
            preco: 20,
            imagem: "https://images-na.ssl-images-amazon.com/images/I/71R73h01XHL._AC_UL675_SR675,480_.jpg",
            quantidade: 1
          },
          quantidade: 1
        },
        {
            produto: {
                id: 3,
                nome: "Produto 3",
                descricao: "Descrição do produto 3",
                preco: 30,
                imagem: "https://images-na.ssl-images-amazon.com/images/I/81wfdDTIjHS._AC_UL200_SR200,200_.jpg",
                quantidade: 1
            },
            quantidade: 1
        }
    ]

    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cardExpMonth, setCardExpMonth] = useState("");
    const [cardExpYear, setCardExpYear] = useState("");
    const [cardCvv, setCardCvv] = useState("");

    const handleCheckout = () => {
        // Aqui você pode adicionar a lógica para processar o pagamento e enviar o pedido
        console.log("Checkout complete!");
        // Redefinir o estado e fechar o modal
        setName("");
        setEmail("");
        setCardNumber("");
        setCardExpMonth("");
        setCardExpYear("");
        setCardCvv("");
        setShowModal(false);
    };

    return (
        <div>
            <div className="flex items-center justify-between my-2 gap-2">
                <Endereco/>
                <CartaoCredito/>
            </div>
            <Carrinho items={produtos} />
            <div className="flex justify-end mt-4">
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
                        <div className="flex items-center justify-between">
                            <div>
                                <p>1 x Produto 1</p>
                            </div>
                            <div>
                               <p>R$ 180,00</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="bold">Total: </p>
                            <p>R$ 180,00</p>
                        </div>
                        <div className="flex justify-end gap-2 mt-3">
                            <button
                                onClick={handleCheckout}
                                className="bg-white border border-blue-600 text-blue-600 hover: py-2 px-4 rounded">
                                Voltar
                            </button>
                            <button
                                onClick={handleCheckout}
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




