import React , { useState } from "react";


function App() {
  const  [ list , setList ] = useState([]);
  const [pre , after] = useState('');
  const change = (event)=>{
    after(event.target.value);
   

  };
  const clickButton = () =>{
    setList(()=>{
      return [...list,pre]
    });
    after('');
    
  };
  //after('');

  return (
    <React.Fragment>
      <div><input type="text" onChange={change}></input><button onClick={clickButton}>Add</button></div>
      <ul>
    {list.map(listItem =>(
      <li>{listItem}</li>
    ))}
    </ul>

    </React.Fragment>
    
  );
}

export default App;
