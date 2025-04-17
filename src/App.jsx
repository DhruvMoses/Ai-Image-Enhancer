import { useState } from 'react'
import Home from './components/Home'
import "tailwindcss";

function App() {

  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4'>

        <div className='text-center mb-8'>
          <h1 className='text-5xl font-bold text-gray-800 mb-2'>
            🤖 Ai Image Enhancer
          </h1>
          <p className='text-lg text-gray-500'>
            Upload Your Image and see the Magic Happen 🪄
          </p>
        </div>

        <Home/>

        <div className='text-ml text-gray-400 mt-3'>
          Powered By @DhruvMoses
        </div>

      </div>
    </>
  )
}

export default App
