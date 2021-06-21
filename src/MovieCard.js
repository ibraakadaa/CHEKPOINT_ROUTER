
import StarRatingComponent from 'react-star-rating-component';

import ReactStars from "react-rating-stars-component";
import {Card,Button} from 'react-bootstrap'
import {useState,useEffect} from "react"
import { Link } from "react-router-dom";
function MovieCard({src,name,rating,delet,id,changerating,updating,deletefromfiltermovie,filterchangerating})
{  const [rate,setRate]=useState(rating)
  
  
function fndelet()
  {
    delet(id)
    deletefromfiltermovie(id)
  }
   
/*   const ratingChanged=(newRating)=>{

    changerating(id,newRating)
    filterchangerating(id,newRating)
     
     setRate(newRating) 
    } */
  const onStarClick=(nextValue, prevValue, name)=>{
    changerating(id,nextValue);
    setRate(nextValue) 

  }
  useEffect(()=>{
    
    console.log("ratingis chaged")
    setRate(rating)}

  ,[rating])


    return( <div  >
    <Card className="moviecard" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={src}  style={{ width: '18rem' , height:"20rem"}} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
   
    </Card.Text>
  </Card.Body>
  <div className="flexing">
  <StarRatingComponent value={rate} starCount={5} onStarClick={onStarClick} size={24} />
  </div>
  <Button  className="deletebutton" variant="danger" onClick={fndelet}  >Delte</Button>
  
  
   <Link to={`/${id}`} className="seemore"> <Button className="seemore1"  variant="primary"  >Watch the trailer</Button> </Link>
  
</Card>  
    
    </div>)
   
 
}



export default MovieCard 