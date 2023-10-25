import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useToken } from '../auth/useToken';
import { useUser } from '../auth/useUser';
import { Audio } from 'react-loader-spinner'
import { Messages } from "./partials/Messages"

import axios from 'axios';

export const ForgotPasswordPage = () => {
    const [token, setToken] = useToken();
    const [user, setUser] = useUser();
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [emailValue, setEmailValue] = useState('');
    const [showLoader,setshowLoader] = useState(false);
    const [validationMessages, setValidationMessages] = useState([]);

    const history = useHistory();

    const onSubmitClicked = async () => {
        setshowLoader(true);
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/forgotPassword/`,{"email":emailValue}).
              then((data)=>{
                setshowLoader(false);
               
                if(data.data.status != 200){
                setValidationMessages(data.data.msgs)
              
                setSuccess(false);
                }
                else{
                 //   setshowLoader(false);
                    setSuccess(true);
                
                    setTimeout(() => {
                        history.push('/login');
                    }, 3000);
                }
            
              }
          
              ).catch((e)=>{
               // setValidationMessages(e.response.data.msgs)
              })
         
        } catch (e) {
           // setValidationMessages(e.response.data.msgs)
        }
    }

    return success ? (
        
        <div className="content-container">
            <h1>Success</h1>
            <p>Check your email for a reset link</p>
        </div>
    ) : (
        <>
        {validationMessages && <Messages messages={validationMessages}/>}
        <div className="content-container">
            <h1>Forgot Password</h1>
            <p>Enter your email and we'll send you a reset link</p>
            {errorMessage && <div className="fail">{errorMessage}</div>}
            <input
                value={emailValue}
                onChange={e => setEmailValue(e.target.value)}
                placeholder="someone@gmail.com" />
            <button
                disabled={!emailValue}
                onClick={onSubmitClicked}
            >Send Reset Link</button>
        </div>
        {showLoader ?  <Audio
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