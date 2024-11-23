import { useState } from "react";
import style from "./TodoEntry.module.css";
import { IoMdAddCircle } from "react-icons/io";

function TodoEntry({ handleNewItem,handleWarning }) {
  const [itemValue, setitemVal] = useState("");
  const [dueDate, setdueDate] = useState("");

  const handleOnNameChange = (event) => {
    setitemVal(event.target.value);
  };
  const handleOnDateChange = (event) => {
    setdueDate(event.target.value);
  };

  const handleItem=(event)=>{
    if(itemValue==="" && dueDate===""){
      handleWarning("Please Enter Todo and Date");
    }
    else if(itemValue===""){
      handleWarning("Please Enter Todo");
    }
    else if(dueDate===""){
      handleWarning("Please Enter Date");
    }
    else{
      handleNewItem(itemValue,dueDate)
      setitemVal("")
      setdueDate("")
    }
    event.preventDefault();
  }

  return (
    <form onSubmit={handleItem} className={`${style.rkRow} row`}>
      <div className="col-6">
        <input type="text" placeholder="Enter "value={itemValue} 
        onChange={handleOnNameChange} 
        />
      </div>

      <div className="col-4">
         <input type="date" value={dueDate}
         onChange={handleOnDateChange}
         />
      </div>

      <div className="col-2">
        <button
          type="submit" 
          // by default for form it act as a submit button

          className={`btn btn-success ${style.rkButton}`}
          // onClick={handleItem}
        >
          <IoMdAddCircle/>
        </button>
      </div>
    </form>
  );
}

export default TodoEntry;
