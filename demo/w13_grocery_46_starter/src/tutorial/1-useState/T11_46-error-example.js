import React from 'react';

const T11_46_ErrorExample = () => {
  const title = 'random title';

  const handleClick = () => {
    title = 'hello people';
    console.log('title', title);
  };

  return(
    <>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </>
  )
};

export default T11_46_ErrorExample;
