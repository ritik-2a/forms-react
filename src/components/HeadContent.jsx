import style from "./HeadContent.module.css";

export function HeadContent({ foodlist }) {
  return (
    <>
      {foodlist.length !== 0 && (
        <div className={`row ${style.rkRow}`}>
          <div className={`col-6 ${style.text}`}>To-Do</div>
          <div className={`col-4 ${style.text}`}>Date</div>
          <div className={`col-2 ${style.text}`}>Button</div>
        </div>
      )}
    </>
  );
}
