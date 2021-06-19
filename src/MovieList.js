import MovieCard from "./MovieCard"
const MovieList=({movie,delet,changerating,updating,deletefromfiltermovie,filterchangerating})=>{


return (<div className="movieflexing">

{movie.map((elm)=><MovieCard 
filterchangerating={filterchangerating}
deletefromfiltermovie={deletefromfiltermovie} changerating={changerating} updating={updating}  delet={delet}   id={elm.id} rating={elm.rating}  src={elm.url} name={ elm.name} /> )}


</div>)

}

export default MovieList