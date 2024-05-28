import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/PlotgardenerLogo.png'
import './index.scss'
import { FaFile } from "react-icons/fa";
import { BsBoundingBoxCircles } from "react-icons/bs";
// import { faFile } from '@fortawesome/free-regular-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Sidebar(){
    function pageUpdate(){
        doPageUpdate(Math.random())
    }
    return(
        <div className='nav-bar'>
        <Link className ='logo' to='/'>
            <img src={Logo} alt='logo'></img>
        </Link>

        <nav>
            <NavLink exact="true" activeclassname="active" to="/" className='navigation-link'>
                <FaFile className='icon-images'/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/plots-page">
                <BsBoundingBoxCircles className='icon-images'/>
            </NavLink>
        </nav>
    </div>

    )
    
}
export default Sidebar