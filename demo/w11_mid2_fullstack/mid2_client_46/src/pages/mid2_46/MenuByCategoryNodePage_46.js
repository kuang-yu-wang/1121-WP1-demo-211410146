import { useState, useEffect } from 'react';

import Wrapper from '../../assets/wrapper/mid2_xx/Menu_xx';


const MenuByCategoryNodePage_46 = () => {
  const [name, setName] = useState('Marx Wang');
  const [id, setId] = useState('211410146');
  const [category, setCategory] = useState('all');
  const [categoryList, setCategoryList] = useState([]);
  const [data, setData] = useState([]);

  const fetchDataFromServer = async (category) => {
    category = category === 'all' ? '' : category;
    let api_url = `http://localhost:5000/api/mid2_46/menu_46/${category}`;
    try {
      const response = await fetch(api_url);
      const data = await response.json();
      console.log('category', category);
      console.log('menu data', data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchBtnFromServer = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/mid2_46/btn_46/`);
      const data = await response.json();
      data.push({"category":"all"});
      setCategoryList(data);
    } catch (error) {
      console.log(error);
    }
  };
  const changeMenuFilter = (category) => {
    setCategory(category);
  };
  useEffect(() => {
    fetchDataFromServer(category);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);
  useEffect(() => {
    fetchBtnFromServer();
  },[]);
  return (
    <Wrapper>
      <section className='menu'>
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          {categoryList.map((item) => {
            const { category } = item;
            return (
              <button
              key={category}
              type="button"
              data-id={category}
              className="filter-btn"
              onClick={() => changeMenuFilter(category)}
              >
              {category}
            </button>)
          })}
        </div>
        <div className="section-center">
          {data.map((item) => {
            const { id, title, price, img, descrip } = item;
            return (
              <article className="menu-item" key={id}>
                <img src={img} alt={title} className="photo" />
                <div className="item-info">
                  <header>
                    <h4>{title}</h4>
                    <h4 className="price">{price}</h4>
                  </header>
                  <p className="item-text">{descrip}</p>
                </div>
              </article>
            );
          })}
          </div>
      </section>
    </Wrapper>
  );
};

export default MenuByCategoryNodePage_46;
