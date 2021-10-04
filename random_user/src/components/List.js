import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

export default function List({userList, inputValue, btnValue}) {
    console.log(btnValue)
    return (
        <div>      
            <Row> 
                { userList.map((user)=>{
                    return(
                        <>
                { btnValue == user.location.country || inputValue == user.dob.age ?
                    <Col style={{marginBottom: '1rem'}}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={user.picture.large} />
                        <Card.Body>
                            <Card.Title>Name: {user.name.first} {user.name.last}</Card.Title>
                            <Card.Text>
                                Age: {user.dob.age}
                                <br></br>
                                Location: {user.location.country}, {user.location.city}
                                <br></br>
                                Cell: {user.cell}
                            </Card.Text>
                        </Card.Body>
                    </Card>        
                    </Col>: null}
                    </>
                    )
                })}
            </Row>
           


        </div>
    )
}
