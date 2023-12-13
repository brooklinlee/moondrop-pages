// npm modules
import { NavLink } from "react-router-dom"

// css
import '../NavBar/NavBar.css'

// images
import MDPLogo from '../../assets/images/MDP-Logo.svg'

const NavBar = () => {
  return (  
    <>
    <nav>
      <NavLink>ABOUT</NavLink>
      <NavLink to='/'><img src={MDPLogo} alt="Moondrop Pages Logo" /></NavLink>
      <div className="subnav">
        <button className="subnav-btn">PAGES</button>
        <div className="subnav-content">
          <NavLink to='/001-clementine'>001 - Clementine</NavLink>
          <NavLink>002 - Poppy</NavLink>
          <NavLink>003 - Angel</NavLink>
        </div>
      </div>
    </nav>
    </>
  )
}

export default NavBar