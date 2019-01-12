import React from "react";

import "./StarWars.css";

function Character(props) {
  return (
    <div className="character-card">
      <div className="card-header">
        <h1>{props.character.name}</h1>
      </div>
      <div className="card-body">
        <table class="card-table">
          <tr>
            <td>Birth Year:</td>
            <td>{props.character.birth_year}</td>
          </tr>
          <tr>
            <td>Eye Color:</td>
            <td>{props.character.eye_color}</td>
          </tr>
          <tr>
            <td>Gender:</td>
            <td>{props.character.gender}</td>
          </tr>
          <tr>
            <td>Hair Color:</td>
            <td>{props.character.hair_color}</td>
          </tr>
          <tr>
            <td>Height:</td>
            <td>{props.character.height}</td>
          </tr>
          <tr>
            <td>Mass:</td>
            <td>{props.character.mass}</td>
          </tr>
          <tr>
            <td>Skin Color:</td>
            <td>{props.character.skin_color}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Character;
