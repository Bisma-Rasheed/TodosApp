import React, { useState } from 'react';
//import AddIcon from '@mui/icons-material/Add';

const Li = (props) => {
  console.log(props.id);
  return (
  <li><span><button onClick={()=>{props.onSelect(props.id)}}>x</button></span>{props.text}</li>
  );
}


const App = () => {

  const [items, setItems] = useState([]); //array of items (state)

  const addItems = () => {
    let data = document.getElementById('data').value;
    if(data!=='' && items.length<6){
        document.getElementById('data').value ='';
        setItems(()=>[...items, data]);
    }
    else{
      alert('Possible issues:\n1. Input field must not be empty\n2. Limit exceeded');
    }
  }
  
  const deleteItems = (itemId) => { //id of item we want to delete
      setItems((items)=>{
          return items.filter((arrItem, index)=>{ //filters thrugh array and returns the array without that item that needs to be deleted
            return index!==itemId;
          })
      })
  }


  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br/>
          <h1>To-Do List</h1>
          <br/>
          <input id='data' type='text' placeholder='Add an item..'/>
          <button onClick={addItems}>+</button>
          <ol>
            {items.map((itemVal, index)=>
              <Li text={itemVal}
                  id={index}
                  key={index}
                  onSelect={deleteItems}
              />)}
          </ol>
        </div>
      </div>
    </>
  )
}

export default App;