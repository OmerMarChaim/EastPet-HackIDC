import React from 'react'
import {useState} from "react";
import TinderCard from "react-tinder-card";
import './TinderCards.css';

function TinderCards(){
const [animal, setAnimals] = useState([
    {
        name: 'dogger',
        url:"http://cdn.akc.org/content/article-body-image/samoyed_puppy_dog_pictures.jpg",
    },
    {
        name:'kitty',
        url: "https://jngnposwzs-flywheel.netdna-ssl.com/wp-content/uploads/2019/07/IMG_3481-768x566.jpg",
    },
]);

    return (
        <div>
            <h1>Tinder Cards</h1>
            <div className = "tinderCards_cardContainer">
            {animal.map(animal => (
                <TinderCard
                className="swipe"
                key={animal.name}
                preventSwipe={['up','down']}
                >
                    <div
                    style={{ backgroundImage: 'url(${animal.url})' }}
                     className ="card">
                         <h3>{animal.name}</h3>
                    </div>

                </TinderCard>
            ))}
        </div>
    </div>
        
    );
  }

  export default TinderCards
  /* 
  Team36HackIdc
  git add .
  git commit -m " "
  git pull
  git push
  */