import React from 'react';
import Layout from './Layout';

function PerfilUsuarioPage({ }) {
    const usuario = {
        nome: "Natan",
        email: "natanlipf@gmail.com",
    }

    const compras = [
        {
            id: 1,
            nome: "Apple iPhone 12 Pro Max",
            descricao: "128GB, Pacific Blue",
            data: "2022-01-01"
        },
        {
            id: 2,
            nome: "Samsung Galaxy S21 Ultra",
            descricao: "256GB, Phantom Black",
            data: "2022-02-15"
        },
        {
            id: 3,
            nome: "Sony PlayStation 5",
            descricao: "Digital Edition",
            data: "2022-03-03"
        }
    ]

    return (
        <Layout>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Dados do usuário</h3>
                        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Nome</dt>
                                <dd className="mt-1 text-sm text-gray-900">{usuario.nome}</dd>
                            </div>
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">E-mail</dt>
                                <dd className="mt-1 text-sm text-gray-900">{usuario.email}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Order History</h3>
                            <ul className="divide-y divide-gray-200">
                                {compras.map((compra) => (
                                    <li key={compra.id} className="py-4 sm:py-5">
                                        <div className="flex justify-between">
                                            <div className="text-sm font-medium text-gray-900">{compra.nome}</div>
                                            <div className="text-sm text-gray-500">{compra.data}</div>
                                        </div>
                                        <div className="mt-1 text-sm text-gray-600">{compra.descricao}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default PerfilUsuarioPage;
