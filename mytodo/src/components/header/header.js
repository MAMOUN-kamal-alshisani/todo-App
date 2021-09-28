import React from "react";
// import { Container,Nav} from 'react-bootstrap';
// import useForm from '../../hooks/form'

import { Navbar, Nav, Container } from 'react-bootstrap'
// import { Navbar, Button, Alignment, } from "@blueprintjs/core";
import Login from "../context/login";
function Header(props) {

        // const {incomplete  } = useForm(props.addItem);

        return (
            <>
          
             
       
       
            <Navbar>
<Container>
{/* <Header/> */}
    <Nav >
        <Nav.Link href="#home"> Home</Nav.Link>
        
    </Nav>
    <Login />
</Container>

</Navbar>
                
                
                </>
        )
    
    }
    {/* <h1>To Do List: {incomplete} items pending</h1> */}
    // Must be called contextType
    // then, we will have access to this.context
    // static contextType = ThemeContext;

   
   


export default Header;

