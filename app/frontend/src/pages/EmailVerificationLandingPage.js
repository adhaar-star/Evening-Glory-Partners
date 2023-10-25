import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useToken } from '../auth/useToken';
import { Messages } from "./partials/Messages"
import { Audio } from 'react-loader-spinner'
import { EmailVerificationSuccess } from './EmailVerificationSuccess';
import { EmailVerificationFail } from './EmailVerificationFail';

export const EmailVerificationLandingPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);
    const [validationMessages, setValidationMessages] = useState([]);
    const { verificationString } = useParams();
    const [showLoader,setshowLoader] = useState(false);
    const [,setToken] = useToken();

    useEffect(() => {
        const loadVerification = async () => {
            setshowLoader(true);
            try {
                const response = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/verify-email`, { verificationString });
                const { token } = response.data;
                setToken(token);
                setIsSuccess(true);
           //     setIsLoading(false);
                setshowLoader(false);
            } catch (e) { 
                setIsSuccess(false);
           //     setIsLoading(false);
           setshowLoader(false);
               // setValidationMessages(e.response.data.msgs)
            }
        }

        loadVerification();
    }, [setToken, verificationString]);

   
    {showLoader ?  <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      /> : null }

    if (!isSuccess) return <EmailVerificationFail />
   if(validationMessages) return <Messages messages={validationMessages}/>
    return <EmailVerificationSuccess />
}