import React, { useEffect, useState,useContext } from 'react';
import useForm from '../hooks/form';
import List from './list/list'
import Forms from './form/form'
import { v4 as uuid } from 'uuid';
import Pagination from "./pagination/pagination";
// import Forms from '../components/form/'
import './todo.css'
import { Button, Form , Row, Col, Container, Modal,InputGroup, Card} from 'react-bootstrap';
// import { SettingsContext } from '../../context/settings';
function ToDo  () {
  // const settings = useContext(SettingsContext);
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);
  const [currentPage, setCurrentPage] = useState(1);
  const [PerPage] = useState(3);

  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map( item => {
      if ( item.id == id ) {
        item.complete = ! item.complete;
      }
      return item;
    });

    setList(items);

  }

    
  useEffect(() => {
    let Count = list.filter(item => !item.complete).length;
    setIncomplete(Count);
    document.title = `To Do List: ${incomplete}`;
  }, [list] ,incomplete);

  const LastCard = currentPage * PerPage;
  const FirstCard = LastCard - PerPage;
  const currentCard = list.slice(FirstCard, LastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
   
   <>
   <div>
      <Forms addItem={addItem} />
      </div>

<List toggleComplete={toggleComplete}
     deleteItem={deleteItem}
     list={list}
     />
        <Pagination
        listPerPage={PerPage}
        totalCards={list.length}
        paginate={paginate}
      />
</>

  );
 
};

export default ToDo;