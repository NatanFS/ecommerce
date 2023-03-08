import React from "react";
import { useState } from "react";

const AdicionarProdutoForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    descricao: "",
    preco: "",
    imagem: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to API or store it in state, etc.
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "image" ? files[0] : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Adicionar Produto</h2>
      <div className="mb-4">
        <label htmlFor="nome" className="block font-medium mb-2">
          Nome
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="descricao" className="block font-medium mb-2">
          Descricao
        </label>
        <textarea
          id="descdription"
          name="descricao"
          value={formData.descricao}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="preco" className="block font-medium mb-2">
          Preço
        </label>
        <input
          type="number"
          id="preco"
          name="preco"
          value={formData.preco}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="imagem" className="block font-medium mb-2">
          Imagem
        </label>
        <input
          type="file"
          id="imagem"
          name="imagem"
          accept="image/*"
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
      >
        Adicionar Produto
      </button>
    </form>
  );
};

export default AdicionarProdutoForm;
