import React from "react";

import "./StarWars.css";

function Character(props) {
  return (
    <div className="character-card">
      <div className="card-header">
        <h1>{props.character.name}</h1>
      </div>
      <div className="card-body">
        <ul>
          <li>Birth Year: {props.character.birth_year}</li>
          <li>Eye Color: {props.character.eye_color}</li>
          <li>Gender: {props.character.gender}</li>
          <li>Hair Color: {props.character.hair_color}</li>
          <li>Height: {props.character.height}</li>
          <li>Mass: {props.character.mass}</li>
          <li>Skin Color: {props.character.skin_color}</li>
        </ul>
      </div>
    </div>
  );
}

export default Character;
