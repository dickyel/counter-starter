import { useState } from "react";
import classNames from "classnames";

import "./App.css";

import Navbar from "./components/Navbar";
import Container from "./components/Container";
import FormInput from "./components/Form";
import Info from "./components/Info";
import Shops from "./components/Shops";
import Empty from "./components/Empty";




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
    const newShops = [...shops];
  
    // Decrease the count
    newShops[index].count = newShops[index].count - 1;
  
    // If the count becomes 0, remove the item
    if (newShops[index].count === 0) {
      newShops.splice(index, 1);
    }
  
    setShops(newShops);
  };
  
  const handleSubmitBelanja = (e) => {
    // mencegah refresh default di browser
    e.preventDefault();

    if(!value){
      alert('list input tidak boleh kosong');
      return
    }


    // gabungan array yang lama dengan yang baru
    const tambahShops = [...shops, {
        title: value,
        count: 1
    }]

    setShops(tambahShops);
    // ketika input kembali di tambah maka set value yang input akan kosong kembali
    setValue('');
  }

  const getTotalCounts = () => {
    const totalCounts = shops.reduce((total,num ) => {
      return total + num.count
    },0)

    return totalCounts;
  }

  return (
    // react fragment
    <>

      <Navbar />
      <Container>
        <FormInput 
          onSubmit={handleSubmitBelanja}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        >
          
        </FormInput>
        {/* bagian info */}
        <Info 
          shopsLength={shops.length}
          totalCounts={getTotalCounts()}
          onDelete={() => setShops([])}
        />
        {shops.length > 0 ? (
          <Shops 
            shops={shops}
            onKurang={(index) => handleKurangCount(index)}
            onTambah={(index) => handleTambahCount(index)}
          />
        ) : (
          <Empty />
        )}
      </Container>
    </>
  );
}

export default App;
