import React , { useState,useEffect}from 'react';
import './app.scss';
import InputBox from './input/input';
import ListBox from './list/list';
import Login from './login/login';

function App() {
  const [data, setData] = useState([]);
  const [localData, setLocalData] = useState([]);

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
    if(data.length > 0){
      localStorage.setItem('data',data)
    }
  },[data])
  useEffect(()=>{
    const data1 = localStorage.getItem('data');
    if(data1){
      setData((data)=>{
        return data.concat(data1.split(','));
      })
    }
  },[])


  return (
    <div className="App">
      <div className="content">
        <div className="title">To-Do-List</div>
        <InputBox getValue={getValue}  />
        <ListBox str={data} delData={delData} />
      </div>
    </div>
  );
}

export default App;
