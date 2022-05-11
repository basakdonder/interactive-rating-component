import { useState } from "react";
import React from "react";
import "./RateCard.css";
import star from "../../img/icon-star.svg";
import ThankCard from "../ThankCard/ThankCard";
const possibleRates = [1, 2, 3, 4, 5];

function RateCard() {
  const [selectedRate, setSelectedRate] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      {!isSubmitted && (
        <div className="card">
          <img src={star} />
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="rates-wrap">
            {possibleRates.map((rate) => (
              <div
                key={rate}
                className={selectedRate === rate ? "circle clicked" : "circle"}
                onClick={() => {
                  if (selectedRate === rate) {
                    setSelectedRate();
                  } else {
                    setSelectedRate(rate);
                  }
                }}
              >
                {rate}
              </div>
            ))}
          </div>
          <button
            className="submit-btn"
            onClick={() => {
              setIsSubmitted(true);
            }}
          >
            SUBMIT
          </button>
        </div>
      )}

      {isSubmitted && <ThankCard text={selectedRate} />}
    </>
  );
}

export default RateCard;
