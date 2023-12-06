const ShopStaticPage_xx = () => {
  return (
    <div className='shop-page'>
      <div className='section-title'>
        <h2> Midp -- Static Page </h2>
        <h3> Hsingtai Chung, 123456789</h3>
      </div>
      <div className='collection-overview'>
        <div className='collection-preview'>
          <h2 className='title'>Womens</h2>
          <div className='preview'>
            <div className='collection-item'>
              <img className='image' src='/img/womens/blue-tank.png' />
              <div className='collection-footer'>
                <span className='name'>Blue Tanktop</span>
                <span className='price'>25</span>
              </div>
              <button className='custom-button'>Add to Cart</button>
            </div>
            <div className='collection-item'>
              <img className='image' src='/img/womens//floral-blouse.png' />
              <div className='collection-footer'>
                <span className='name'>Floral Blouse</span>
                <span className='price'>20</span>
              </div>
              <button className='custom-button'>Add to Card</button>
            </div>
            <div className='collection-item'>
              <img className='image' src='/img/womens//floral-skirt.png' />
              <div className='collection-footer'>
                <span className='name'>Floral Dress</span>
                <span className='price'>80</span>
              </div>
              <button className='custom-button'>Add to Cart</button>
            </div>
            <div className='collection-item'>
              <img
                className='image'
                src='/img/womens/red-polka-dot-dress.png'
              />
              <div className='collection-footer'>
                <span className='name'>Red Dots Dress</span>
                <span className='price'>80</span>
              </div>
              <button className='custom-button'>Add to Cart</button>
            </div>
          </div>
        </div>
        <div className='collection-preview'>
          <h2 className='title'>Hats</h2>
          <div className='preview'>
            <div className='collection-item'>
              <img className='image' src='/img/hats/brown-brim.png' />
              <div className='collection-footer'>
                <span className='name'>Brown Brim</span>
                <span className='price'>25</span>
              </div>
              <button className='custom-button'>Add to Cart</button>
            </div>
            <div className='collection-item'>
              <img className='image' src='/img/hats/blue-beanie.png' />
              <div className='collection-footer'>
                <span className='name'>Blue Beanie</span>
                <span className='price'>18</span>
              </div>
              <button className='custom-button'>Add to Card</button>
            </div>
            <div className='collection-item'>
              <img className='image' src='/img/hats/brown-cowboy.png' />
              <div className='collection-footer'>
                <span className='name'>Brown Cowboy</span>
                <span className='price'>35</span>
              </div>
              <button className='custom-button'>Add to Cart</button>
            </div>
            <div className='collection-item'>
              <img className='image' src='/img/hats/grey-brim.png' />
              <div className='collection-footer'>
                <span className='name'>Grey Brim</span>
                <span className='price'>25</span>
              </div>
              <button className='custom-button'>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopStaticPage_xx;
