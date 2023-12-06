import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value

// React
// value, onChange

const T41_46_ControlledInputs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSummit = async (e) => {
    e.preventDefault();
    if (name && email) {
      const person = { 
        id: new Date().getTime().toString(), 
        name, 
        email 
      };
      setPeople((people) => {
        return [...people, person];
      });
    } else {
      console.log('empty values');
    }
    setEmail('');
    setName('');
    console.log(people);
  };
  return (
    <>
      <article>
        <form 
          className="form"
          onSubmit={handleSummit}
        > 
          <div className="form-control">
            <label htmlFor="name">Name: </label>
            <input 
              type="text" 
              name='name' 
              value={name}
              onChange={(e)=> setName(e.target.value)}/>
          </div>
          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <button type="submit">Add Person</button>
        </form>
        {
          people.map((person, index) => {
            const {id, name, email} = person;
            return (
              <div key={id} className="item">
                <h4>{name}</h4>
                <p>{email}</p>
              </div>
            )
          })
        }
      </article>
    </>
  )
};


export default T41_46_ControlledInputs;
