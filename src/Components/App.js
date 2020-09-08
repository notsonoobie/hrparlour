import React from 'react';
import '../Styles/App.css';
import Navbar from './Navbar';
import Carouseldisplay from './Carouseldisplay';
import Card from './Card';
import Clients from './Clients'
import Footer from './Footer'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Carouseldisplay />
      <Card />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
