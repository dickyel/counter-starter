import { useState } from 'react';

import './App.css';
import shopIcon from './assets/shopping-icon.svg';

function App() {

  return (
    // react fragment
    <>

      {/* 
       ini adalah bagian navbar 
      */}
      <nav className='nav'>
        <img className='nav-img' src={shopIcon} alt='shop-icon' />
        <h1 className='nav-title'>List Belanjaan</h1>

      </nav>

      <section className='container'>
        <form className='form-belanja'>
          <input 
          className='input-belanja'
          type='text'
          placeholder='buat list belanjaan'
          />
          <button type='submit' className='tombol-tambah'>Tambah</button>
        </form>
      </section>
    </>    
  );
}

export default App;
