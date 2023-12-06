import React from 'react';
import { useState } from 'react';
import { data } from '../../data';

const T13_46_UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    console.log('removeItem() called, id =', id);
    let newPeople = people.filter(
      (person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button
              onClick={()=>removeItem(id)}
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default T13_46_UseStateArray;
