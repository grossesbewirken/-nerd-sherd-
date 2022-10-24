// Packages Import
import { useContext} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

// I M P O R T   C O N T E X T
import ColorContext from "../context/colorContext";


// I M P O R T   S T Y L I N G
import '../styles/sidebar.scss';
import "../styles/showsherds.css"


// Files Import
import fjm from '../images/fjm-logo.png';
import sherds from "../data/products"

const Sidebar = ({toggle, showSidebar, currColor, setFilterList}) => {
  const [colorContext] = useContext(ColorContext)
  const navigate = useNavigate()

  const filterMovie = () => {
    const newList = sherds.filter(sherd => sherd.category === "Movie")
    setFilterList(newList)
    navigate("/")
  }
  const filterMusic = () => {
    const newList = sherds.filter(sherd => sherd.category === "Music")
    setFilterList(newList)
    navigate("/")
  }
  const filterPhilosophy = () => {
    const newList = sherds.filter(sherd => sherd.category === "Developer Philosophie")
    setFilterList(newList)
    navigate("/")
  }
  const filterNothing = () => {
    const newList = []
    setFilterList(newList)
    navigate("/")
  }

  return (
    <div className="sidebar">
      <div className="fixed-sb">
        {/* Toggle regulates if the "Outer Sidebar Button" is shown or not. It is also chained to the window size */}
        <button className=
        {`sidebar-inner-toggle-button 
        ${!toggle ?
          "hide-inner-sidebar-button" :
          "hide-inner-sidebar-button-onClick"}`}
        onClick={showSidebar}
        >hideSidebar</button>
      </div>
      <div className="fixed-sb">

        {/* F I L T E R */}
        <h4 className="hl fh">
          {`sherds.filter((sherd) => {`}
        </h4>
        <ul className="ul-sidebar">
          <li className="li-sidebar fb" onClick={filterNothing}>main <span style={{color: colorContext[currColor] }}>{"=>{}"}</span></li>
          <li className="li-sidebar fb" onClick={filterMovie}>movies && series <span style={{color: colorContext[currColor] }}>{"=>{}"}</span></li>
          <li className="li-sidebar fb" onClick={filterMusic}>music <span style={{color: colorContext[currColor] }}>{"=>{}"}</span></li>
          <li className="li-sidebar fb" onClick={filterPhilosophy}>nerdic philosophy <span style={{ color: colorContext[currColor] }}>{"=>{}"}</span></li>
        </ul>
        <h4 className="hl fh">{`});`}</h4>

        {/* R U B R I K E N */}
        <h4 className="hl fh">
          {`sherds.find((your) => {`}
        </h4>
        <ul className="ul-sidebar">
          <li className="li-sidebar fb">
            <Link className='link' to="/favoriten">your favorites <span style={{ color: colorContext[currColor] }}>{"=>{}"}</span>
            </Link>
          </li>
          <li className="li-sidebar fb">
          <Link className='link' to="/shoppingCart">your shopping cart<span style={{ color: colorContext[currColor] }}>{"=>{}"}</span></Link>
          </li>
        </ul>
        <h4 className="hl fh">{`})`}</h4>

        <div>
          <img
                  src={fjm}
                  width="45"
                  height="45"
                  className="d-inline-block align-top"
                  alt="FJM logo"
                />
        </div>  
      </div>
    </div>
  );
};

export default Sidebar;
