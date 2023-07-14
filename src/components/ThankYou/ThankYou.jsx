import style from "./ThankYou.module.css";

export default function ThankYou({ image, numberOfInputs, rating }) {
  return (
    <div className={style.thankYou}>
      <img src={image} alt={`Thank you!`} className={style.image} />
      <span className={style.rating}>
        You selected {rating} out of {numberOfInputs}
      </span>
      <div className={style.description}>
        <h2 className={style.title}>Thank you!</h2>
        <p className={style.text}>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}
