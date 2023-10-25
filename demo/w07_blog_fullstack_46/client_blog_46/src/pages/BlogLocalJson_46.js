import React, { useState } from 'react';
import blogData_46 from '../data/blogData.json';

const BlogLocalJson_46 = () => {
  const [Blogs, setBlog] = useState(blogData_46);
  const [Name, setName] = useState('Marx Wang');
  const [studentID, setStudentID] = useState('211410146');
  return (
    <section className="blogs">
      <div className="section-title">
        <h2>Blogs From Local Json</h2>
        <h3>{studentID},{Name}</h3>
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
}

export default BlogLocalJson_46