import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function List({userList, inputValue}) {
    // console.log(inputValue)
    // console.log(userList)
    return (
        <div>
            <Row>
                <Col>
                 <h1 id='listTitle'>Search User by Age</h1>
                </Col>
            </Row>
            <Row> 
                { userList.map((user)=>{
                    
                    return(
                        <>
                { inputValue == user.dob.age ?
                
                    <Col>
                    <img src={user.picture.large}/>
                    <h2>Name: {user.name.first} {user.name.last}</h2>
                    <h4>Age: {user.dob.age}</h4>
                    <h4>Location: {user.location.country}, {user.location.city}</h4>
                    <h4>Cell: {user.cell}</h4>
                    <h4></h4>
                    
                    </Col>: null}
                    </>
                    )
                })}
            </Row>


        </div>
    )
}
