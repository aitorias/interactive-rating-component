import { useEffect, useState } from "react";

import RateInput from "../RateInput/RateInput";

import style from "./RateForm.module.css";

export default function RateForm({
  action,
  method,
  legend,
  name,
  inputNumber,
  onSubmit,
}) {
  const [inputValues, setInputValues] = useState([]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    setInputValues(Array(inputNumber).fill(""));
  }, [inputNumber]);

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(rating);
  };

  return (
    <form
      action={action}
      method={method}
      className={style.form}
      onSubmit={handleSubmit}
    >
      <fieldset className={style.fieldset}>
        <legend className={style.srOnly}>{legend}</legend>
        {inputValues.map((value, index) => (
          <div key={index} className={style.inputGroup}>
            <RateInput
              label={index + 1}
              inputName={name}
              value={index + 1}
              checked={rating === index + 1}
              onChange={handleRatingChange}
            />
          </div>
        ))}
      </fieldset>
      <button type="submit" className={style.button}>
        Submit
      </button>
    </form>
  );
}
