import React, { useState } from "react";


function CartaoCredito() {
  const [cartoes, setCartao] = useState([
    { id: 1, numero: "12093 12093 2319 4899", validade: "12/29", titular: "Natan Felipe de Freitas Souza", cvv: "201" },
    { id: 1, numero: "12093 12093 2319 4899", validade: "12/29", titular: "José Francisco de Almeida Machado", cvv: "201" },
  ]);
  const [selectedCartao, setSelectedCartao] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [newCartao, setNewCartao] = useState({
    numero: "",
    validade: "",
    titular: "",
    cvv: "",
  });

  const handleCartaoClick = (cartao) => {
    setSelectedCartao(cartao);
  };

  const handleAddCartao = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const id = cartoes.length + 1;
    setCartao([...cartoes, { id, ...newCartao }]);
    setNewCartao({ numero: "", validade: "", titular: "" });
    setShowForm(false);
  };

  return (
    <div className="flex-1 bg-gray-100">
      <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-4">Cartões</h2>
        <ul className="space-y-4">
          {cartoes.map((cartao) => (
            <li
              key={cartao.id}
              className="bg-white shadow-sm rounded-md px-4 py-3 cursor-pointer"
              onClick={() => handleCartaoClick(cartao)}
            >
              <div class="flex items-center mb-4">
                <div>
                  <input id="default-radio-1" type="radio" value="" name="default-radio" 
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 
                  dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 
                  dark:border-gray-600"/>
                </div>
                <div className="text-lg font-medium ml-2">
                  {cartao.numero}, {cartao.validade}, {cartao.titular},  {cartao.cvv}
                </div>
              </div>
              
            </li>
          ))}
        </ul>
        
        {!showForm && (
            <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mt-4"
            onClick={handleAddCartao}
          >
            Adicionar cartão
          </button>
        )}

        {showForm && (
            <button
            className="bg-white border border-blue-600 text-blue-600 py-2 px-4 rounded-md mt-4 "
            onClick={closeForm}
          >
            Voltar
          </button>
        )}
        
        {showForm && (
          <form onSubmit={handleFormSubmit} className="bg-white shadow-md rounded-md p-4 mt-4">
            <h3 className="text-lg font-bold mb-2">Novo cartão:</h3>
            <div className="space-y-4">
              <div> 
                <label className="block text-sm font-medium mb-1" htmlFor="numero">
                  Rua:
                </label>
                <input
                  className="border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border rounded-md"
                  type="text"
                  id="numero"
                  value={newCartao.numero}
                  onChange={(event) =>
                    setNewCartao({ ...newCartao, validade: event.target.value})}/>
                </div>
                </div>
          </form>
      )}
      </div>
    </div>
  );
}

export default CartaoCredito;
