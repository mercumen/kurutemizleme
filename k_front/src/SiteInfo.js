import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SiteInfo() {
  const [intro, setIntro] = useState('');
  const [products, setProducts] = useState([]);
  const [contact, setContact] = useState({});

  useEffect(() => {
    const API_BASE = 'http://localhost:5018'; // Kendi ASP.NET Core portunu yaz

    axios.get(`${API_BASE}/SiteInfo/intro`)
      .then(res => setIntro(res.data))
      .catch(err => console.error(err));

    axios.get(`${API_BASE}/SiteInfo/products`)
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));

    axios.get(`${API_BASE}/SiteInfo/contact`)
      .then(res => setContact(res.data))
      .catch(err => console.error(err));

  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Giriş</h1>
      <p>{intro}</p>

      <h2>Ürünler</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.name} - {p.price} TL</li>
        ))}
      </ul>

      <h2>İletişim Bilgileri</h2>
      <p>Email: {contact.email}</p>
      <p>Telefon: {contact.phone}</p>
      <p>Adres: {contact.address}</p>
    </div>
  );
}

export default SiteInfo;
