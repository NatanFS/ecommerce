import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { api } from "../services/autenticacao";

const ListaProdutos = () => {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    api.get('/produtos')
      .then(response => setProdutos(response.data))
      .catch(error => {
        console.error(error);
      });
  }, []);

  const adicionarCarrinho = (produto) => {
    api.post('/carrinho/adicionar/', { produto: produto.id })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <>
      <div className="grid grid-cols-2  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {produtos.map((produto) => (
          <div key={produto.id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <Link to={`/produto/${produto.id}`}>
                <img src={produto.imagem} alt={produto.name} className="w-full h-48 object-contain" />
                <div className="p-4">
                    <h2 className="font-bold text-lg mb-2">{produto.nome}</h2>
                    <p className="text-gray-700 text-base truncate line-clamp-3">{produto.descricao}</p>
                    <p className="font-bold text-lg mt-2">{produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                </div>
            </Link>
            <div className="flex justify-between items-center px-3 py-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded" onClick={() => adicionarCarrinho(produto)}>
                Adicionar ao carrinho
                </button>
                {/* <div className="pr-2">
                    {produto.favorito && <FavoriteIcon className="text-red-600"/>}
                    {!produto.favorito && <FavoriteBorderIcon className="text-red-600" />}
                </div> */}
            </div>
            </div>
        
      ))}
    </div>
    </>
  );
};

export default ListaProdutos;