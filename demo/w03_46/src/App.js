import { useState } from 'react';
import'./App.css';
import menu_data from './data';

const App = () => {
  const [menu, setMenu] = useState(menu_data);
  console.log(menu);
  return (
    <section className="menu">
    <div className="title">
      <h2>our menu - 211410146</h2>
      <div className="underline"></div>
    </div>
    <div className="btn-container">
      <button type="button" className="filter-btn" data-id="all">all</button>
      <button type="button" className="filter-btn" data-id="breakfast">breakfast</button>
      <button type="button" className="filter-btn" data-id="lunch">lunch</button>
      <button type="button" className="filter-btn" data-id="dinner">dinner</button>
      <button type="button" className="filter-btn" data-id="dessert">dessert</button>
      <button type="button" className="filter-btn" data-id="shakes">shakes</button>
    </div>
    <div className="section-center">
      {menu.map((item) => {
        const { id, title, img, desc, price } = item;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  </section>
  );
}
export default App;