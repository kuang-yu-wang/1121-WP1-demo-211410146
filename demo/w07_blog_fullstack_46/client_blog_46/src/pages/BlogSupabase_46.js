
import { useState, useEffect } from "react";
import {supabase} from "../db/clientSupabase";

const BlogSupabase_46 = () => {
  const [name, setName] = useState('Marx Wang');
  const [id, setId] = useState('211410146');
  const [Blogs, setBlogs] = useState([]);

  const fetchBlogFromSupabase = async () => {
    try {
      // const response = await fetch(api_url);
      // const json_data = await response.json();

      let { data: json_data, error } = await supabase
        .from('card_46')
        .select('*');

      console.log('Blogs data', json_data);
      setBlogs(json_data);
    }
    catch (err) {
      console.log(err);
    }
  };
  useEffect(()=> {
    fetchBlogFromSupabase();
  }, []);
  // console.log('Blogs', Blogs);
  return (
    <section className="blogs">
      <div className="section-title">
        <h2>latest blogs using breakpoints</h2>
        <h3>{name}, {id}</h3>
      </div>
      <div className="blogs-center">
      {
        Blogs.map((blog) => {
          const { id, title, img_remote, categories, content } = blog;
          return (
            <article
              className="blog"
              key={id}
            >
              <img
                src={img_remote}
                alt={title}
                className="img blog-img"
              />
              <div className="blog-content">
                <span>
                  {categories}
                  <i className="fa-solid fa-mug-saucer"></i>
                </span>
                <h3>{title}</h3>
                <p>{content}</p>
                <a href="#">read more</a>
              </div>
            </article>
          )
        })
      }
      </div>
    </section>
  )
};
export default BlogSupabase_46;