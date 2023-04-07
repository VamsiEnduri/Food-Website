import React from "react";
import "./MealItems.css";
import { useNavigate } from "react-router-dom";
function MealItems({ info }) {
  let navigate = useNavigate();
  return (
    <div className="meal-items">
      {/* <div className="card"> */}
      {!info
        ? "Not found"
        : info.map((x, index) => {
            return (
              <div
                className="card"
                key={index}
                onClick={() => navigate(`/${x.idMeal}`)}
              >
                <img src={x.strMealThumb} />
                <p>{x.strMeal}</p>
              </div>
            );
          })}
    </div>
  );
}

export default MealItems;
