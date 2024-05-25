import './index.css'
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
function Layout() {
    return(
        <div className="App">
            <Sidebar/>
            <div className='page'>
                <Outlet />
            </div>
        </div>
    )


}

export default Layout