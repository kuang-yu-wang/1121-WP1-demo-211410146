import React, { useState, useEffect, useContext } from 'react';
import BlogList_46 from './components/BlogList_46';
import Alert_46 from './components/Alert_46';
import { useBlogContext } from './BlogContext_46';

const App_46 = () => {
  const {alert, clearBlogs} = useBlogContext();

  return (
    <section className='blogs'>
      {alert.show && <Alert_46 />}
      <div className='section-title'>
        <h2>CSS Grid using breakpoints</h2>
      </div>
      <div className='blogs-center'>
        <BlogList_46 />
      </div>
      <button className='clear-btn' onClick={clearBlogs}>
        clear all blogs
      </button>
    </section>
  );
};
export {App_46};
