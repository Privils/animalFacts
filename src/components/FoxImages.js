import React, { useEffect, useState } from "react";
import ReactStars from 'react-stars'

const FoxImages = () => {
  const [foxImage, setfoxImage] = useState([]);
  const [loading, setLoading] = useState(true)
  const [ratings, setRatings] = useState({});

  useEffect(() => {
    getFoxImages();
  }, []);
  const getFoxImages = async () => {
    const images = [];
    for (let i = 0; i < 100; i++) {
      try {
        const response = await fetch("https://randomfox.ca/floof/");
        const data = await response.json();
        images.push(data.image);
        console.log(data);
      } catch (error) {
        console.log("error fetching fox Images", error);
      }  finally {
        setLoading(false)
      };
    }
    setfoxImage(images);
  };

  const handleRatingChange = (index, newRating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [index]: newRating,
    }));
    console.log(`Rating for image ${index}: ${newRating}`);
  };
  return (
    <>
      
    <div className="dogImageContainer">
    {loading ? (
        <p id="loading">Loading....</p>
      ) : (

        <>
          
   {foxImage.map((fox, index) =>(
<div className="shadow">
           <div className="dogImage" key={index}>
               <img src={fox.url} alt="images of dogs" loading="lazy"/>
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
  );
};

export default FoxImages;
