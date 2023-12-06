import { useState } from 'react';

import Wrapper from '../../assets/wrapper/mid2_xx/Menu_xx';

const MenuStaticPage_xx = () => {
  const [name, setName] = useState('Hsingtai Chung');
  const [id, setId] = useState('123456789');
  return (
    <Wrapper>
      <section className='menu'>

      </section>
    </Wrapper>
  );
};

export default MenuStaticPage_xx;
