import React,{useState, useEffect} from 'react';
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import database from '../../firebase';

const TinderCards = () => {
    const [people, setPeople] = useState([
        {
            name: "Steve Jobs",
            url: "https://papers.co/wallpaper/papers.co-ha87-wallpaper-steve-jobs-face-apple-36-3840x2400-4k-wallpaper.jpg"
        },
        {
            name: "Zuckerberg",
            url: "https://wallpapercave.com/wp/wp2126272.jpg"
        }
    ]);

    useEffect(() => {
       const unsubscribe = database
        .collection("people")
        .onSnapshot((snapshot) =>
            setPeople(snapshot.docs.map((doc) => doc.data()))
        )
        return () => {
            unsubscribe();
        };
    }, [people]);

    const peopleList = people.map(person => {
        return(
            <TinderCard 
                className="swipe" 
                key={person.name}
                preventSwipe ={['up', 'down']}
            >
                <div
                    style={{ backgroundImage: `url(${person.url})` }} 
                    className="card">
                    <h3>{person.name}</h3>
                </div>
            </TinderCard>
        )
    })
    return ( 
        <div>
            <div className="tinderCards__cardContainer">
                {peopleList}
            </div>
            {/* <h1>TinderCards</h1>  */}
        </div>
    );
}
 
export default TinderCards;