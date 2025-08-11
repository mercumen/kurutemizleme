import Navbar from "../features/navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { useEffect, useState } from "react";
import axios from "axios";
const Contact = () => {
  const [contact, setContact] = useState({});
  useEffect(() => {
    const API_BASE = 'http://muhittinercument.online'; // kendi portunu kullan
    axios.get(`${API_BASE}/SiteInfo/contact`).then(res => setContact(res.data));
  }, []);
  return (

    <div className="container">
      <header>
        <Navbar />
        <p></p>
      </header>
      iletisim
      {contact.email}
      {contact.phone}
      {contact.address}

    </div>
  )
}

export default Contact