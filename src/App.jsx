import { useState } from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  const arrProducts = [
    {
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/383350/02/sv01/fnd/UKR/w/320/h/320/fmt/png",
      name: "Кеды CA Pro LS Trainers",
      price: "2090.0 $",
      status: false,
    },
    {
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/375811/03/sv01/fnd/UKR/w/320/h/320/fmt/png",
      name: "Кеды CA Pro Heritage Trainers",
      price: "2090.0 $",
      status: false,
    },
    {
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/384233/01/sv01/fnd/UKR/w/320/h/320/fmt/png",
      name: "Кроссовки Slipstream Trainers",
      price: "2090.0 $",
      status: false,
    },
    {
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/383052/03/sv01/fnd/UKR/w/320/h/320/fmt/png",
      name: "Кроссовки Supertec Trainers",
      price: "2090.0 $",
      status: false,
    },
    {
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/383829/02/sv01/fnd/UKR/w/320/h/320/fmt/png",
      name: "Кроссовки Mirage Sport Loom",
      price: "2090.0 $",
      status: false,
    },
    {
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/383822/02/sv01/fnd/UKR/w/320/h/320/fmt/png",
      name: "Кроссовки X-Ray² Safari Wns",
      price: "2090.0 $",
      status: true,
    },
  ];

  const [product, setProduct] = useState(arrProducts);
  const [search, setSearch] = useState("");

  const handleClickAddCart = (id) => {
    setProduct(
      product.map((item, index) => {
        if (index === id) {
          item.status = !item.status;
          return item;
        }
        return item;
      })
    );
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filtered = product.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="App">
      <Header />
      <Search handleSearch={handleSearch} search={search} />
      <Cards filtered={filtered} handleClickAddCart={handleClickAddCart} />
    </div>
  );
}

export default App;
