import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className='w-full flex justify-evenly items-center p-4'>
        <a href='https://vitejs.dev' target='_blank'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </header>
      <main className='w-full'>
        <h1 className='w-fit m-auto'>Vite + React</h1>

        <button
          className='border border-slate-900 m-auto hover:border-indigo-500 transition p-2 rounded'
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </main>
    </>
  );
}

export default App;
