import { useState } from 'react';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header'
import './index.css';

function App(){
  const [isSiderbarOpen, setIsSidebarOpen] = useState(true);

  const toggleSlider = () => {
    setIsSidebarOpen(!isSiderbarOpen)
  }
  return (
    <div className='flex bg-gray-50 min-h-screen font-sans'>
      <Sidebar isOpen={isSiderbarOpen}/>

      <div className='flex-1 flex flex-col'>
        <Header toggleSlider={toggleSlider}/>

        <main className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">Welcome back!</h1>
          <p className="mt-2 text-gray-600">Your tasks will appear here.</p>
        </main>
      </div>
    </div>
  )
}

export default App;