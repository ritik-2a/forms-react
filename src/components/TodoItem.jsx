import style from "./TodoItem.module.css";
import { MdDelete } from "react-icons/md";

function TodoItem({ todoName, todoDate, handleOnDelete }) {
  return (
    <div className={`row ${style.rkRow}`}>
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button
          type="button"
          className={`btn btn-danger ${style.rkButton}`}
          onClick={() => handleOnDelete(todoName)}
        >
          <MdDelete/>
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
