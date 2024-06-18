import React from 'react';
import Segmentacao from './components/Segmentacao';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-white p-4 text-white">
      </header>
      <main className="container mx-auto mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Criar Campanha Manual</h1>
        <ul className="flex justify-between mb-6">
          <li className="flex-1 text-center text-blue-500 font-semibold">1. Segmentação</li>
          <li className="flex-1 text-center">2. Email</li>
          <li className="flex-1 text-center">3. Assunto</li>
          <li className="flex-1 text-center">4. Agendar</li>
        </ul>
        <Segmentacao />
      </main>
    </div>
  );
}

export default (App);
