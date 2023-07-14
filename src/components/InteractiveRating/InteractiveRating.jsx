import { useState } from "react";

import RateForm from "../RateForm/RateForm";

import iconStar from "../../assets/images/icon-star.svg";
import iconThankYou from "../../assets/images/illustration-thank-you.svg";

import style from "./InteractiveRating.module.css";
import ThankYou from "../ThankYou/ThankYou";

export default function InteractiveRating() {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);

  const numberOfInputs = 5;

  const handleSubmit = (rating) => {
    setRating(rating);
    setSubmitted(true);
  };

  return (
    <section className={style.interactiveRating}>
      {submitted ? (
        <ThankYou
          image={iconThankYou}
          numberOfInputs={numberOfInputs}
          rating={rating}
        />
      ) : (
        <>
          <div className={style.icon}>
            <img
              src={iconStar}
              alt="Interactive Rating Star"
              className={style.star}
            />
          </div>
          <div className={style.description}>
            <h1 className={style.title}>How did we do?</h1>
            <p className={style.text}>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
          </div>
          <RateForm
            legend={`Rate our support`}
            name={`rate`}
            inputNumber={numberOfInputs}
            onSubmit={handleSubmit}
          />
        </>
      )}
    </section>
  );
}
