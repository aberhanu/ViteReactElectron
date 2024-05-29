import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/PlotgardenerLogo.png'
import './index.scss'
import { FaFile } from "react-icons/fa";
import { BsBoundingBoxCircles } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import { LuNetwork } from "react-icons/lu";
import { MdIosShare } from "react-icons/md";

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
            <NavLink exact="true" activeclassname="active" to="/nodes-page">
                <LuNetwork className='icon-images'/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/code-page">
                <FaCode className='icon-images'/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/share-page">
                <MdIosShare className='icon-images'/>
            </NavLink>
        </nav>
    </div>

    )
    
}
export default Sidebar