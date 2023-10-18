
import { useState, useEffect } from "react";
let api_url = `http://127.0.0.1:5000/api/card_46`;

const BlogNodeServer_46 = () => {
  const [Blogs, setBlogs] = useState([]);

  const fetchBlogFromNodeServer = async () => {
    try {
      const response = await fetch(api_url);
      const json_data = await response.json();
      console.log('Blogs data', json_data);
      setBlogs(json_data);
    }
    catch (err) {
      console.log(err);
    }
  };
  useEffect(()=> {
    fetchBlogFromNodeServer();
  }, []);
  // console.log('Blogs', Blogs);
  return (
    <section className="blogs">
      <div className="section-title">
        <h2>latest blogs using breakpoints</h2>
        <h3>Marx Wang 211410146</h3>
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
export default BlogNodeServer_46;