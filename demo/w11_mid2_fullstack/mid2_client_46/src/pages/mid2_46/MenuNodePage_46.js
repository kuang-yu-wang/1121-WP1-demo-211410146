import { useState, useEffect } from 'react';

import Wrapper from '../../assets/wrapper/mid2_xx/Menu_xx';

let api_url = `http://localhost:5000/api/mid2_46/menu_46`;

const MenuNodePage_46 = () => {
  const [name, setName] = useState('Marx Wang');
  const [id, setId] = useState('211410146');
  const [data, setData] = useState([]);

  const fetchDataFromServer = async () => {
    try {
      const response = await fetch(api_url);
      const data = await response.json();
      console.log('menu data',data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataFromServer();    
  }, []);

  return (
    <Wrapper>
      <section className='menu'>
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          <button type="button" className="filter-btn" data-id="all">all</button
          ><button type="button" className="filter-btn" data-id="breakfast">
            breakfast</button
          ><button type="button" className="filter-btn" data-id="lunch">lunch</button
          ><button type="button" className="filter-btn" data-id="shakes">
            shakes</button
          ><button type="button" className="filter-btn" data-id="dinner">
            dinner
          </button>
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

export default MenuNodePage_46;
