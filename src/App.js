import { useState } from'react'

import {v4 as uuidv4} from 'uuid';

import './App.css';
import AddMovie from './AddMovie'
import Filter from './Filter'
import Description from './Description';
import {Route} from "react-router-dom"
function App() {
  const [movie,setMovie]=useState([
    { name :"Batman",
      url:"https://c0.lestechnophiles.com/www.numerama.com/wp-content/uploads/2020/04/the-batman-rober-pattinson-bande-annonce.jpg?resize=1212,712"
 ,id:uuidv4()
 ,rating:4
 ,description:"Dans sa deuxième année de lutte contre le crime, le milliardaire et justicier masqué Batman explore la corruption qui sévit à Gotham et notamment comment elle pourrait être liée à sa propre famille, les Wayne, à qui il doit toute sa fortune. En parallèle, il enquête sur les meurtres d'un tueur en série qui se fait connaître sous le nom de Sphinx et sème des énigmes cruelles sur son passage.",
 trailer:"https://www.youtube.com/watch?v=NLOp_6uPccQ"
    },
     {name:"Fast and Furios",
    url:"https://cdn.pocket-lint.com/r/s/1200x630/assets/images/148310-tv-feature-what-order-should-you-watch-the-fast-and-furious-films-in-image1-rzgajwfo2x.jpg"
   ,id:uuidv4()
   ,rating:3,
   description:"Dominic Toretto et son équipe unissent leurs forces pour combattre l'assassin le plus habile et le conducteur le plus performant qu'ils aient jamais rencontré : son frère abandonné.",
   trailer:"https://www.youtube.com/watch?v=_qyw6LC5pnE"
  },
  {
   name:"NOBODY"
   ,url:"https://movies.universalpictures.com/media/03-nbd-dm-mainstage-mobile-banner-1080x793-ra-f022221-60354670e5a33-1.jpg"
 ,id:uuidv4()
 ,rating:3,
 description:"Dans un barrage de poings, de coups de feu et de crissements de pneus, un homme enragé doit sauver sa femme et son fils d'un dangereux adversaire. Il doit s'assurer qu'il ne sera plus jamais sous-estimé.",
 trailer:"https://www.youtube.com/watch?v=wZti8QKBWPo"
  }



  ]);
  



  function add(newmovie){
  
    setMovie([...movie,newmovie])
  }

function deletemovie(deleteid)
{
  setMovie(movie.filter(elm=>elm.id!==deleteid))
}
  
function changerating(ratingid,newrating)
{
  setMovie(movie.map(elm =>{
                     if(elm.id===ratingid)
                 return {...elm,rating:newrating} 
                 else return ( {...elm} ) } ))
}






  return (
    <div>
  <Route exact path="/" render={(props)=><AddMovie   {...props} add={add}    />  }/>
    

   <Route exact path="/" render={(props)=><Filter   {...props}     movie={movie}   delet={deletemovie}  changerating={changerating}    />} />
   
     <Route   path="/:id" render={(props)=><Description     {...props}  movie={movie}  changerating={changerating}     />   } />
     
    </div>
  );
}

export default App;
