import React from "react";

export default function Die(props) {
  let dieFace = "";
  switch (props.value) {
    case 1:
      dieFace = "/img/dieFace1.png";
      break;
    case 2:
      dieFace = "/img/dieFace2.png"; 
      break;
    case 3:
      dieFace = "/img/dieFace3.png";
      break;
    case 4:
      dieFace = "/img/dieFace4.png";
      break;
    case 5:
      dieFace = "/img/dieFace5.png";
      break;
    case 6:
      dieFace = "/img/dieFace6.png";
      break;
    default:
      break;
  }

  return (

    <div
      className={props.isHeld ? "die-face isHeld" : "die-face"}
      onClick={props.holdDice}
      style={{
        backgroundImage: `url(${dieFace})`,
        backgroundSize: "cover",
      }}
    >
    </div>
  );
}
