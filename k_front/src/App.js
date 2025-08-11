import React, { useEffect, useState } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Kendi CSS dosyan varsa
import Navbar from './features/navbar.js';

function App() {
  const [intro, setIntro] = useState('');
  const [products, setProducts] = useState([]);
  const [contact, setContact] = useState({});
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });
  const [newPrice, setNewPrice] = useState({ newPrice: '' })

  const API_BASE = 'http://muhittinercument.online';
  useEffect(() => {
    const API_BASE = 'http://muhittinercument.online'; // kendi portunu kullan

    axios.get(`${API_BASE}/SiteInfo/intro`).then(res => setIntro(res.data));
    axios.get(`${API_BASE}/SiteInfo/products`).then(res => setProducts(res.data));
    axios.get(`${API_BASE}/SiteInfo/contact`).then(res => setContact(res.data));
  }, []);
  //const handleChangePrice = async 
  const handleChangeIntro = async (e) => {
    e.preventDefault();

    const updatedIntro = {
      info: intro  // <-- info olmalı, backend'deki propery'e göre
    };
    try {
      await axios.put(`${API_BASE}/SiteInfo/intro`, updatedIntro);
      alert("Intro güncellendi!");
    } catch (error) {
      console.error("PUT hatası:", error);
    }
  }
  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE}/SiteInfo/products`, {
        name: newProduct.name,
        price: parseFloat(newProduct.price)
      });
      setProducts(prev => [...prev, response.data]);
      setNewProduct({ name: '', price: '' }); // formu sıfırla
    } catch (error) {
      console.error('Ürün ekleme hatası:', error);
      alert('Ürün eklenemedi!');
    }

  };



  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`${API_BASE}/SiteInfo/products/${productId}`)
      setProducts(prev => prev.filter(p => p.id !== productId));
    }
    catch (error) {
      console.error('silme hatasi:', error);
      alert('urun silinmedi')
    }



  };

  return (
    <div className="container">
      <header className="header">
        <Navbar />

        <h1>Benim Kuru Temizleme</h1>
        <p>{intro.info}</p>
      </header>

      <section className="products">
        <h2>Hizmetlerimiz</h2>
        <ul className='list-unstyled'>
          {products.map(p => (
            <li key={p.id} className="d-flex justify-content-between align-items-center my-2">
              <span>{p.name}: {p.price} TL</span>
              <button onClick={() => handleDeleteProduct(p.id)} className="btn btn-danger btn-sm">Sil</button>

            </li>
          ))}
        </ul>
      </section>

      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          placeholder="Ürün Adı"
          value={newProduct.name}
          onChange={e => setNewProduct({ ...newProduct, name: e.target.value })}
          className="form-control my-2"
          required
        />
        <input
          type="number"
          placeholder="Fiyat (TL)"
          value={newProduct.price}
          onChange={e => setNewProduct({ ...newProduct, price: e.target.value })}
          className="form-control my-2"
          required
        />
        <button type="submit" className="btn btn-primary">Ekle</button>
      </form>
      <form onSubmit={handleChangeIntro}>
        <input
          type="text"
          placeholder="Yeni Intro Yazısı" // veya sadece "Intro"
          value={intro.info}
          onChange={(e) => setIntro(e.target.value)}
        />

        <button type="submit">Güncelle</button>
      </form>

      <footer className="footer">
        <h3>İletişim</h3>
        <p>Email: {contact.email}</p>
        <p>Telefon: {contact.phone}</p>
        <p>Adres: {contact.address}</p>
      </footer>

    </div>
  );
}

export default App;
