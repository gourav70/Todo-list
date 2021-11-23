import React, { useState } from "react";
import ToDoLists from "./ToDoLists";

const  App = () => 
{
    const [inputList, setInputList] = useState("buy apple");
     const[Items, setItems] = useState([]);  
const events = (event) => 
{
setInputList(event.target.value);

};
const listOfItems = () =>
{
setItems((oldItems) =>
{
return [...oldItems, inputList];

});
setInputList("");
};

const deleteItems = (id) =>
{
setItems((oldItems) =>
{
return oldItems.filter((arrElem, index)  =>
{
return index !== id;

});


})

};

   return ( <>
   <div className="main_div">
       <div className="center_div">
           <br/>
           <h1>ToDo List</h1>
           <br/>
           <input  type="text" placeholder="Add a Items" onChange={events}/>
           <button onClick={listOfItems}> + </button>
<ol>
  { /* <li>{inputList}</li> */}
{
Items.map( (itemval, index) =>
{
 return <ToDoLists
  id={index}
  key={index}
 text={itemval}
onSelect = {deleteItems}
/>

})
}
</ol>

       </div>
   </div>
</>
);
}

export default App;