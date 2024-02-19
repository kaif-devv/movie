import React from 'react'
import { useParams } from 'react-router-dom';
import { DATA } from '../Data/data';
import { useNavigate } from 'react-router-dom'
function Summary() {
  const { name } = useParams();
  const item = DATA.find(item => item.show.name === name);
  const navigate = useNavigate()
  function handleBack() {
    navigate('/movie')
  }
  function handleBook() {
    navigate(`/movie/form/${item.show.name}`)
  }

  return (
    <>
      <div className='h-screen w-screen flex flex-col justify-center items-center gap-5'>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ">
          <div className="md:flex">
            {item.show.image ? <>
              <div className="md:flex-shrink-0">
                <img className=" w-full object-cover md:w-48" src={item.show.image.original } alt="Movie poster" />
              </div>
            </> : <div className="md:flex-shrink-0">
              <img className=" w-full object-cover md:w-48" src='https://previews.123rf.com/images/ansonrf123/ansonrf1231811/ansonrf123181100507/113533779-404-error-page-not-found-vector.jpg' alt="Movie poster" />
            </div>}

            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Movie name</div>
              <h1 className="block mt-1 text-lg leading-tight font-medium text-black">{item.show.name}</h1>
              <p className="mt-2 text-gray-500"> {item.show.summary} </p>
            </div>
          </div>
        </div>
        <div className='flex flex-row w-[40vw] justify-between'>
          <button onClick={handleBack} className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Go Back</button>
          <button onClick={handleBook} className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Book Ticket</button>
        </div>
      </div>
    </>
  )
}

export default Summary
