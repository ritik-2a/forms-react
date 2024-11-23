import style from "./DateTimeContainer.module.css";

export function DateTimeContainer({ time, date }) {
  return (
    <>
      <div className={style.main}>
        <div className={style.cont1}>{date}</div>
        <div className={style.cont2}>{time}</div>
      </div>
    </>
  );
}
