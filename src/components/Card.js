import React from "react";

const Card = ({ name, email, id }) => {
    
    return (
        <div className = "tc bg-light-pink dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt = 'kitties' src={`https://robohash.org/${id}png?set=set4`}   />
            <div>
                <h1> {name} </h1>
                <p> {email} </p>
            </div>
        </div>
    ) 
}

export default Card;