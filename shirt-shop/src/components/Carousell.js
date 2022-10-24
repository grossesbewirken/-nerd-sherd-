// Packages Import
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// Styles Import
import '../styles/carousel.scss';
import "../styles/App.scss";

// Files Import
import sherds from "../data/products";
import fjm from '../images/fjm-logo.png';
const Carousell = ({showCarousel, counter}) => {

const navigate = useNavigate()

const getSherd=()=>{
  const active = document.querySelector(".active")
  const slide = active.ariaLabel.slice(6)
  showCarousel()
  navigate(`/products/${slide}`) 
}

  return (
    <div className='carousel-outer-container'>
      {counter < 1
        ? 
      (<h1 className="carousell-headline display-1" >
        nerdsherd
        </h1>)
        :
      (<h1 className="carousell-headline display-1">
        Thank you for shopping</h1>)
      }
      <Carousel className='carousel-inner-container'>
          {sherds.map((sherd, i) => {
            console.log(sherd)
            return (
              <Carousel.Item
                key={i}
                interval={3000} 
                className="carousel-item-container">             
                    <div className="carousel-image-container">
                      <img src={sherd.sherdColor[sherd.backgroundColor]} alt="shirt" 
                      width="60%" /> 
                    <div className="carousel-text-field">
                      <p style={{color: sherd.backgroundColor === "white" ? "black" : "white"}}className="sherd-text-all carousel-text">{sherd.text}</p>
                    </div>            
                  </div>             
              </Carousel.Item>
            )
          })}
        </Carousel>
        <div className='carousel-btn'>
          <img
            src={fjm}
            width="45"
            height="45"
            className="d-inline-block align-top"
            alt="FJM logo"
          />
          <button onClick={()=>getSherd()}>getSherd</button>
          <Link className="link" to="/">
            <button 
              className="button-container-single button" 
              onClick={showCarousel}>ENTER
            </button>
          </Link>
      </div>
    </div>  
  );
};

export default Carousell;
