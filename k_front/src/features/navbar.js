import React from 'react';
import { Link } from 'react-router-dom'; // Bu önemli!
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
const Navbar = () => {
    return (
        <nav className="nav nav-pills justify-content-center bg-light border-bottom py-2">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link" to="/fiyatlarımız">fiyatlarımız</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/Anasayfa">Ana Sayfa</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">app</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Contact"> iletisim</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/AdminPanel"> admin</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;