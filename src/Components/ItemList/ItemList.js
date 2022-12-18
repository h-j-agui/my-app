import React, { useState, useEffect } from "react";

import Item from "../Item/Item";
import "./ItemList.css";

function ItemList(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${props.genero}`)
      .then((res) => res.json())

      .then((data) => setData(data.items))
      .catch((err) => console.log("Error", err));
  }, [props.genero]);

  //   console.log("this is the name", data);

  return (
    <div>
      <div className="item-list">
        {data ? (
          data.map((book, i) => {
            return <Item key={i} book={book} />;
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default ItemList;
