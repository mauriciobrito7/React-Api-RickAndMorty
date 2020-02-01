import React from "react";
import "./css/CharacterCard.css";
import Share from "./Share";
function CharacterCard(props) {
  const { character } = props;

  return (
    <div
      className="CharacterCard"
      style={{ backgroundImage: `url(${character.image})` }}
    >
      <div className="CharacterCard__name-container">
        <span className="character__name">{character.name}</span>
        <span>
          <Share
            title={character.name}
            text={"Personaje Rick and Morty"}
            style={{ color: "white" }}
          >
            Compartir
          </Share>
        </span>
      </div>
    </div>
  );
}

export default CharacterCard;
