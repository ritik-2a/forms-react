import TodoItem from "./TodoItem";

const TodoItems = ({ foodlist ,handleOnDelete}) => {
  return <>
  {foodlist.map((item)=><TodoItem key={item.name} todoName={item.name} todoDate={item.date} handleOnDelete={handleOnDelete}></TodoItem>)}
  </>
};
export default TodoItems;

{
  /* as data is passes as a prop 
     <TodoItem todoName="Butter" todoDate="10/12/2024"></TodoItem> 
     <TodoItem todoName="Milk" todoDate="18/12/2024"></TodoItem>  */
}
