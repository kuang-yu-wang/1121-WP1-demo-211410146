import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/QuincyLarsons';
const T31_46_MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        console.log(response);
        if (!response.ok){
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const data = await response.json();
        console.log('User data: ',data);
        setIsError(false);
        setIsLoading(false);
        setUser(data);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
    };
    fetchUser();
  }, []);    
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2> There was an error...</h2>;
  }
  const { name } = user;
  return (
    <>
      <h2>{name}</h2>
    </>
  )
};

export default T31_46_MultipleReturns;
