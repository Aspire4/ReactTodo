import React, { useState } from 'react';
import './App.css'
import TodoList from './TodoList';
function App() {

    const [inputList, setInputList] = useState('')
    const [items, setItems] = useState([]);

    const itemEvent = (e) => {
        setInputList(e.target.value);
    };

    const listOfItems = () => {
            setItems((oldItems) => {
                return [...oldItems, inputList]
            })
          setInputList('');  
    }

    return (
        <>
            <div className='main_div'>
                <div className='crnter_div'>
                    <br />
                    <h1> Todo List </h1>
                    <br />
                    <input type='text' value={inputList} placeholder='Add a Items' onChange={itemEvent} />
                    <button onClick={listOfItems}> + </button>

                    <ol>
                          {items.map((itemval) => {
                          return <TodoList text= {itemval}/>
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default App;
