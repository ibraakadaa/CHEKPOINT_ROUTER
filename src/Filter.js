import { useState,useEffect } from "react";
import MovieList from "./MovieList";
import ReactStars from "react-rating-stars-component";
import { Nav, Navbar, Form, FormControl} from "react-bootstrap";


var frating = 0;
var searchname = "";
const Filter = ({ movie, delet, changerating }) => {

const [filtermovie, setfiltermovie] = useState(movie);
  function updating() {
    setfiltermovie(
      movie.filter(
        (elm) =>
          elm.name.toLowerCase().includes(searchname.toLowerCase()) &&
          elm.rating >= frating
      )
    );
  }
 
  

  function Filtermovie(e) {
    searchname = e.target.value;
    
    updating();
  }

  function deletefromfiltermovie(deleteid) {
    setfiltermovie(filtermovie.filter((elm) => elm.id !== deleteid));
  }

  const ratingChanged = (newRating) => {
    

    frating = newRating;

    updating();
};
function filterchangerating(ratingid, newrating) {
    


        setfiltermovie(
            filtermovie.map((elm) => {
                if (elm.id === ratingid)return { ...elm, rating: newrating };
                 return  { ...elm };
            })
            );
  }
  useEffect(() => {
   
    updating()
    
 

 
},[movie])
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
        <img src="./logo.png"  style={{marginRight:"50px"}}/>
          Movie streaming
      
        </Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={(e) => Filtermovie(e)}
          />
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
        </Form>
      </Navbar>

     
     
      <MovieList
        movie={filtermovie}
        delet={delet}
        changerating={changerating}
        deletefromfiltermovie={deletefromfiltermovie}
        filterchangerating={filterchangerating}
        updating={updating}
      />
    </div>
  );
};

export default Filter;
