import './index.css'
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import { useState } from 'react';

function Layout() {
    // const [showNav, setShowNav] = useState(false);
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