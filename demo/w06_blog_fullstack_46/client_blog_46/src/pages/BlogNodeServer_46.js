
import { useState, useEffect } from "react";
let api_url = `http://127.0.0.1:5000/api/card_46`;

const BlogNodeServer_46 = () => {
  const [Blogs, setBlogs] = useState([]);

  const fetchBlogFromNodeServer = async () => {
    try {
      const response = await fetch(api_url);
      const json_data = await response.json();
      console.log('Blogs data', json_data);
      return (json_data);
    }
    catch (err) {
      console.log(err);
    }
  };

  useEffect(()=> {
    setBlogs(fetchBlogFromNodeServer());
  }, []);
  console.log('Blogs', Blogs);
  return (
    <section className="blogs">
      <div className="section-title">
        <h2>latest blogs using breakpoints</h2>
        <h3>Marx Wang 211410146</h3>
      </div>
      
    </section>
  )
};
export default BlogNodeServer_46;