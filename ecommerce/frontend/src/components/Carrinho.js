import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
const Carrinho = (props) => {
    return (
        <div className="bg-gray-100 p-4">
            {props.items.map((item) => (
                <div key={item.produto.id} className="flex items-center justify-between my-2">
                    <div className="flex items-center">
                        <img src={item.produto.imagem} alt={item.produto.nome} className="h-16 w-16 mr-4" />
                        <div>
                            <p className="font-medium">{item.produto.nome}</p>
                            <p className="text-gray-600">{item.produto.preco}</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between my-2 gap-2">
                        <div >
                            <input
                                type="number"
                                value={item.quantidade}
                                onChange={(e) => updateItemQuantity(item.id, parseInt(e.target.value))}
                                className="w-16 h-10 text-center bg-gray-200"
                            />
                        </div>
                        <DeleteIcon className="text-red-500" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Carrinho;