import React from 'react'

function TinderCards(){
    const [animals, setAnimals] = useState([
        {
            name: 'dogger'
            url: "http://cdn.akc.org/content/article-body-image/samoyed_puppy_dog_pictures.jpg"
        }
        {
            name:'kitty'
            url:"" 
        }
    ]);
}
const TinderCards() {
    return (
        <div>
            <h1>Tinder Cards</h1>
            {animals.map(animal => (
                <TinderCard>
                    <div
                    style={{ backgroundImage: 'url(${animal.url})'}}
                     className ="card">
                         <h3>{animal.name}</h3>

                    </div>

                </TinderCard>
            ))}
        </div>
    );
  }

  export default TinderCards