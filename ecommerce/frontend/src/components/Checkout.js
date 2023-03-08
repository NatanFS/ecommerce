import React, { useState } from "react";
import Carrinho from "./Carrinho";

const Checkout = ({ items, updateItemQuantity }) => {
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
            <Carrinho items={items} updateItemQuantity={updateItemQuantity} />
            <div className="flex justify-end mt-4">
                <button
                    onClick={() => setShowModal(true)}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                >
                    Checkout
                </button>
            </div>
            {showModal && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
                    <div className="bg-white p-6 rounded c">
                        <h2 className="text-lg font-medium mb-4">Checkout</h2>
                        <div className="mb-4">
                            <label className="blocktext-gray-700 font-medium mb-2" htmlFor="name">Name:</label>
                            <input
                                className="w-full border border-gray-400 p-2 rounded-md"
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email:</label>
                            <input
                                className="w-full border border-gray-400 p-2 rounded-md"
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="cardNumber">Card Number:</label>
                            <input
                                className="w-full border border-gray-400 p-2 rounded-md"
                                type="text"
                                id="cardNumber"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="cardExpMonth">Expiration Month:</label>
                            <input
                                className="w-full border border-gray-400 p-2 rounded-md"
                                type="text"
                                id="cardExpMonth"
                                value={cardExpMonth}
                                onChange={(e) => setCardExpMonth(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="cardExpYear">Expiration Year:</label>
                            <input
                                className="w-full border border-gray-400 p-2 rounded-md"
                                type="text"
                                id="cardExpYear"
                                value={cardExpYear}
                                onChange={(e) => setCardExpYear(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="cardCvv">CVV:</label>
                            <input
                                className="w-full border border-gray-400 p-2 rounded-md"
                                type="text"
                                id="cardCvv"
                                value={cardCvv}
                                onChange={(e) => setCardCvv(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                onClick={handleCheckout}
                                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Checkout;




