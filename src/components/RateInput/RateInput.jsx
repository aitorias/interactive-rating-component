import { useId } from "react";

import style from "./RateInput.module.css";

export default function RateInput({
  label,
  inputName,
  value,
  checked,
  onChange,
}) {
  const id = useId();

  return (
    <>
      <input
        type="radio"
        id={id + "-input"}
        name={inputName}
        value={value}
        checked={checked}
        className={style.input}
        aria-describedby={id}
        onChange={onChange}
        required
      />
      <label htmlFor={id + "-input"} className={style.label}>
        {label}
      </label>
    </>
  );
}
