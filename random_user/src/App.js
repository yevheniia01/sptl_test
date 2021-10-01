import React, { useState, useEffect } from 'react';
import './App.css';
import List from './components/List';
import Search from './components/Search';
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  let [userList, setUsersList] = useState([ ]);
  let [inputValue, setInputValue] = useState('');
  let [mappedUser, setMappedUser] = useState('')
  
  

 
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5000")
    .then(response => response.json())
   
        .then(data => setUsersList(data.results))
        
  },[])
 
  
  return (
    <Container>
      <Search inputValue={inputValue} setInputValue={setInputValue} userList={userList} mappedUser={mappedUser} /> 
      <List userList={userList} inputValue={inputValue} />  
    </Container>
)
}

export default App;
