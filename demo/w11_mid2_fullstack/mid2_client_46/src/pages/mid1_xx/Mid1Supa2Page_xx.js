import { useState, useEffect } from 'react';

// import { supabase } from '../../db/clientSupabase';

const filteredCategory = 'travel';

const Mid1Supa2Page_xx = () => {
  const [name, setName] = useState('Hsingtai Chung');
  const [id, setId] = useState(123456789);
  const [blogs, setBlogs] = useState([]);
  const [category, setCategory] = useState(filteredCategory);

  const fetchBlogsFromSupabase = async () => {
    try {
      let { data, error } = await supabase
        .from('card_xx')
        .select('*')
        .eq('category', category);

      console.log(`blogs with category ${category}`, data);
      setBlogs(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogsFromSupabase();
  }, []);

  return (
    <section className='blogs'>
      <div className='section-title'>
        <h2> Mid1 -- Supabase Blog Page </h2>
        <h2> category -- {category} </h2>
        <h3>
          {name}, {id}
        </h3>
      </div>
      <div className='blogs-center'>
        {blogs.map((item) => {
          const { id, img, remote_url, title, category, descrip } = item;
          return (
            <article key={id} className='blog'>
              <img src={img} alt='Coffee photo' className='img blog-img' />
              <div className='blog-content'>
                <span>
                  {' '}
                  {category} <i className='fa-solid fa-mug-saucer'></i>
                </span>
                <h3>{title}</h3>
                <p>{descrip}</p>
                <a href='#'>read more</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Mid1Supa2Page_xx;
