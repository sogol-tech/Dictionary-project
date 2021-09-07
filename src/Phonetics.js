import React from "react";
import "./Phonetics.css";

export default function phonetics(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      <span className="text">
        <em>{props.phonetic.text}</em>
      </span>
    </div>
  );
}
