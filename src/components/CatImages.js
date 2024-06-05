import React, { useEffect, useState } from 'react';
import ReactStars from "react-rating-stars-component";

const CatImages = () => {
    const [ratings, setRatings] = useState({});
    const [dogAPI, setDogApi] = useState([]);
    const [loading, setLoading] = useState(true);
    const APIkEY = process.env.REACT_APP_API_KEY;
    const handleRatingChange = (index, newRating) => {
      setRatings((prevRatings) => ({
        ...prevRatings,
        [index]: newRating,
      }));
      console.log(`Rating for image ${index}: ${newRating}`);
    };
    useEffect(()=>{
  dogImagesApi();
    }, [])
    //live_aNRty6DdAd8u19ofHXTwYrMI2z3loC8bie519NU7z6TGblhbumVqCCuq6OKBjf4q
    const dogImagesApi = async () => {
      const url = `https://api.thecatapi.com/v1/images/search?limit=10&api_key=${APIkEY}`;
    
      try {
        const responses = await Promise.all(
          Array.from({ length: 10 }, () => fetch(url).then((response) => response.json()))
        );
    
        const data = responses.flat();
        console.log(data);
        setDogApi(data)
      } catch (error) {
        console.log(error);
      } finally{
        setLoading(false)
      }
    };
    
  return (
   <>
      
      <div className="dogImageContainer">
    {loading ? (
        <p id="loading">Loading....</p>
      ) : (

        <>
          
   {dogAPI.map((dog, index) =>(
<div className="shadow">
           <div className="dogImage" key={index}>
               <img src={dog.url} alt="images of dogs" loading="lazy"/>
               <div className="rating">
               <ReactStars
                 count={5}
                 onChange={(newRating) => handleRatingChange(index, newRating)}
                 size={30}
                 color1={'#e3e3e3'}
                 color2={'rgb(255, 0, 85)'}
                 half={true}
                 value={ratings[index] || 0}
               />
               </div>
           </div>
</div>
       ))}
        </>
      )}
   </div>
   </>
  )
}

export default CatImages
