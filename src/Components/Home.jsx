import React from 'react'
import axios from 'axios';
import Card from './Card';
import {DATA} from '../Data/data';
function Home() {
  return (
    <>
      <div className='flex justify-center flex-col items-center gap-5'>
        <h1 className='text-3xl'>MOVIES</h1>
        <div className='grid grid-cols-3 gap-5 '>
          {DATA.map((item)=>{
            return(
              <Card key={item.show.id} 
              name={item.show.name}
              language={item.show.language}
              type={item.show.type}
              genre={item.show.genres}
              premiered={item.show.premiered}
              image={item.show.image ? item.show.image.original : "https://previews.123rf.com/images/ansonrf123/ansonrf1231811/ansonrf123181100507/113533779-404-error-page-not-found-vector.jpg"}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Home