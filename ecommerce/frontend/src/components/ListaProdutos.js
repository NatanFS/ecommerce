import React from "react";
import { Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const produtos = [
  {
    id: 1,
    nome: "Produto 1",
    descricao: "Descrição do produto 1",
    preco: 10,
    imagem: "https://images-na.ssl-images-amazon.com/images/I/51bnrgemNdL._AC_UL675_SR675,480_.jpg",
    favorito: true
  },
  {
    id: 2,
    nome: "Produto 2",
    descricao: "Descrição do produto 2",
    preco: 20,
    imagem: "https://images-na.ssl-images-amazon.com/images/I/71R73h01XHL._AC_UL675_SR675,480_.jpg",
    favorito: false
  },
  {
    id: 3,
    nome: "Produto 3",
    descricao: "Descrição do produto 3",
    preco: 30,
    imagem: "https://images-na.ssl-images-amazon.com/images/I/81wfdDTIjHS._AC_UL200_SR200,200_.jpg",
    favorito: false
  },
  {
    id: 4,
    nome: "Produto 4",
    descricao: "Descrição do produto 4",
    preco: 40,
    imagem: "https://images-na.ssl-images-amazon.com/images/I/61AdMYuh4fL._AC_UL320_SR320,320_.jpg",
    favorito: false
  },
  {
    id: 5,
    nome: "Produto 5",
    descricao: "Descrição do produto 5",
    preco: 50,
    imagem: "https://imgnike-a.akamaihd.net/1024x1024/016737IM.jpg",
    favorito: false
  },
  {
    id: 6,
    nome: "Produto 6",
    descricao: "Descrição do produto 6",
    preco: 60,
    imagem: "https://m.media-amazon.com/images/I/71SCp57uORL._AC_SX679_.jpg",
    favorito: false
  },
  {
    id: 7,
    nome: "Produto 7",
    descricao: "Descrição do produto 7",
    preco: 70,
    imagem: "https://images-na.ssl-images-amazon.com/images/I/61JeAzjO4QL._AC_UL320_SR320,320_.jpg",
    favorito: false
  },
  {
    id: 8,
    nome: "Produto 8",
    descricao: "Descrição do produto 8",
    preco: 80,
    imagem: "https://images-na.ssl-images-amazon.com/images/I/61Z-BF8Od7L._AC_UL320_SR320,320_.jpg",
    favorito: false
  },
];

const ListaProdutos = () => {
  return (
    <>
    <div className="grid grid-cols-2  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {produtos.map((produto) => (
        <Link to={`/produto/${produto.id}`}>
            <div key={produto.id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={produto.imagem} alt={produto.name} className="w-full h-48 object-contain" />
            <div className="p-4">
                <h2 className="font-bold text-lg mb-2">{produto.nome}</h2>
                <p className="text-gray-700 text-base">{produto.descricao}</p>
                <p className="font-bold text-lg mt-2">{produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            </div>
            <div className="flex justify-between items-center px-3 py-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Adicionar ao carrinho
                </button>
                <div className="pr-2">
                    {produto.favorito && <FavoriteIcon className="text-red-600"/>}
                    {!produto.favorito && <FavoriteBorderIcon className="text-red-600" />}
                </div>
            </div>
            </div>
        </Link>
      ))}
    </div>
    </>
  );
};

export default ListaProdutos;