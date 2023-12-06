import React, { useState } from 'react';

const T14_46_UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Marx Wang',
    id: 211410146,
    message: 'Lorem Ipsum is a random message.'
  });
  
  const changeMessage = () => {
    setPerson({...person, message: 'Welcome to learn React'});
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.id}</h3>
      <h3>{person.message}</h3>
      <button
        className='btn'
        onClick={() => changeMessage()}
      >
        change message
      </button>
    </>
  );
};

export default T14_46_UseStateObject;
