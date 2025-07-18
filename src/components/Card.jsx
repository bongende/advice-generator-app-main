import React, { useEffect, useState } from "react";

const fetchAdvice = () =>
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((qt) => qt);

const Card = () => {
  const [advice, setAdvice] = useState({});

  useEffect(() => {
    fetchAdvice().then((res) => {
      setAdvice(res.slip);
      console.log(res.slip);
    });
  }, []);

  return (
    <div className="advice-container">
      <p className="advice-id">ADVICE # {advice.id}</p>
      <p className="advice-text">"{advice.advice}"</p>
      <button className="change-advice-btn">
        <img src="../../public/images/icon-dice.svg" />
      </button>
    </div>
  );
};

export default Card;
