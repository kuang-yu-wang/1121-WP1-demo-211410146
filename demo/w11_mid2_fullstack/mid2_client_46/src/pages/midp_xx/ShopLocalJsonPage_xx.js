import { useState } from 'react';

import midp_json_xx from '../../data/midp_xx/midp_json_xx';

const ShopLocalJsonPage_xx = () => {
  const [name, setName] = useState('Hsingtai Chung');
  const [id, setId] = useState(123456789);
  const [shops, setShops] = useState(midp_json_xx);
  console.log('shops', shops);
  return (
    <div className='shop-page'>
      <div className='section-title'>
        <h2> Midp -- Local Json </h2>
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

export default ShopLocalJsonPage_xx;
