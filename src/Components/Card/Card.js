import React, { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./CardContainer.css";
import { Card, CardBody, Center, Image } from "@chakra-ui/react";
import Item from "../Items/Item";

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
          <Card>
            <CardBody>
              <div className="img-container" key={i}>
                <div className="title">
                  <h4>{book.volumeInfo.title.slice(0, 20)}...</h4>
                  <Item />
                </div>

                {book.volumeInfo && (
                  <div className="img">
                    <Center>
                      <Image
                        src={book.volumeInfo.imageLinks.thumbnail}
                        alt={i}
                        borderRadius="md"
                      />
                    </Center>
                  </div>
                )}
                <div className="count">
                  <ItemCount />
                </div>
              </div>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}

export default CardContainer;
