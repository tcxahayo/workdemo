import React , { useState}from 'react';
import './app.scss';
import InputBox from './input/input';
import ListBox from './list/list';

function App() {
  const [data, setData] = useState([]);

  const getValue = (value)=> {
    setData((data)=>{
      return data.concat(value);
    })
  }
  const demo = () =>{
    console.log(data);
  }
  const delData = (index) =>{
    let newData = [...data];
    newData.splice(index,1);
    setData(newData);
  }

  return (
    <div className="App">
      <div className="content">
        <div className="title" onClick={demo}>To-Do-List</div>
        <InputBox getValue={getValue}  />
        <ListBox str={data} delData={delData} />
      </div>
    </div>
  );
}

export default App;
