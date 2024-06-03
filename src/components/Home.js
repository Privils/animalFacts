import React, { useEffect, useState } from "react";
import Swup from "swup";
import { FaHeart } from "react-icons/fa";

const Home = () => {
  const [dogInfo, setDogInfo] = useState([]);
  const [randomDog, setRandomDog] = useState(null);
  const [randomCats, setRandomCats] = useState([]);
  const foxTag =  document.querySelector('.foxText');
  const duckTag = document.querySelector('.duckText')
  console.log(duckTag)
const foxFacts = [
 "Fox species that live in cold areas of the world usually have both a summer and a winter coat, each of which sheds when the temperature changes, to let the new coat grow in.",
 "The only continents that don't have red foxes are South America and Antarctica.",
 "There are over 20 species of fox.",
 "The size of different fox species varies, but none grow to weigh more than 25 pounds.",
 "On cold nights, foxes cover themselves with their tail, like a blanket, to keep warm.",
 "A fox's tail helps it keep its balance when pouncing on prey.",
 "Most species of arctic fox have a dark coat in summer and a white coat in winter, to help them blend in with the environment.",
 "The average life span of a red fox in the wild is only 2 to 4 years.",
 "Foxes are canines, meaning they are related to dogs, wolves, and coyotes.",
 "Of all the meat-eating mammals on planet Earth, the red fox is the most widespread.",
 "Biologists recommend never feeding foxes that live in urban areas, so that they will retain their ability to hunt.",
 "Although they are relatives of dogs, red foxes have long whiskers, retractable claws, and great night vision—just like cats.",
 "Almost all species of fox hunt solo",
 "Fox parents both take care of their pups, taking turns hunting for food for the family.",
 "As their natural habitats have been encroached upon by human development, red foxes have adapted to city life, hunting in garbage cans and establishing their dens under porches",
 "Eighty-five percent of all fox fur sold in the fur industry comes from foxes raised on factory farms.",
 "In the Asian region of the Levant, it is common to find foxes buried alongside humans in graves that are over 8,000 years old.",
 "Foxes can retract their claws and are the only type of canine that can do so and 'Vixen' is the name for a female fox, while male foxes are called 'tods' or 'dog foxes'",
 "A woman buried in what is now Jordan over 16,000 years ago was buried with a red fox carefully placed over her body.",
 "Most major cities in Canada, the United States, Great Britain, and Australia all have foxes living in them."
]

const duckFacts = [
  "Ducks Have Accents-City ducks have a different accent than country ducks – typically louder!",
  "Ducklings Communicate Before Hatching - Ducklings, like other waterfowl, learn to communicate with each other in the eggs and try to hatch at the same time.",
  "Ducks Have Great Vision - Ducks have exceptional visuals and can see finer detail at farther distances than humans.",
  " Ducks Have Great Eyes - Ducks can move each eye independently and they store information on the opposite sides of their brain.",
  "Ducks Can Sleep with One Eye Open -Ducks can sleep with one eye open to watch for predators.",
  "Duckbills Are Sensitive - Duckbills are sensitive and have many touch receptors, making them similar to our fingertips and palms.",
  "Duck Bill Shapes Have Purpose - A duck’s bill varies by species and relates to its function. Flat bills are used to consume plant materials, while pointed bills are used to catch and eat fish.",
  "Ducks Can Swim in the Cold - Ducks can swim when it’s cold out because the blood vessels in their feet are close together, preventing heat loss.",
  "Ducks Have Abstract Thought Capabilities - Ducklings can understand the relationship between objects, which demonstrates abstract thought capabilities.",
  " Ducks Are Full of Muscle - Ducks, like other waterfowl, have as many as 12,000 separate muscles to control their feathers. They can use these to lift or compress feathers to dive underwater, show emotion, or regulate body heat."
]
  useEffect(() => {
   getDogInfoFunction();
getRandomCatFacts();
    const intervalId = setInterval(() => {
      getDogInfoFunction();
      getRandomCatFacts();
      getFoxesRandom();
      getDuckRandom();
    }, 5 * 60 * 1000); // 5 minutes in milliseconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const getDogInfoFunction = async () => {
    const url = "https://dogapi.dog/api/v2/breeds";
    try {
      const response = await fetch(url);
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.data.length);
      const randomDogData = data.data[randomIndex];
      setRandomDog(randomDogData);
      console.log(randomDogData); 
      //setRandomDog(data.data);
     // console.log(data.data);  
    } catch (error) {
      console.log("error fetching dog info", error);
    }
  }

const getRandomCatFacts = async () =>{
  const caturl = 'https://meowfacts.herokuapp.com/';
  try{
    const response = await fetch(caturl);
    const data = await response.json();
    setRandomCats(data)
    console.log(data)
    }catch(error){
    console.log('error fetching cat facts', error)
  }
}
function getFoxesRandom() {
  const randomFoxFacts = Math.floor(Math.random() * foxFacts.length);
  const newFox = foxFacts[randomFoxFacts];
foxTag.innerHTML = newFox;
  console.log(newFox);
}
getFoxesRandom();
function getDuckRandom() {
  const randomDuckFacts = Math.floor(Math.random() * duckFacts.length);
  const newDuck = duckFacts[randomDuckFacts];
  duckTag.innerHTML = newDuck;
}
getDuckRandom();



  return (
    <>
      <section className="dogContainer" id="dogs">
        <div id="dogInfo">


          {randomDog &&(
            <div key={randomDog.id}>
            <p className="animalName">Dog name: {randomDog.attributes.name}</p>
            <p className="dogText">{randomDog.attributes.description}</p>

          </div>
          )
          }

        

<div className="btnContainer">
            <button className="btn">
              <a href="#">view more</a>
            </button>
          </div>
        </div>
      </section>

      <section className="foxContainer" id="foxes">
        <div id="foxInfo">
          <h1 className="animal">foxes</h1>
          <p className="foxText">
          </p>
          <div className="btnContainer">
            <button className="btn">
              <a href="#">view more</a>
            </button>
          </div>
        </div>
      </section>

      <section className="catContainer" id="cats">
        <div id="catInfo">
          
{
  randomCats && (
    <div key={randomCats.id}>
      <h1 className="animal name">cats</h1>
 <p className="catText">{randomCats.data} </p>
    </div>
  )
}
         

          <div className="btnContainer">
            <button className="btn">
              <a href="#">view more</a>
            </button>
          </div>
        </div>
      </section>
      <section className="duckContainer" id="ducks">
        <div id="duckInfo">
          <h1 className="animal">ducks</h1>
          <p className="duckText">
          </p>
          <div className="btnContainer">
            <button className="btn">
              <a href="#">view more</a>
            </button>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footerContent">
          <p>
            {" "}
            &copy;(2024) build with <FaHeart className="heart" /> by Priviledge.
            All Rights Reserved{" "}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
