import { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {Messages} from '../partials/Messages'
import Cookies from 'js-cookie';
import { AdminHeader } from "../partials/AdminHeader";
import { AdminFooter } from "../partials/AdminFooter";

import { useToken } from '../../auth/useToken';
import { useUser } from '../../auth/useUser';
import { useQueryParams } from '../../util/useQueryParams';

export const AdminLogInPage = () => {
  const [token, setToken] = useToken();
  const [user, setUser] = useUser();
  const [errorMessage, setErrorMessage] = useState('');
 
  const [emailValue, setemailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [validationMessages, setValidationMessages] = useState([]);

  const history = useHistory();

  useEffect(()=>{
    console.log("render")
    if(token){
      history.push("/userlist");
  }
   
       },[])

       
       


  const onLogInClicked = async () => {
    try {
     const response= await axios.post(`${process.env.REACT_APP_BACKEND_URL}/admin/login`, {
            email: emailValue,
            password: passwordValue,
        }
          );
         
        
          console.log("response-")
          console.log(response)
          if(response.data.status == 200 ){
            setToken(response.data.token);
            setUser(response.data.user_id);
            setValidationMessages(response.data.msgs)
history.push('userlist')

          }
          else{
            setValidationMessages(response.data.msgs)
         }
    } catch (e) {
        console.log(e)
     //   setMessages();
        setValidationMessages(e.response.data.msgs)
      //  setErrorMessage(e.message);
    }
    
}


    return (
        <main>
        <AdminHeader token={token} />
        {validationMessages && <Messages messages={validationMessages}/>}
        <div className="container">
    

        <div className="card bg-light" id="signup">
          <article className="card-body mx-auto">
            <h4 className="card-title mt-3 text-center">Admin Login</h4>
   
            {errorMessage && <div className="fail">{errorMessage}</div>}
            <p className="text-center">Log In</p>

            <input
                value={emailValue}
                onChange={e => setemailValue(e.target.value)}
                placeholder="Email" />
            <input
                type="password"
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                placeholder="password" />
            <hr />
            <button
                disabled={!emailValue || !passwordValue}
                onClick={onLogInClicked}>Log In</button>
        
          </article>
        </div>
    </div>
        <AdminFooter/>
        </main>
    )
}