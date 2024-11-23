import style from "./Welcome.module.css";

export function Welcome({ foodlist }) {
  return (
    <div>
      {foodlist.length === 0 && <h2 className={style.welcomeContainer} >"Stay on top of your to-dos with ease. Welcome to your personal task manager!"</h2>}
    </div>
  );
}
