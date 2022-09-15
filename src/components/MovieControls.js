import React from 'react'
import { useGlobal } from './context/GlobalState'

const MovieControls = ({movie,type}) => {
    
    const {removeMovieToWatchList,addMovieToWatched,moveToWatchList,removeMovieToWatched}=useGlobal()


  return (
    <div className='inner-card-controls' >
 {type==="watchList" && (
<>
<button  className='ctrl-btn' onClick={()=>addMovieToWatched(movie)}>
        <i className="fa-fw far fa-eye"></i>
        </button>
        
        <button className='ctrl-btn' onClick={()=>removeMovieToWatchList(movie.id)}  >
        <i className="fa-fw far fa-times"></i>
        </button></>
 )}

{type==="watched" && (
<>
<button  className='ctrl-btn' onClick={()=>moveToWatchList(movie)}>
        <i className="fa-fw far fa-eye-slash"> </i>
        </button>
        
        <button className='ctrl-btn' onClick={()=>removeMovieToWatched(movie.id)}  >
        <i className="fa-fw far fa-times"></i>
        </button></>
 )}

        </div>
  )
}

export default MovieControls