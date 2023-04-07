import React, { useState } from "react";
import "./MealInfo.css";
import { useParams } from "react-router-dom";
import axios from "axios";
function MealInfo() {
  const [item, setItem] = useState();
  let { MealId } = useParams();
  if (MealId != "") {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
      .then((res) => {
        // console.log(res.data[0]);

        setItem(res.data.meals[0]);
      })
      .catch((err) => {
        console.log(err);
      });
    // fetch(`www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
    // .then(res=>res.json())
    // .then(data=>{
    //     console.log(data.);
    // })
  }
  return (
    <>
      <div className="total-info">
        {!item ? (
          ""
        ) : (
          <>
            <div className="img-content">
              <img src={item.strMealThumb} alt="" />
              <div style={{ marginLeft: 30 }}>
                <h3>FoodName:{item.strMeal}</h3>
                <h3>Type :{item.strCategory} Item</h3>
                <h3>Country:{item.strArea} Food</h3>
              </div>
            </div>
            <div className="info-content">
              <div className="info-content-1">
                <h2>Ingredients:</h2>
                <br />
                <p>
                  {item.strIngredient1} :{item.strMeasure1}{" "}
                </p>
                <p>
                  {item.strIngredient2} :{item.strMeasure2}{" "}
                </p>
                <p>
                  {item.strIngredient3} :{item.strMeasure3}{" "}
                </p>
                <p>
                  {item.strIngredient4} :{item.strMeasure4}{" "}
                </p>
                <p>
                  {item.strIngredient5} :{item.strMeasure5}{" "}
                </p>
                <p>
                  {item.strIngredient6} :{item.strMeasure6}{" "}
                </p>
                <p>
                  {item.strIngredient7} :{item.strMeasure7}{" "}
                </p>
                <p>
                  {item.strIngredient8} :{item.strMeasure8}{" "}
                </p>
                <p>
                  {item.strIngredient9} :{item.strMeasure9}{" "}
                </p>
              </div>
              <p>
                <strong>Preparation:</strong> {item.strInstructions}
              </p>
            </div>
            {/* <div className="video-content">
              <iframe
                src={`https://www.youtube.com/embed/rp8Slv4INLk`}
              ></iframe>
            </div> */}
          </>
        )}
      </div>
    </>
  );
}

export default MealInfo;
