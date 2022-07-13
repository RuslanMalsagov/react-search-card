import React from "react";
import Card from "./Card";

const Cards = ({ filtered, handleClickAddCart }) => {
  return <Card filtered={filtered} handleClickAddCart={handleClickAddCart} />;
};

export default Cards;
