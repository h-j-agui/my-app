import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Portal,
} from "@chakra-ui/react";
import "./Details.css";

function Details(props) {
  console.log("details", props.book);
  return (
    <Popover>
      {/* <div className="popover-details"></div> */}
      <PopoverTrigger>
        <Button className="item">Details</Button>
      </PopoverTrigger>
      <Portal>
        <div className="popover-details">
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>{props.book.volumeInfo.title}</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>Authors: {props.book.volumeInfo.authors}</PopoverBody>
            <PopoverFooter>
              Publisher: {props.book.volumeInfo.publisher}
            </PopoverFooter>
            <PopoverFooter>
              Published Date: {props.book.volumeInfo.publishedDate}
            </PopoverFooter>
          </PopoverContent>
        </div>
      </Portal>
    </Popover>
  );
}

export default Details;
