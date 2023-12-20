import React from 'react';
import Blog_46 from './Blog_46';
import { useBlogContext } from '../App_46';

const BlogList_46 = () => {
  const {blogs} = useBlogContext();
  return (
    <div className='blogs-center'>
      {blogs.map((blog) => {
        const { id, img, title, desc, category } = blog;
        return (
          <Blog_46
            key={id}
            id={id}
            img={img}
            title={title}
            desc={desc}
            category={category}
          />
        );
      })}
    </div>
  );
};

export default BlogList_46;
