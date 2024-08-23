import React from "react";

const cards = [
  {
    text: "Fresh",
    imgSrc: "http://localhost/food-card1.jpg",
  },
  {
    text: "Nearby",
    imgSrc: "http://localhost/food-card2.jpg",
  },
  {
    text: "Delicious",
    imgSrc: "http://localhost/food-card3.jpg",
  },
];

const CardList = () => {
  return (
    <div className="flex items-center justify-center space-x-32 mt-16">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex w-36 h-16 items-center justify-center space-x-2 shadow-lg rounded-lg"
        >
          <img
            src={card.imgSrc}
            alt={card.text}
            className="w-14 h-14 object-contain"
          />
          <div className="text-xs text-gray-700 font-bold">{card.text}</div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
