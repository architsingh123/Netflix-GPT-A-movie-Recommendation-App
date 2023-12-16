import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import { useEffect } from 'react';


const useNowPlayingMovies = ()=>{
const dispatch=useDispatch();
  const getnowPlayingMovies= async()=>{
    const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_OPTIONS);
    //https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1
    const json= await data.json();
    console.log(json.results);
    //dispatch the action to update the state with new movies
    dispatch(addNowPlayingMovies(json.results));
    
  }
  useEffect(()=>{
    getnowPlayingMovies();
  },[]);
}
export default useNowPlayingMovies;