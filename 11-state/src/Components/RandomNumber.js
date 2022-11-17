import { useState } from "react";
import generateRandomNum from "../Utils/generateRandomNum";

function RandeomNumber(props) {
  const { maxNum } = props;
  const [randomNum, setRandomNum] = useState(generateRandomNum(maxNum));
  const changeRandeomNum = () => {
    setRandomNum(generateRandomNum(maxNum));
  };
  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={changeRandeomNum}>Generate new radom number</button>
    </div>
  );
}

export default RandeomNumber;
