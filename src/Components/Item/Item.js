import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";
import { Card, CardBody, Center, Image } from "@chakra-ui/react";
import Details from "../DetailContainer/Details";

function Item(props) {
  return (
    <Card>
      <CardBody>
        <div className="item-container" key="i">
          <div className="title">
            <h4>{props.book.volumeInfo.title.slice(0, 20)}...</h4>
            <h4>title...</h4>
            <Details book={props.book} />
          </div>

          {props.book.volumeInfo && (
            <div className="img">
              <Center>
                <Image
                  src={props.book.volumeInfo.imageLinks.thumbnail}
                  alt={props.book.id}
                  borderRadius="md"
                />
              </Center>
            </div>
          )}
          <div>imagen</div>

          <div className="count">
            <ItemCount />
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default Item;
