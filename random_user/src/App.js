import React, { useState, useEffect } from 'react';
import './App.css';
import List from './components/List';
import Search from './components/Search';
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  let [userList, setUsersList] = useState([ ]);
  let [inputValue, setInputValue] = useState('');
  let [btnValue, setBtnValue] = useState(' ');
  
  

 
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=1000")
    .then(response => response.json())
   
        .then(data => setUsersList(data.results))
        
  },[])
 
  
  return (
    <Container>
      <Search  
              inputValue={inputValue} 
              setInputValue={setInputValue} 
              userList={userList} 
              btnValue = {btnValue}
              setBtnValue={setBtnValue}
      /> 

      <List userList={userList} 
            inputValue={inputValue} 
            btnValue = {btnValue}
      />  
    </Container>
)
}

export default App;
