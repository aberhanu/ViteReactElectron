import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/PlotgardenerLogo.png'
import './index.scss'

function Sidebar(){
    return(
        <div className='nav-bar'>
        <Link className ='logo' to='/'>
            <img src={Logo} alt='logo'></img>
        </Link>

        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <img className='place-holder' src="https://via.placeholder.com/150" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/plots-page">
                <img className='place-holder' src="https://via.placeholder.com/150" />
            </NavLink>
        </nav>
    </div>

    )
    
}
export default Sidebar