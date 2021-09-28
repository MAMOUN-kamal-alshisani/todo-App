// import React from 'react'
import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form';
import ToDo from '../toDO';
import { v4 as uuid } from 'uuid';
import { Button, Form , Row, Col, Container, Modal,InputGroup, Card} from 'react-bootstrap';
// const [list, setList] = ToDo([]);
// const { deleteItem, toggleComplete,list } = ToDo(addItem);
function List(props){


return(

<>
 
<Card  className='cardl' style={{ width: '18rem' }}>
      <Card.Body>
      {props.list.map(item => (
         
        <span key={item.id}>
          <Card.Text>{item.text}</Card.Text>
          <Card.Title></Card.Title>
          <Card.Text>Assigned to: {item.assignee}</Card.Text>
          <Card.Text>Difficulty: {item.difficulty}</Card.Text>
          <Button onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete ? "completed" : "pending" }</Button>
          <Button onClick={() => props.deleteItem(item.id)}>delete </Button>
          
          <hr />
        </span>
          
        
      ))}
        </Card.Body>
        </Card>
      
</>

)




}



export default List;