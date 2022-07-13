import React from "react";

const Card = ({ handleClickAddCart, filtered }) => {
  return (
    <div className="main">
      <div className="cards">
        {filtered.map((item, index) => {
          return (
            <div key={index} className="card">
              <img src={item.image} alt={item.name} />
              <div className="desc">
                <p className="nameProduct">{item.name}</p>
                <p className="priceProduct">{item.price}</p>
                <button
                  className={!item.status ? "btnCart" : "addBtnCart"}
                  onClick={() => handleClickAddCart(index)}
                >
                  {!item.status ? "Добавить в корзину" : "Удалить из корзины"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
