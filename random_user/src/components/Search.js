import React from 'react';
import { Form , Container, Row, Col, Button } from 'react-bootstrap'

export default function Search({inputValue, setInputValue}) {

    const handleInput = (e) =>{       
        setInputValue(e.target.value)
        console.log(inputValue)
    }
    return (
        <div>
            <Row>
                <Col>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Search User</Form.Label>
                        <Form.Control onChange={handleInput} type="text" placeholder="Enter name" />
                    </Form.Group>
                </Form>
                </Col>
            </Row>
        
            
        </div>
    )
}
