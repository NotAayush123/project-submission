import React from "react";

const RatingStars = ({ rating }) => {
  console.log(rating);
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  console.log(fullStars);
  const starIcons = [];

  for (let i = 0; i < fullStars; i++) {
    starIcons.push(
      <i
        key={i}
        className="fa-solid fa-star fa-lg"
        style={{ color: "#fde68a" }}
      ></i>
    );
  }

  if (halfStar) {
    starIcons.push(
      <i
        key="half"
        className="fa-solid fa-star-half fa-lg"
        style={{ color: "#fde68a" }}
      ></i>
    );
  }
  console.log(starIcons);
  return <div>{starIcons}</div>;
};

export default RatingStars;
