import React, { useState } from "react";


function Endereco() {
  const [enderecos, setEndereco] = useState([
    { id: 1, rua: "Capim Macio, 2041", cidade: "Natal", estado: "RN" },
    { id: 2, rua: "Lagoa Nova, 4245", cidade: "Natal", estado: "RN" },
  ]);
  const [selectedEndereco, setSelectedEndereco] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [newEndereco, setNewEndereco] = useState({
    rua: "",
    cidade: "",
    estado: "",
  });

  const handleEnderecoClick = (endereco) => {
    setSelectedEndereco(endereco);
  };

  const handleAddEndereco = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const id = enderecos.length + 1;
    setEndereco([...enderecos, { id, ...newEndereco }]);
    setNewEndereco({ rua: "", cidade: "", estado: "" });
    setShowForm(false);
  };

  const closeForm = () => {
    setShowForm(false);
  }

  return (
    <div className="flex-1 bg-gray-100">
      <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-4">Endereços</h2>
        <ul className="space-y-4">
          {enderecos.map((endereco) => (
            <li
              key={endereco.id}
              className="bg-white shadow-sm rounded-md px-4 py-3 cursor-pointer"
              onClick={() => handleEnderecoClick(endereco)}
            >
              <div class="flex items-center mb-4">
                <div>
                  <input id="default-radio-1" type="radio" value="" name="default-radio" 
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 
                  dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 
                  dark:border-gray-600"/>
                </div>
                <div className="text-lg font-medium ml-2">
                  {endereco.rua}, {endereco.cidade}, {endereco.estado}
                </div>
              </div>
              
            </li>
          ))}
        </ul>
        {!showForm && (
            <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mt-4"
            onClick={handleAddEndereco}
          >
            Adicionar endereço
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
            <h3 className="text-lg font-bold mb-2">Novo endereço:</h3>
            <div className="space-y-4">
              <div> 
                <label className="block text-sm font-medium mb-1" htmlFor="rua">
                  Rua:
                </label>
                <input
                  className="border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border rounded-md"
                  type="text"
                  id="rua"
                  value={newEndereco.rua}
                  onChange={(event) =>
                    setNewEndereco({ ...newEndereco, cidade: event.target.value})}/>
                </div>
                </div>
          </form>
      )}
      </div>
    </div>
  );
}

export default Endereco;
