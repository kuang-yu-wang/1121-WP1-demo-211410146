import { useState, useEffect } from 'react';

// import { supabase } from '../../db/clientSupabase';

const Mid1SupaPage_xx = () => {
  const [name, setName] = useState('Hsingtai Chung');
  const [id, setId] = useState(123456789);
  const [products, setProducts] = useState([]);

  const fetchProductsFromSupabase = async () => {
    try {
      let { data, error } = await supabase.from('product_xx').select('*');

      console.log('products data', data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductsFromSupabase();
  }, []);

  return (
    <>
      <div className='shop-page'>
        <div className='section-title'>
          <h2> Mid1 -- Supa Product Page </h2>
          <h3>
            {name}, {id}
          </h3>
        </div>
        <div className='collection-page'>
          <h1 className='title'>Womens</h1>
          <div className='items'>
            {products.map((item) => {
              const {
                pid,
                name,
                category_id,
                price,
                local_img_url,
                remote_img_url,
              } = item;
              return (
                <div key={pid} className='collection-item'>
                  <img className='img' src={remote_img_url} />
                  <div className='collection-footer'>
                    <span className='name'>{name}</span>
                    <span className='price'>{price}</span>
                  </div>
                  <button className='custom-button'>Add to Cart</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Mid1SupaPage_xx;
