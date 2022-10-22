// Packages Import
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useContext } from "react";


import ColorContext from "../context/colorContext";

// Styles Import
import '../styles/header.scss';
import "../styles/App.scss"


// Files Import
import sherds from "../data/products";


const Header = ({setFilterList, currColor, setCurrColor}) => {
  const inputHandler = (event)=>{
    const searchTerm = event.target.value
    const newFilter = sherds.filter(sherd => 
      sherd.text.toLowerCase().includes(searchTerm.toLowerCase()) || 
      sherd.author.toLocaleLowerCase().includes(searchTerm.toLowerCase()) ||
      sherd.date.includes(searchTerm))
    setFilterList(newFilter)
  }
  const [colorContext] = useContext(ColorContext);

  return (
<Navbar bg="dark" expand="lg" className="shadow-lg sticky-top">
    <Container fluid className="d-flex justify-content-between">
      <Navbar bg="dark">
        <Container>
        <Navbar.Brand href="#home" className="text-white">
        <span style={{color: colorContext[currColor]}}>{"nerd"}</span>sherd
        </Navbar.Brand>
        </Container>
      </Navbar>


      <Navbar.Toggle aria-controls="navbarScroll" className="border border-light"/>
      <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
        </Nav>
        <Form className="d-flex justify-content-end">
          <div className="input-group">
            <span className="input-group-text search" id="basic-addon1">
                
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              
            </span>
            <input type="text" className="me-2 form-control search" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" onChange={(event)=>inputHandler(event)}/>
            </div>
            <Link className="link" to="/favoriten">
              <Button
              variant="outline-dark"
              className="me-2 text-white border border-light circle"
              >
              <FontAwesomeIcon className="heart"
                icon={faHeart}/>  
              </Button>
            </Link>
            <Link className='link' to="/shoppingCart">
              <Button
              variant="outline-dark"
              className="me-2 text-white border border-light circle">
              <FontAwesomeIcon
                icon={faCartShopping} />              
              </Button>
            </Link>

        </Form>
      </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default Header;
