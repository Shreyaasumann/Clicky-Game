import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
      <div className="img-container"
           onClick={ () => props.clickedCharacter(props.id)}
      >
        <img className="image-thumbnail" alt={props.name} src={props.image} />
      </div>
  );
}

export default FriendCard;