import React from "react"
import "./CharacterCard.css"

function CharacterCard({ character }) {
    return (
      <div className="character-card">
        <img src={character.image} alt ={character.name}/>
        <h2>{character.name}</h2>
      </div>
    );
  }
  
  export default CharacterCard;
  