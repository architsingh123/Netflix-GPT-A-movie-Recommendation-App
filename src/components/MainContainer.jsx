import React from 'react'
import { useSelector } from 'react-redux'
import VedioBackground from './VedioBackground'
import VedioTitle from './vedioTitle';

function MainContainer() {
    const movies=useSelector(store => store.movies?.nowPlayingMovies);
    if(movies == null) return;
    const mainmovie=movies[0];
    console.log(mainmovie);

    const {original_title,overview,id}=mainmovie;
  return (
    <div>
      <VedioTitle title={original_title} overview={overview}/>
      <VedioBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
