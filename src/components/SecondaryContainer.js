import { useSelector } from "react-redux";
import Movielist from "./Movielist";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log("Movies", movies);
  return (
    <div className="bg-black ">
      <div className="relative pl-4 md:pl-8 mt-0 md:-mt-72">
        <Movielist title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <Movielist title={"Popular Movies"} movies={movies.popularMovies} />
        <Movielist title={"Upcoming Movies "} movies={movies.upcomingMovies} />
        <Movielist title={"Trending Movies"} movies={movies.trendingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;