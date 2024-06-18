import React from 'react';

function PublicoItem({ publico }) {
  return (
    <div className="flex items-center justify-between p-4 border-b last:border-0">
      <div>
        <div className="font-semibold">{publico.nome}</div>
        <div className="text-sm text-gray-500">Qtde. Clientes: {publico.qtd}</div>
        <div className="text-sm text-gray-500">Data do upload: {publico.dataUpload}</div>
        <div className="text-sm text-gray-500">Feito por: {publico.feitoPor}</div>
      </div>
      <div className="flex space-x-2">
        
        <button className="text-blue-500 hover:text-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
           viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" 
           strokeWidth="2" 
           d="M13 16h-1v-4h-1v4h1v4h1v-4h-1v-4h1a1 1 0 000-2h-1V8a1 1 0 00-1-1h-1V6a1 1 0 
           00-1-1h-1v2h1a1 1 0 000-2h-1v4h1v4h-1a1 1 0 000 2h1v4m-1-6h1v4h-1a1 1 0 000-2h1m-1-2h1m-1-6v2h1a1 1 
           000-2h-1" />
          </svg>
        </button>
        <button className="text-red-500 hover:text-red-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default (PublicoItem);
