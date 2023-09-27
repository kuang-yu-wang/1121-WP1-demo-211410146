import { useState } from 'react';
import'./App.css';
import menu_data from './data';
import Menu_46 from './components/Menu_46';

const App = () => {
  const [menu, setMenu] = useState(menu_data);
  // console.log(menu);
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

    <Menu_46 menu={menu_data} />
  </section>
  );
}
export default App;