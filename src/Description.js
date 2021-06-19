import React from 'react'
import {useState,useEffect} from "react"
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";



 const Description = ({match,movie,history,changerating}) => {
   



var show
     if(movie.find(elm=>elm.id===match.params.id)){
        show=true
    var {name,id,trailer,description,rating}=movie.find(elm=>elm.id===match.params.id)
     console.log(typeof(match.params.id))
     console.log(movie)
     console.log(typeof(name))
     trailer=trailer.replace("watch?v=","embed/")
    
   } else show=false


   const [rate,setRate]=useState(rating)
   const ratingChanged=(newRating)=>{

       changerating(id,newRating)
    
        
        setRate(newRating) 
       
       
     }
     useEffect(()=>{
       
       console.log("ratingis chaged")
       setRate(rating)}
   
     ,[rating])



    return (
       <div>
           {!show && <div className="errorpage"><h1 >Error page not found</h1>
           <br/>
           <Link to="/"><Button variant ="dark">Go to home page</Button></Link></div>}
           
           
            {show &&<div className="description">
           
           <iframe  src={trailer}> </iframe>
           <h1 style={{width:"70%" ,backgroundColor:'aqua',textAlign:"center ",fontFamily:'Roboto'}}>{name}</h1>
           <br/>
           <p style={{width:"70%",fontWeight:"bold",fontFamily:'Roboto'}}>{description}</p>
           <h2>Rate the movie</h2>
           <ReactStars
    count={5}
    size={24}
    activeColor="#ffd700"
    value={rate}
    onChange={ratingChanged}
  />
           <Button onClick={()=>history.goBack()} variant ="dark">Go to home page</Button></div>}
            

        </div>
    )
}
export default Description 