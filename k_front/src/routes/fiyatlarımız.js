import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; // Kendi CSS dosyan varsa
import Navbar from '../features/navbar.js';

function Fiyatlarimiz() {
    const [intro, setIntro] = useState('');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const API_BASE = 'http://muhittinercument.online'; // kendi portunu kullan

        //axios.get(`${API_BASE}/SiteInfo/intro`).then(res => setIntro(res.data));
        axios.get(`${API_BASE}/SiteInfo/products`).then(res => setProducts(res.data));
    }, []);
    return (


        <div className="container">
            <header className="header">
                <Navbar />
                <p>
                </p>
                <p>



                </p>
            </header>

            <section className="products">
                <ul>
                    {products.map(p => (
                        <li key={p.id}>
                            {p.name} - {p.price} TL
                        </li>
                    ))}
                </ul>
            </section>

        </div>

    );
}

export default Fiyatlarimiz;