import React from 'react'
import { useNavigate } from 'react-router-dom'
function Card(props) {
    const navigate = useNavigate()
    function handleClick(){
        navigate(`/internship/summary/${props.name}`)
    }
  return (
    <div className='flex gap-1  flex-col max-h-[95vh]  w-[20vw] border-gray-400 hover:shadow-2xl border-2 rounded-2xl overflow-hidden hover:scale-105 transition duration-180 ease-in-out'>
        <div className='flex items-center justify-center'>
            <img src={props.image} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        <div className='text-2xl font-bold flex justify-center items-center'>
            <h1>{props.name}</h1>
        </div>
        <div className='flex flex-col gap-1 px-2 items-center'>
            <h1>Language: &nbsp; {props.language}</h1>
            <h1>Type: &nbsp;{props.type} </h1>
            <h1>Genre:&nbsp;{props.genre} </h1>
            <h1>Premiered on:&nbsp;{props.premiered} </h1>
        </div>
        <div className='flex flex-row justify-center px-8'>
        <button type="button" onClick={handleClick} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Show Summary</button>
        </div>
    </div>
  )
}

export default Card