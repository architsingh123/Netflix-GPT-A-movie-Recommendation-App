import React from 'react'
import { IMG_CDN } from '../utils/constants'
function MovieCard({posterPath}) {
  if(!posterPath) return null;
  return (
    <div className='w-36 md:w-44 pr-6 shadow-lg '>
      <img 
      className="rounded-lg"
      alt="moviecard"
      src={IMG_CDN+posterPath}/>
    </div>
  )
}

export default MovieCard
