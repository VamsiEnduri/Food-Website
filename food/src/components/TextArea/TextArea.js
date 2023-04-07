import React from "react";
import "./TextArea.css";
function TextArea({ search, searchReceipe }) {
  // const [url, setUrl] = useState(
  //   "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  // );
  // const [search, setSearch] = useState();
  // const searchFood = (e) => {
  //   if (e.key == "Enter") {
  //     setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
  //   }
  // };
  return (
    <div className="text-area">
      <div className="heading">
        <h3>Vamsi Food Court</h3>
        <p>This is a best food court in the ongole city.</p>

        <input
          type="text"
          onChange={(e) => search(e.target.value)}
          onKeyPress={searchReceipe}
        />
        {/* </div> */}
      </div>
    </div>
  );
}

export default TextArea;
