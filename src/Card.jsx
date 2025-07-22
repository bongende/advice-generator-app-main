import React, { useEffect, useState } from "react";

const Card = () => {
  const [advice, setAdvice] = useState({});

  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((res) => {
        setAdvice(res.slip);
      });
  };

  useEffect(fetchAdvice, []);

  return (
    <article className="advice-container" aria-label="card content">
      <p className="advice-id">
        ADVICE # {advice.id}
      </p>
      <q className="advice-text">
        {advice.advice}
      </q>
      <img
        alt="separator"
        src="../images/pattern-divider-desktop.svg"
        className="separator"
      />
      <button
        className="change-advice-btn"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          fetchAdvice();
        }}
      >
        <img alt="change advice" src="../images/icon-dice.svg" />
      </button>
    </article>
  );
};

export default Card;
