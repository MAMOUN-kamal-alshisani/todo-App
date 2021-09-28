


import React from "react";
import { Button, Form , Row, Col, Container, Modal,InputGroup} from 'react-bootstrap';
import useForm from '../../hooks/form'
import '../../App.css'
// import List from '../list/list'


function Forms(props){
  const { handleChange, handleSubmit, } = useForm(props.addItem);
  return(
    <>


        
        <Modal show= {true} className='model'>
        <Container>
        <Form onSubmit={handleSubmit}>
        <h2>Add To Do Item</h2>
        
        <Form.Label>
        <h2>To Do Item</h2>
        </Form.Label>
        <Form.Group>
        <Form.Label >
         <input onChange={handleChange} name="text" type="text" placeholder="Item Details"/>
        </Form.Label>
      </Form.Group>

      <Form.Label>
       <h2> assigned TO</h2>
        </Form.Label>
      <Form.Group>
      
        <Form.Label >
         <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name"/>
        </Form.Label>
      </Form.Group>
      <Form.Label className='Difficulty'>
      <h2>  Difficulty</h2>
        </Form.Label>
      <Form.Group>
      
        <Form.Label >
        <input onChange={handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" className='difficulty'/>
        </Form.Label>
      </Form.Group>

      <Form.Group>
        <Button  className='button1' variant="primary" type="submit" onChange={handleSubmit}>Add Item</Button>
        </Form.Group>
<Col xs={9}>
  


      </Col>
      </Form>
        
      </Container>
      </Modal>
      
        </>
          
              
  )
        }
    
        export default Forms;