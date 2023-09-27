import { useState } from 'react';
import'./App.css';
import menu_data from './data';
import Menu_46 from './components/Menu_46';
import Categories_46 from './components/Categories_46';

const App = () => {
  // const [menu, setMenu] = useState(menu_data);
  // console.log(menu);
  const categories = ['all','breakfast','lunch','dinner','dessert','shakes'];
  return (
    <section className="menu">
    <div className="title">
      <h2>our menu - 211410146</h2>
      <div className="underline"></div>
    </div>
    <Categories_46 categories={categories}/>
    <Menu_46 menu={menu_data} />
  </section>
  );
}
export default App;