import './App.css';
import React, { useEffect,useState } from 'react';
function App() {
 const [data,setData] =useState([]) 
  useEffect(() => {
   fetch("http://20.244.56.144/train/register").then((result) => {
    result.json().then((resp)=>{
      setData(resp)
    })
   })
  },[])
  console.warn(data)
  return (
    <div className="App">
      <h1>Train Website</h1>
        <table border="1">
          <tr>
            <td>
              Id
            </td>
            <td>
              Name
            </td>
            <td>
              email
            </td>
            
          </tr>
        </table>
    </div>
  );
}

export default App;
 