import React from "react";
import thanks from "../../img/illustration-thank-you.svg";
import "./ThankCard.css";

function ThankCard(props) {
  return (
    <div className="card thank-card">
      <img src={thanks} />
      <div className="rate-wrap">You selected {props.text} out of 5</div>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
}

export default ThankCard;
