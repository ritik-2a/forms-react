import AppName from "./components/AppName";
import TodoEntry from "./components/TodoEntry";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import { Welcome } from "./components/Welcome";
import { HeadContent } from "./components/HeadContent";
import ErrorMessage from "./components/ErrorMessage";
import { DateTimeContainer } from "./components/DateTimeContainer";

function App() {

  const [foodlist, setfoodlist]=useState([
    // {
    //   name: "Milk",
    //   date: "10/12/2024",
    // },
    // {
    //   name: "Buter",
    //   date: "18/12/2024",
    // },
  ])

  const [warning,setwarning]=useState("");

  const handleNewItem=(itemValue,dueDate)=>{
    const newfoodlist=[...foodlist,{name:itemValue,date:dueDate}];
    setfoodlist(newfoodlist);
    setwarning("");
  }

  const handleOnDelete=(itemName)=>{
    const newfoodList=foodlist.filter(item=>item.name!==itemName)
    setfoodlist(newfoodList);
    setwarning("");
  }

  const handleWarning=(w)=>{
    setwarning(w);
  }

  let updatedate=new Date();

  const [time,settime] = useState(updatedate.toLocaleTimeString());
  const [date,setdate] = useState(updatedate.toLocaleDateString());

  setInterval(()=>{
    updatedate= new Date();
    settime(updatedate.toLocaleTimeString());
    setdate(updatedate.toLocaleDateString());
  },1000);



  return (
    <div className="main">
    <div className="todo-container">
      <AppName></AppName>

      <TodoEntry handleNewItem={handleNewItem} handleWarning={handleWarning}></TodoEntry>
      <DateTimeContainer time={time} date={date}></DateTimeContainer>
      <ErrorMessage message={warning} ></ErrorMessage>
      <Welcome foodlist={foodlist} ></Welcome>
      <HeadContent foodlist={foodlist} ></HeadContent>
      <TodoItems foodlist={foodlist} handleOnDelete={handleOnDelete}></TodoItems>
    </div>
    </div>
  );
}

export default App;
