import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        
        <div className="navbar bg-gray-500">
            <div className="flex-1">
                <Link to='/home' className="btn btn-ghost normal-case text-3xl">Quize2Evaluate</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
               
                <li><Link to='/home'> Home</Link></li>
                <li><Link to='/statistics'> Statistics </Link></li>
                <li><Link to='/blog'> Blog</Link></li>
                
                
                
                </ul>
            </div>
        </div>
    );
};

export default Header;