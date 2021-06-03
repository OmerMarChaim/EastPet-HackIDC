import React, { useEffect } from 'react'
import {useState} from "react";
import TinderCard from "react-tinder-card";
import database from './firebase';
import './TinderCards.css';

function TinderCards(){
    const [animal, setAnimals] = useState([]);

    useEffect(() =>{
   const unsubscribe =  database.collection('PetsInfo').onSnapshot((snapshot) => 
     setAnimals(snapshot.docs.map((doc) => doc.data()))
    );
    return () =>{
        unsubscribe(); 
    };
    } ,[]);

    return (
        <div>
            <div className = "tinderCards__cardContainer">
            {animal.map(animal => (
                <TinderCard
                className="swipe"
                key={animal.name}
                preventSwipe={['up','down']}
                >
                    <div
                    style={{ backgroundImage: `url(${animal.url})` }}
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