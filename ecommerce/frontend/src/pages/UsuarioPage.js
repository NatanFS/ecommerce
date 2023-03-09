import React, { useEffect, useState } from 'react';
import { api, useAuth } from '../services/autenticacao';
import Layout from './Layout';

function PerfilUsuarioPage({ }) {
    const { authenticated, user, logout } = useAuth();
    const [usuario, setUsuario] = useState(user);
    const [compras, setCompras] = useState([]);

    useEffect(() => {
        if (authenticated && user) {
            api.get('/usuario')
                .then(response => setUsuario(response.data))
                .catch(error => {
                    console.error(error);
                });
            api.get('/pedidos/lista')
                .then(response => {
                    setCompras(response.data);
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [authenticated, user]);

    console.log(compras)

    return (
        <Layout>
            {usuario && (
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
                                {user && user.is_staff && (
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">Tipo de usuário</dt>
                                        <dd className="mt-1 text-sm text-gray-900">Gerente</dd>
                                    </div>
                                )}
                            </dl>
                        </div>
                    </div>
                    {compras && (
                        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                            <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                                <div className="px-4 py-5 sm:p-6">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Histórico de compras</h3>
                                    <ul className="divide-y divide-gray-200">
                                        {compras.map((compra) => (
                                            <li key={compra.id} className="py-4 sm:py-5">
                                                {compra.itens.map((item) => (
                                                    <>
                                                        <div key={item.id} className="flex justify-between">
                                                            <div className="text-sm font-medium text-gray-900">{item.produto.nome}</div>
                                                            <div className="text-sm text-gray-500">{new Date(compra.data_pedido).toLocaleDateString()}</div>
                                                        </div>
                                                        <div className="mt-1 text-sm text-gray-600 truncate line-clamp-2">{item.produto.descricao}</div>
                                                        <div className="mt-1 text-sm text-gray-600">{item.quantidade} x {item.produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
                                                    </>
                                                ))}
                                                <div>Valor total: {compra.valor_total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
                                                <hr />

                                            </li>

                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </Layout>
    );
}

export default PerfilUsuarioPage;
