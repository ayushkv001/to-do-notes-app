import React,{useState} from 'react';
import trash from './trash.svg'
import './App.css';

function App() {
  const [item,setItem] = useState("");
  const [list,setList] = useState([])


  const addItem = (e)=>{
    setList((prev)=>{
      return [...prev,item];
    })
    setItem("")

  }
  const deleteItem = (id)=>{
    setList((prev)=>{
      return prev.filter((element,index)=>{
        return id!==index;
      })
    })
  }

  return (
    <div className="App">
      <div className='div1'>
        <br/>
        <h1>To-Do List</h1>
        <br/>
        <input type="text" placeholder='Add Item' value={item} onChange={(e)=>{setItem(e.target.value)}}/>
        <button className='but' onClick={addItem}>+</button>

        <ul >
          {
            list.map((items,id)=>{
              return <li><div className='items'><div className='index'>{id+1}</div><div className='item'>{items}</div><div className='image'><button onClick={()=>{deleteItem(id)}}><img src={trash} /></button></div></div></li>
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
