import React from 'react';
import { Form , Container, Row, Col, Button } from 'react-bootstrap'

export default function Search({inputValue, setInputValue, btnValue, setBtnValue}) {

    const handleInput = (e) =>{       
        setInputValue(e.target.value)
        console.log(inputValue)
    }
    const handleClick = (e) =>{
        setBtnValue(e.target.value)
        console.log(btnValue)
    }
    return (
        <div>
            <Row>
                <Col>
                   <h2 style={{margin: '1rem'}}>Search User by Age</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">    
                        <Form.Control onChange={handleInput} type="text" placeholder="Enter name" />
                    </Form.Group>
                </Form>
                </Col>
            </Row>
                <Row id="btnRow">
                    <Col>
                        <Button className="categoryBtn" onClick={handleClick} value='United Kingdom'>
                            United Kingdom
                        </Button>
                    </Col>
                    <Col>
                        <Button className="categoryBtn" onClick={handleClick} value='Norway'>
                            Norway
                        </Button>
                    </Col>
                    <Col>
                        <Button className="categoryBtn" onClick={handleClick} value='Turkey'>
                            Turkey
                        </Button> 
                    </Col>
                    <Col>
                        <Button className="categoryBtn" onClick={handleClick} value='France'>
                            France
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1 style={{textAlign: 'center', margin: '2rem'}}>Make sure to click Clear Category Button before searching by age </h1>
                    </Col>
                </Row>
                <Row id="clearBtnRow">
                    <Col>
                        <Button className="clearCatBtn" onClick={handleClick} value=' '>
                            Clear Category
                        </Button>
                    </Col>
                </Row>
            
        
            
        </div>
    )
}
