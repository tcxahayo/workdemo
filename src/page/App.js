import React , { useState,useEffect}from 'react';
import './App.scss';
import InputBox from './input/input';
import ListBox from './list/list';

function App() {
  const [data, setData] = useState([]);

  //获取input值
  const getValue = (value)=> {
    setData((data)=>{
      return data.concat(value);
    })
  }
  //删除数据
  const delData = (index) =>{
    let newData = [...data];  //数据不扩展开另存储，页面就不会重新渲染
    newData.splice(index,1);
    setData(newData);
  }

  //使用本地存储，使刷新的时候数据不会丢失
  useEffect(()=>{
    const data1 = localStorage.getItem('data') || '[]';
      setData(JSON.parse(data1))
  },[])
  useEffect(()=>{
      localStorage.setItem('data',JSON.stringify(data))
  },[data])
 

  return (
    <div className="App">
      <div className="content">
        <div className="title">To-Do-List</div>
        <InputBox getValue={getValue}  />
        <ListBox str={data} delData={delData} getValue={getValue} />
      </div>
    </div>
  );
}

export default App;
