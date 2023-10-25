import { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {Messages} from './partials/Messages'
import { useToken } from '../auth/useToken';
import { useUser } from '../auth/useUser';
import { useQueryParams } from '../util/useQueryParams';

import {
    Container, Row, Col, Form, Input, Button, Navbar, Nav,
    NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem
  } from 'reactstrap';
  




export const LogInPage = () => {

    const [token, setToken] = useToken();
    const [user, setUser] = useUser();
    const [errorMessage, setErrorMessage] = useState('');
    const [validationMessages, setValidationMessages] = useState([]);
    const [userNameValue, setuserNameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');


    const history = useHistory();


    useEffect(()=>{
        if(token){
            history.push("/userlist");
        }
    })

    const onLogInClicked = async () => {
        try {
         const response =  await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/login`, {
                username: userNameValue,
                password: passwordValue,
            }
              );
            
          
              

              console.log("response-")
              console.log(response)

             if(response.data.status === 200){
                setToken(response.data.JWT)
                setUser(response.data.user_id);
                setValidationMessages(response.data.msgs)
                history.push("/userlist");
             }
             else{
                setValidationMessages(response.data.msgs)
             }
              
        } catch (e) {
            console.log(e.response)
            console.log("err->", )
          //  setValidationMessages(e.response.data.msgs)

           // setValidationMessages(e.response.data.errors)
        }
    }

    const showPassword = () => {
        console.log("trigger")
        var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
    }

    return (
        <div className='login-container'>
        <div className="content-container">
            <h1>Log In</h1>

            {validationMessages && <Messages messages={validationMessages}/>}
            {errorMessage && <div className="fail">{errorMessage}</div>}
            <input
                value={userNameValue}
                onChange={e => setuserNameValue(e.target.value)}
                placeholder="Email or Username" />
            <input
                type="password"  id="password"
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                placeholder="Password" />
                <label>
               <input type="checkbox" className="checkbox" onClick={ e =>showPassword()}/>
                <span>show Password</span>
                </label>
            <button
                disabled={!userNameValue || !passwordValue}
                onClick={onLogInClicked}>Log In to Site</button>
            <button onClick={() => history.push('/forgot-password')}>Forgot your password?</button>
            <button onClick={() => history.push('/signup')}>Don't have an account? Sign Up</button>
          
        </div>
        </div>
    );
}