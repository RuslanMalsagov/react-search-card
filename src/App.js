import { useState } from "react";
import { SiPuma } from "react-icons/si";
import { AiOutlineSearch } from "react-icons/ai";

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
      <header className="App-header">
        <SiPuma className="iconPuma" />
      </header>
      <div className="search">
        <input
          placeholder="Search ..."
          className="input"
          value={search}
          onChange={handleSearch}
        ></input>
        <button className="btnSearch">
          <AiOutlineSearch />
        </button>
      </div>

      <div className="main">
        <div className="cards">
          {filtered.map((item, index) => {
            return (
              <div key={index} className="card">
                <img src={item.image} alt={item.name} />
                <div className="desc">
                  <p className="nameProduct">{item.name}</p>
                  <p className="priceProduct">{item.price}</p>
                  <button
                    className={!item.status ? "btnCart" : "addBtnCart"}
                    onClick={() => handleClickAddCart(index)}
                  >
                    {!item.status ? "Добавить в корзину" : "Удалить из корзины"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
