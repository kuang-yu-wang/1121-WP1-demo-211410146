import React, { useEffect } from 'react';
import { useBlogContext } from '../App_46';

const Alert_46 = () => {
  const {alert, showAlert} = useBlogContext();
  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  });

  return <p className={`alert alert-${alert.type}`}> {alert.msg} </p>;
};

export default Alert_46;
