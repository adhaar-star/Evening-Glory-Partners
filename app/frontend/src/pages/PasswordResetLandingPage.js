import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Messages} from './partials/Messages'
import { PasswordResetSuccess } from './PasswordResetSuccess';
import { PasswordResetFail } from './PasswordResetFail';
import { Audio } from 'react-loader-spinner'

export const PasswordResetLandingPage = () => {
    const [validationMessages, setValidationMessages] = useState([]);
    const [showLoader,setshowLoader] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFailure, setIsFailure] = useState(false);
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
    const { passwordResetCode } = useParams();

    const onResetClicked = async () => {
        setshowLoader(true);
        try {
            const response =   await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/resetPassword/`, { passwordResetCode,newPassword: passwordValue });
           if(response.data.status != 200){
            setValidationMessages(response.data.msgs)
            setIsSuccess(false);
            setshowLoader(false);
           }
           else{
            setIsSuccess(true);
            setshowLoader(false);
           }
        } catch (e) {
           // setValidationMessages(e.response.data.msgs)
            setIsFailure(true);
            setshowLoader(false);
        }
    }

    if (isFailure) return <PasswordResetFail />
    if (isSuccess) return <PasswordResetSuccess />

    return (
        
        <div className="content-container">
             {validationMessages && <Messages messages={validationMessages}/>}
            <h1>Reset Password</h1>
            <p>Please enter a new password</p>
            <input
                type='password'
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                placeholder="Password" />
            <input
                type='password'
                value={confirmPasswordValue}
                onChange={e => setConfirmPasswordValue(e.target.value)}
                placeholder="Confirm Password" />
            <button
                disabled={!passwordValue || !confirmPasswordValue || passwordValue !== confirmPasswordValue}
                onClick={onResetClicked}
            >Reset Password</button>
               {showLoader ?  <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/> : null }
        </div>
    )
}