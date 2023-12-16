import React from 'react'
import { useSelector } from 'react-redux'
import Movielist from './Movielist';




function Gptsuggestion() {
  const {movieNames,movieResults}=useSelector((store)=> store.gpt);
if(!movieNames) return null;
  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-80'>
      {movieNames.map((movieName,index) =>(
      <Movielist key={movieName} 
      title={movieName} 
      movies={movieResults[index]}
      />
      ))}
      </div>
  )
}

export default Gptsuggestion
