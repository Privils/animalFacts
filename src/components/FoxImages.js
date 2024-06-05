import React, { useEffect, useState } from "react";
import ReactStars from 'react-stars';

const FoxImages = () => {
  const [foxImages, setFoxImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ratings, setRatings] = useState({});

  useEffect(() => {
    getFoxImages();
  }, []);

  const getFoxImages = async () => {
    try {
      const fetchImage = async () => {
        const response = await fetch("https://randomfox.ca/floof/");
        const data = await response.json();
        return data.image;
      };

      const imagePromises = Array.from({ length: 52 }, fetchImage);
      const images = await Promise.all(imagePromises);

      setFoxImages(images);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching fox images:", error);
      setLoading(false);
    }
  };

  const handleRatingChange = (index, newRating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [index]: newRating,
    }));
    console.log(`Rating for image ${index}: ${newRating}`);
  };

  return (
    <div className="dogImageContainer">
      {loading ? (
        <p id="loading">Loading....</p>
      ) : (
        <>
          {foxImages.length === 0 ? (
            <p>No fox images found.</p>
          ) : (
            foxImages.map((fox, index) => (
              <div className="shadow" key={index}>
                <div className="dogImage">
                  <img src={fox} alt="Fox" loading="lazy" />
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
            ))
          )}
        </>
      )}
    </div>
  );
};

export default FoxImages;
