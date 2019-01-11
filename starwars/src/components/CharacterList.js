import React from "react";

function CharacterList(props) {
  return (
    <div>
      {props.starwarsChars.map(character => (
        <p>{character.name}</p>
      ))}
    </div>
  );
}

export default CharacterList;
