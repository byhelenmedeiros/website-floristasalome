import React from 'react';
import produtos from './Produtos.json';


const Products = () => {
  return (
    <div>
      <h2>Produtos</h2>
      
      {produtos.produtos.map((produto) => (
        <div key={produto.id}>
          <h3>{produto.nome}</h3>
          <p>{produto.descricao}</p>
          <p>Preço: {produto.preco.valor} {produto.preco.moeda}</p>
          <img src={produto.imagem} alt={produto.nome} />
        </div>
      ))}
    </div>
  );
};

export default Products;
