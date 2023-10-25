import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

export const UserDetails = ({nextStep, prevStep, handleChange, values}) => {

    const history = useHistory();

const passwordMatching = () =>{
    var x = document.getElementById("password");
    var y =  document.getElementById("confirm_password");
    var message =  document.getElementById("message");

    if (x.value == y.value) {
        message.style.color = 'green';
        message.innerHTML = 'Matching'
      } else {
        message.style.color = 'red';
        message.innerHTML = 'Not Matching'
    }
}
    return (
        <>
            <h1>User Details</h1>
            <input
                value={values.userNameValue}
                onChange={e => handleChange("username",e.target.value)}
                placeholder="UserName" />
            <input
                value={values.emailValue}
                onChange={e => handleChange("email",e.target.value)}
                placeholder="Email" />
                 <input
                value={values.ageValue}
                onChange={e => handleChange("age",e.target.value)}
                placeholder="Age" />
                 <input
                value={values.professionValue}
                onChange={e => handleChange("profession",e.target.value)}
                placeholder="Profession" />
            <input
                type="password" id="password"
                value={values.passwordValue}
                onChange={e => handleChange("password",e.target.value)} onKeyUp={e=> passwordMatching()}
                placeholder="password" />
          <label>
            <input
                type="password" id="confirm_password"
                value={values.confirmPasswordValue}
                onChange={e => handleChange("confirmPassword",e.target.value)} onKeyUp={e=> passwordMatching()}
                placeholder="Confirm password" />
                 <span id='message'></span>
                 </label>
            <button
                disabled={
                    !values.emailValue || !values.passwordValue ||
                    values.passwordValue !== values.confirmPasswordValue
                }
                onClick={()=>nextStep()}>Next</button>
                            <button onClick={() => history.push('/')}>Back to login</button>

       </>
    );

}