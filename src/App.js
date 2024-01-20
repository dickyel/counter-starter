import { useState } from "react";
import classNames from "classnames";

import "./App.css";
import shopIcon from "./assets/shopping-icon.svg";
import plusIcon from "./assets/plus-icon.svg";
import minusIcon from "./assets/minus-icon.svg";

function App() {
  const [value, setValue] = useState("");

  const [shops, setShops] = useState([
    {
      title: "Susu Ultramilk",
      count: 1,
    },
    {
      title: "Telor",
      count: 10,
    },
    {
      title: "Ciki",
      count: 5,
    },
  ]);

  const handleTambahCount = (index) => {
    const newShops = [...shops]

    newShops[index].count = newShops[index].count + 1

    setShops(newShops)
  }

  const handleKurangCount = (index) => {
    const newShops = [...shops]

    newShops[index].count = newShops[index].count - 1

    setShops(newShops)
  }

  const handleSubmitBelanja = (e) => {
    // mencegah refresh default di browser
    e.preventDefault();


    // gabungan array yang lama dengan yang baru
    const tambahShops = [...shops, {
        title: value,
        count: 1
    }]

    setShops(tambahShops);
  }

  return (
    // react fragment
    <>
      <nav className="nav">
        <img className="nav-img" src={shopIcon} alt="shop-icon" />
        <h1 className="nav-title">List Belanjaan</h1>
      </nav>

      <section className="container">
        <form className="form-belanja" onSubmit={handleSubmitBelanja}>
          <input
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
            className="input-belanja"
            type="text"
            placeholder="buat list belanjaan"
          />
          <button type="submit" className="tombol-tambah">
            Tambah
          </button>
        </form>

        {shops.length > 0 ? (
          <div className="shops">
            {shops.map((shop, index, arr) => {
              return (
                // jika bukan element terakhir maka akan tetep muncul divider nya
                <div
                  key={index}
                  className={`shop ${
                    !(arr.length === index + 1) && "shop-divider"
                  }`}
                >
                  {shop.title}
                  <div className="shop-img-wrapper">
                    <div className="shop-count">{shop.count}</div>
                    <button onClick={ () => handleKurangCount(index)} className="shop-action-button">
                      <img src={minusIcon} alt="minus-icon" />
                    </button>
                    <button onClick={ () =>  handleTambahCount(index) } className="shop-action-button">
                      <img src={plusIcon} alt="plus-icon" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>Kosong Bro</div>
        )}
      </section>
    </>
  );
}

export default App;
