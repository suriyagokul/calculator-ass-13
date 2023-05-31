import React from 'react'
import { useState } from 'react'

export default function Counter() {
  const [numbers, setNumbers] = useState("");
  
  const handleNumber = (e) => {
    setNumbers(numbers+e.target.value)
  }

  const doOperation = () => {
    console.log(numbers)
    setNumbers(eval(numbers));
  }

  const handleReset = () => {
    setNumbers("")
  }

  return (
    <div className='flex flex-col items-center justify-center h-[100vh] bg-stone-500'>
       <div className='mb-10 ml-60'>
        <h1 className='text-4xl text-white font-medium'>{numbers}</h1>
      </div>
       <div className='grid grid-cols-4 gap-3 place-items-center'>
        <div><button className='bg-zinc-400 text-black text-2xl px-4 py-2 rounded-full text-center hover:bg-zinc-500' onClick={handleReset}>C</button></div>
        <div><button className='bg-zinc-400 text-black text-2xl px-4 py-2 rounded-full text-center  hover:bg-zinc-500'>+/-</button></div>
        <div><button className='bg-zinc-400 text-black text-2xl px-4 py-2 rounded-full text-center  hover:bg-zinc-500'>%</button></div>
        <div><button className={`bg-yellow-500 text-white text-2xl px-4 py-2 rounded-full text-center hover:bg-yellow-600`} value="/" onClick={handleNumber}>÷</button></div>
        <div><button onClick={handleNumber} value={7} className='bg-[#505050] text-white text-2xl px-5 py-3 rounded-full text-center hover:bg-[#405051]'>7</button></div>
        <div><button onClick={handleNumber} value={8} className='bg-[#505050] text-white text-2xl px-5 py-3 rounded-full text-center hover:bg-[#405051]'>8</button></div>
        <div><button onClick={handleNumber} value={9} className='bg-[#505050] text-white text-2xl px-5 py-3 rounded-full text-center hover:bg-[#405051]'>9</button></div>
        <div><button className={`bg-yellow-500 text-white text-2xl px-4 py-2 rounded-full text-center hover:bg-yellow-600`} value="*" onClick={handleNumber}>×</button></div>
        <div><button onClick={handleNumber} value={4} className='bg-[#505050] text-white text-2xl px-5 py-3 rounded-full text-center hover:bg-[#405051]'>4</button></div>
        <div><button onClick={handleNumber}  value={5} className='bg-[#505050] text-white text-2xl px-5 py-3 rounded-full text-center hover:bg-[#405051]'>5</button></div>
        <div><button onClick={handleNumber} value={6} className='bg-[#505050] text-white text-2xl px-5 py-3 rounded-full text-center hover:bg-[#405051]'>6</button></div>
        <div><button className={`bg-yellow-500 text-white text-2xl px-4 py-2 rounded-full text-center hover:bg-yellow-600`} value="-" onClick={handleNumber}>-</button></div>
        <div><button onClick={handleNumber} value={1} className='bg-[#505050] text-white text-2xl px-5 py-3 rounded-full text-center hover:bg-[#405051]'>1</button></div>
        <div><button onClick={handleNumber} value={2} className='bg-[#505050] text-white text-2xl px-5 py-3 rounded-full text-center hover:bg-[#405051]'>2</button></div>
        <div><button onClick={handleNumber} value={3} className='bg-[#505050] text-white text-2xl px-5 py-3 rounded-full text-center hover:bg-[#405051]'>3</button></div>
        <div><button onClick={handleNumber} className={`bg-yellow-500 text-white text-2xl px-4 py-2 rounded-full text-center hover:bg-yellow-600`} value="+">+</button></div>
        <div className='col-start-1 col-end-3'><button onClick={handleNumber} value={0} className='bg-[#505050] text-white text-2xl pr-20 pl-7 py-3 rounded-full text-left hover:bg-[#405051]'>0</button></div>
        <div className='col-span-1 '><button className='bg-[#505050] text-white text-2xl px-5 py-3 rounded-full text-center hover:bg-[#405051]'>.</button></div>
        <div className='col-span-1 '><button className='bg-yellow-500 text-white text-2xl px-4 py-2 rounded-full text-center hover:bg-yellow-600' onClick={doOperation}>=</button></div>
       </div>
    </div>
  )
}
