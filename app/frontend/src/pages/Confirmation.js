import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Audio } from 'react-loader-spinner'

import axios from 'axios';
import Cookies from 'js-cookie';

export const Confirmation = ({nextStep, prevStep, handleChange,onSignUpClicked, values}) => {


  const submitValues = () =>{
    onSignUpClicked()
   
  }
    return (
      <>
    
            <h1>Do you confirm the details?</h1>
          
            <button onClick={()=>submitValues()}>Sign Up</button>
      <button onClick={()=>prevStep()}>Back</button>
    {values.showLoader ?  <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/> : null }
       </>
    );
}