import React from "react";

const Carrinho = () => {
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
  return (
    <div className="bg-gray-100 p-4">
      {produtos.map((item) => (
        <div key={item.produto.id} className="flex items-center justify-between my-2">
          <div className="flex items-center">
            <img src={item.produto.imagem} alt={item.produto.nome} className="h-16 w-16 mr-4" />
            <div>
              <p className="font-medium">{item.produto.nome}</p>
              <p className="text-gray-600">{item.produto.preco}</p>
            </div>
          </div>
          <div>
            <input
              type="number"
              value={item.quantidade}
              onChange={(e) => updateItemQuantity(item.id, parseInt(e.target.value))}
              className="w-16 h-10 text-center bg-gray-200"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carrinho;