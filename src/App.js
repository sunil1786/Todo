import React, { useState } from 'react'
import TodoLists from './TodoLists';

function App() {
  const [inputList, setInputList] = useState();  //useState implement
  const [Items, setItems] = useState([]);   // Storing items in list

  const itemEvent = (event) => {      
    setInputList(event.target.value);
  };
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");  // Empty the input after add lists
  };
  // Deleting todo lists
  const deleteItems =(id)=>{       
    console.log("Deleted Successfully ");
    
    setItems((oldItems)=> {
      return oldItems.filter((arrEle, index) =>{   // filter the data to delete 
        return index !== id;        // match the index and delete items(by using id) 

      });
    });
};
  return (
    <>
    <div className='Main_div'>
      <div className='center_div'>
        <br/>
        <h1>Todo List</h1>
        <br/>
        <input type="text" placeholder="Add a items" value={inputList} onChange = {itemEvent} />
        <button onClick={listOfItems}> + </button>

        <ol>
          {/* <li>{inputList}</li> */}
          {Items.map((itemval, index)=>{
            return <TodoLists key={index} id={index} text={itemval} onSelect={deleteItems} />;
          })}
        </ol>


      </div>
    </div>
    </>
  )
}

export default App