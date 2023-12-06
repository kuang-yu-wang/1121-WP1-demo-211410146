import React, { useState, useEffect } from 'react';

const T33_46_ShowHide = () => {
  const [showAlert, setShowAlert] = useState(false);
  return(
    <>
      <button className='btn'
        onClick={() => setShowAlert(!showAlert)}
      >
        toggle
      </button>
      {showAlert && <Alert />}
    </>
  )
};

const Alert = () => {
  return(
    <>
      <div className="alert alert-danger">hello world</div>
    </>
  )
};

export default T33_46_ShowHide;
