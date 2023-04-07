import React from "react";
import "./LetterIndex.css";
function LetterIndex({ alphaIndex }) {
  const abc = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return (
    <div className="letters">
      {abc.map((x, index) => {
        return (
          <h4 key={index} onClick={() => alphaIndex(x)}>
            {x}
          </h4>
        );
      })}
    </div>
  );
}

export default LetterIndex;
