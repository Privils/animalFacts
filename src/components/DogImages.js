import React, { useEffect, useState } from 'react'
import image from '../components/images/th (3).jpeg';
import ReactStars from 'react-rating-stars-component'

const DogImages = () => {
    const[rating, setRating] = useState(0);
    const handleRatingChange = (newRating) =>{
        setRating(newRating);
        console.log(newRating)
    } 
  return (
   <>
   <div className="dogImageContainer">
    <div className="dogImage">
        <img src={image} alt="" />
        <div className="rating">
        <ReactStars
  count={5}
  onChange={handleRatingChange}
  size={30}
  color1={'#e3e3e3'}
  color2={'rgb(255, 0, 85)'}
  half={true}
  value={rating}
/>
        </div>
    </div>


    <div className="dogImage">
        <img src={image} alt="" />
        <div className="rating">

        </div>
    </div>
    <div className="dogImage">
        <img src={image} alt="" />
        <div className="rating">

        </div>
    </div><div className="dogImage">
        <img src={image} alt="" />
        <div className="rating">

        </div>
    </div><div className="dogImage">
        <img src={image} alt="" />
        <div className="rating">

        </div>
    </div><div className="dogImage">
        <img src={image} alt="" />
        <div className="rating">

        </div>
    </div><div className="dogImage">
        <img src={image} alt="" />
        <div className="rating">

        </div>
    </div>
   </div>
   </>
  )
}

export default DogImages
