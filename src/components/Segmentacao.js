import React from 'react';
import PublicoItem from './PublicoItem';

const publicos = [
  { nome: "Clientes compradores dia das mães 2014", qtd: 3098, dataUpload: "27/05/2024 às 22:11", feitoPor: "Emilia" },
  { nome: "Clientes Black Friday 2023", qtd: 5001, dataUpload: "23/11/2023 às 10:10", feitoPor: "Emilia" },
  { nome: "Clientes Dia dos Pais 2021", qtd: 2056, dataUpload: "10/06/2022 às 10:10", feitoPor: "Emilia" },
];

function Segmentacao() {
  return (
    <div>
      <input 
        type="text" 
        placeholder="Pesquisar público..." 
        className="w-full p-2 border rounded mb-4"
      />
      <div className="min-w-full bg-white rounded-lg shadow overflow-hidden">
        {publicos.map((publico, index) => (
          <PublicoItem key={index} publico={publico} />
        ))}
      </div>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Criar Público Personalizado</button>
    </div>
  );
}

export default (Segmentacao);
