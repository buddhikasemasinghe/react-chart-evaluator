import React from 'react';
import { Link } from "react-router-dom";

import './Header.css'

const Header = () => {
    return (
        <header>
            <div className='header-container'>
                <Link to='/'>Home</Link>
                <Link to='/chartist'>Chartist</Link>
                <Link to='/chartjs'>ChartJS</Link>
                <Link to='/echart'>eChart</Link>
                <Link to='/c3'>C3</Link>
            </div>
        </header>
    );
};

export default Header;
