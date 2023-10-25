import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

export const Success = () => {

    
  const history = useHistory();
    return (
      <>
            <h1>Congratulations!!! have successfully signed</h1>
          
            <button onClick={()=>history.push('/login')}>Go to Login</button>
       </>
    );
}