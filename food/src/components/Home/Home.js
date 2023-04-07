import React, { useEffect, useState } from "react";
import LetterIndex from "../LetterIndex/LetterIndex";
import MealItems from "../MealItems/MealItems";
import TextArea from "../TextArea/TextArea";
import "./Home.css";
import axios from "axios";
function Home() {
  const [url, setUrl] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  const [item, setItem] = useState();
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data.meals);
        setItem(res.data.meals);
        setShow(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);
  const setIndex = (alpha) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
  };

  const searchReceipe = (e) => {
    if (e.key == "Enter") {
      setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    }
  };

  return (
    <div id="home">
      <div id="one">
        <TextArea search={setSearch} searchReceipe={searchReceipe} />
      </div>
      <div id="two">{show ? <MealItems info={item} /> : "not found "}</div>
      <div>
        <LetterIndex alphaIndex={(alpha) => setIndex(alpha)} />
      </div>
    </div>
  );
}

export default Home;
