import { useState, useEffect } from 'react';

// import midp_json_xx from '../../data/midp_xx/midp_json_xx';

let api_url = `http://localhost:5000/api/shop_xx`;

const ShopNodePage_xx = () => {
  const [name, setName] = useState('Hsingtai Chung');
  const [id, setId] = useState(123456789);
  const [shops, setShops] = useState([]);
  console.log('shops', shops);
  const fetchShopsFromNodeServer = async () => {
    try {
      const response = await fetch(api_url);
      const data = await response.json();
      console.log('shop data', data);
      setShops(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchShopsFromNodeServer();
  }, []);
  return (
    <div className='shop-page'>
      <div className='section-title'>
        <h2> Midp -- Node PostgreSQL </h2>
        <h3>
          {name}, {id}
        </h3>
      </div>
      <div className='collection-overview'>
        <div className='collection-preview'>
          <h2 className='title'>Womens</h2>
          <div className='preview'>
            {shops.map((item, index) => {
              const { pid, name, price, local_img_url } = item;
              if (index < 4) {
                return (
                  <div key={pid} className='collection-item'>
                    <img className='image' src={local_img_url} />
                    <div className='collection-footer'>
                      <span className='name'>{name}</span>
                      <span className='price'>{price}</span>
                    </div>
                    <button className='custom-button'>Add to Cart</button>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className='collection-preview'>
          <h2 className='title'>Hats</h2>
          <div className='preview'>
            {shops.map((item, index) => {
              const { pid, name, price, local_img_url } = item;
              if (index >= 4) {
                return (
                  <div key={pid} className='collection-item'>
                    <img className='image' src={local_img_url} />
                    <div className='collection-footer'>
                      <span className='name'>{name}</span>
                      <span className='price'>{price}</span>
                    </div>
                    <button className='custom-button'>Add to Cart</button>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopNodePage_xx;
