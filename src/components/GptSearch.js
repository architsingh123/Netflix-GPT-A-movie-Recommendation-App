import React from 'react'
import GptSearchBar from './GptSearchBar'
import Gptsuggestion from './Gptsuggestion'
import { LOGO_URL } from '../utils/constants'

function GptSearch() {
  return (
    //we have gpt search bar and gptsuggestion inside the gpt search
    <div>
    <div className='absolute -z-10 '>
    <img
    className='h-100 w-screen' 
    src={LOGO_URL}
    alt='logo'
    />
    </div>
      <GptSearchBar/>
      <Gptsuggestion/>
    </div>
  )
}

export default GptSearch
