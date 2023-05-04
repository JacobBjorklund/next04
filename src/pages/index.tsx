import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import { log } from 'console'

export default function Home() {
  const [number, setNumber] = useState(0)
  const [answear, setAnswear] = useState('Här syns ditt svar')
  function check() {
    if (number == 0) {
      setAnswear('Detta är noll')
    }
    if (number < 0) {
      setAnswear('detta är negativ')
    }
    else if (number > 0) {
      setAnswear('Detta är positiv');
    }
  }

  return (
    <div className='bg-gray-500 h-screen flex items-center justify-center flex-col gap-3'>
      <h1 className='text-start'>Skriv ett tal</h1>
      <input onChange={({ target }) => setNumber((target.value) as any)} className='p-1 rounded text-black' type="number" placeholder='Write a number' />
      <button onClick={() => check()} className='bg-green-400 p-2 rounded'>Check</button>
      <div className='mt-10'>
        <h1 className={`${answear == 'Detta är noll' ? 'text-blue-400' : ''} ${answear == 'detta är negativ' ? 'text-red-400' : ''} ${answear == 'Detta är positiv' ? 'text-green-400' : ''}`}>{answear}</h1>
      </div>
    </div >
  )
}
