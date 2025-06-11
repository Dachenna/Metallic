import React from 'react';
import { BrowserRouter } from 'react-router';
import Layout from './components/Layout/Layout';

function App() {

  return (
    <BrowserRouter>
      <main className="scroll text-white w-full h-full absolute">
        <Layout />
      </main>
    </BrowserRouter>

  )
}

export default App
