import React, { useState } from 'react';
import { v4 as randomId } from 'uuid';
import './app.css';

function App(){

  const [userInput, setUserInput] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingItemId, setEditingItemId] = useState(0);

  function changeUserInput(e){
    let input = e.target.value
    setUserInput(input);
  }

  function addToList(){
    if(userInput !== ''){
      if(isEditing && editingItemId !== 0){
        let listCopy = [...list];
        let newList = listCopy.map(val => {
          if(val.id === editingItemId) val.value = userInput;
          return val;
        });
        setList(newList);
        setUserInput('');
        setIsEditing(!isEditing);
        setEditingItemId(0);
      }else{
        const newItem = {
          id: randomId(),
          completed : false,
          value: userInput
        }
        let newlist = [...list];
        newlist.push(newItem);
        setList(newlist);
        setUserInput('');
      }
    }
  }

  function deleteItem(id){
    const newlist = [...list];
    const updateList = newlist.filter(val => val.id !== id);
    setList(updateList);
  }

  function itemToEdit(id){
    const listCopy = [...list];
    const editingItem = listCopy.filter(val => val.id === id);
    let itemvalue = editingItem[0].value;
    let itemId = editingItem[0].id;
    setUserInput(itemvalue);
    setIsEditing(!isEditing);
    setEditingItemId(itemId);
  }

  function completed(id){
    const listCopy = [...list];
    let newList = listCopy.map(val => {
      if(val.id === id) {
        if(val.completed === false){
          val.completed = true;
        }else{
          val.completed = false;
        }
      }
      return val;
    });
    setList(newList);
  }

  return (
    <>
      <div className='container mt-5'>
        <div className='card'>
          <h1 className='ml-3 mt-3 font-weight-bold'>My List</h1>
          <div className='card-body'>
            <h3>Add an Item ...</h3>
            <input className='form-control' onChange={changeUserInput} value={userInput} type='text' placeholder='type item here ...' />
            <button className='btn btn-primary mt-2' onClick={addToList} >Add Item</button>          
          </div>
          <ul className='list-group'>
              {
                list.map((val, idx) =>{
                  return(
                    <>
                      <div key={val.id}>
                        <li key={val.id} className={`m-4 list-group-item ${val.completed ? 'completed' : ''}`} onClick={() => completed(val.id)} >
                          {idx + 1}- {val.value}
                        </li>
                        <button className='btn btn-danger' onClick={()=>deleteItem(val.id)} >Delete <i className="fas fa-trash"></i></button>
                        <button className='btn btn-success ml-3' onClick={()=>itemToEdit(val.id)} >Edit <i className="far fa-edit"></i></button>
                      </div>
                    </>
                    );
                  }
                )
              }
            </ul>
          </div>
      </div>
    </>
  );

}

export default App;
