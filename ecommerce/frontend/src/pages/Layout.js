import React, { useEffect, useState } from "react";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { IconButton, Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { api, useAuth } from "../services/autenticacao";

function Layout(props) {
  const { authenticated, user, logout } = useAuth();

  const [itensCarrinho, setItens] = useState([])
  const [badgeContent, setbadgeContent] = useState(0)

    useEffect(() => {
        console.log(authenticated)
        if (authenticated){
          api.get('/carrinho/lista')
              .then(response => {
                  setItens(response.data)
                  console.log(response.data)
              })
              .catch(error => {
                  console.error(error);
              });
        }
    }, [authenticated]);
    
    useEffect(() => {
      setbadgeContent(itensCarrinho.length)
      console.log(itensCarrinho)
      console.log(itensCarrinho.length)
  }, [itensCarrinho]);

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link exact to="/">
            <p className="text-white text-xl font-bold">E-commerce</p>
          </Link>
          <div className="flex items-center">
            {/* <form action="#" className="relative">
              <input type="text" placeholder="Buscar produtos" className="bg-gray-700 py-2 px-3 rounded-full text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              <button type="submit" className="absolute inset-y-0 right-0 px-4 py-2 bg-blue-500 rounded-full text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l5.5 5.5" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 11a7 7 0 0114 0c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7a7 7 0 016.414 4.243" />
                </svg>
              </button>
            </form> */}
            <ul className="flex items-center">
              <Link exact to="/">
                <li className="ml-6"><a href="#" className="text-gray-300 hover:text-white">Início</a></li>
              </Link>

              {authenticated ? (
                <>
                  {user && user.is_staff && (
                    <Link to="/adicionar-produto">
                      <li className="ml-6"><a href="#" className="text-gray-300 hover:text-white">Cadastrar Produtos</a></li>
                    </Link>)}
                  <Link to="/perfil">
                    <li className="ml-6"><a href="#" className="text-gray-300 hover:text-white">Perfil</a></li>
                  </Link>
                  <li className="ml-6"><a href="#" onClick={logout} className="text-gray-300 hover:text-white">Sair</a></li>
                </>
              ) : (
                <>
                  <Link to="/cadastro">
                    <li className="ml-6"><a href="#" className="text-gray-300 hover:text-white">Cadastro</a></li>
                  </Link>
                  <Link to="/login">
                    <li className="ml-6"><a href="#" className="text-gray-300 hover:text-white">Login</a></li>
                  </Link>
                </>
              )}

              {(!user || !user.is_staff) && (
                <li className="ml-6">
                  <Link to="/checkout">
                    <IconButton aria-label="Carrinho de compras" color="primary">
                      <Badge badgeContent={badgeContent} color="secondary" className="text-blue-500">
                        <ShoppingCartIcon />
                      </Badge>
                    </IconButton>
                  </Link>
                </li>
              )}
            </ul>
          </div>

        </nav>
      </header>
      <main className="flex-1 container mx-auto py-8">
        {props.children}
      </main>
      <footer className="bg-gray-800 py-4">
        <p className="text-white text-center">&copy; E-commerce</p>
      </footer>
    </div>
  );
}

export default Layout;