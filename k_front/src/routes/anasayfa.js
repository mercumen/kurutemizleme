import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Navbar from '../features/navbar.js';
function Anasayfa() {
    const [intro, setIntro] = useState('');


    useEffect(() => {
        const API_BASE = 'http://localhost:5018';
        axios.get(`${API_BASE}/SiteInfo/intro`).then(res => setIntro(res.data));
    }, []);

    return (
        <div className='container'>
            <header>
                <Navbar />

                <p>{intro.info}</p>
            </header>
            < main className="mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Hoş Geldiniz!</h2>
                        <p>Burası yazı alanı olacak. Hizmetlerinizden bahsedin, detay verin.</p>
                    </div>

                    <div className="col-md-6">
                        <img src="../a.png" alt="Kuru Temizleme" className="img-fluid rounded" />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Anasayfa;