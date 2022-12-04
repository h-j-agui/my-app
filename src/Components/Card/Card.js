import React, { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./CardContainer.css";

function CardContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=kids")
      .then((res) => res.json())

      .then((data) => setData(data.items))
      .catch((err) => console.log("Error", err));
  }, []);
  // const [title, setTitle] = useState("Book");

  console.log("this is the name", data);

  return (
    <div className="card-container">
      {data.map((book, i) => {
        return (
          <div className="img-container" key={i}>
            <div className="title">
              <h4>{book.volumeInfo.title.slice(0, 20)}...</h4>
            </div>

            {book.volumeInfo && (
              <div className="img">
                <img src={book.volumeInfo.imageLinks.thumbnail} />
              </div>
            )}
            <div className="count">
              <ItemCount />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardContainer;
