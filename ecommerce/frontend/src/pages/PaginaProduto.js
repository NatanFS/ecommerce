import React from 'react';
import Layout from './Layout';

const PaginaProduto = () => {
  return (
    <Layout>
        <div className="container mx-auto">
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="md:w-1/2">
          <img
            className="w-full object-cover object-center"
            src="https://images-na.ssl-images-amazon.com/images/I/51bnrgemNdL._AC_UL675_SR675,480_.jpg"
            alt="Product"
          />
        </div>
        <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
          <h1 className="text-3xl font-bold mb-2">Nome do produto</h1>
          {/* <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
            <FontAwesomeIcon icon={faStar} className="text-gray-400 mr-1" />
            <span className="text-gray-600">4.0 (50)</span>
          </div> */}
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            fermentum lacus sed nulla dictum, ut pulvinar felis tempus.
            Curabitur in dapibus ante.
          </p>
          <div className="flex items-center mb-4">
            <span className="text-gray-600 text-lg font-bold mr-2">R$ 100,00</span>
            <span className="text-sm text-gray-400 line-through">R$ 120,00</span>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Adicionar ao carrinho
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full ml-2">
            {/* <FontAwesomeIcon icon={faHeart} className="mr-1" /> */}
            Favoritar   
          </button>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default PaginaProduto;
