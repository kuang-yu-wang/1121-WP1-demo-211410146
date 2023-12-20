import React, { useState, useEffect } from 'react';
import data from './blogData_xx';
import BlogList_xx from './components/BlogList_xx';
import Alert_xx from './components/Alert_xx';

const App_xx = () => {
  const [blogs, setBlogs] = useState(data);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  };

  console.log('blogs', blogs);

  const removeItem = (id) => {
    showAlert(true, 'blog removed', 'danger');
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const clearBlogs = () => {
    showAlert(true, 'empty all blogs', 'danger');
    setBlogs([]);
  };

  return (
    <>
      <section className='blogs'>
        {alert.show && <Alert_xx {...alert} removeAlert={showAlert} />}
        <div className='section-title'>
          <h2>CSS Grid using breakpoints</h2>
        </div>
        <div className='blogs-center'>
          <BlogList_xx blogs={blogs} removeItem={removeItem} />
        </div>
        <button className='clear-btn' onClick={clearBlogs}>
          clear all blogs
        </button>
      </section>
    </>
  );
};

export default App_xx;
