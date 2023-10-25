import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { UserDetails } from './UserDetails';
import { Messages } from "./partials/Messages"
import { Success } from './Success';
import { Confirmation } from './Confirmation';
import { UserProfilePic } from './UserProfilePic';
import { Interests } from './Interests';
import { Terms } from './Terms';

export const SignUpPage = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [validationMessages, setValidationMessages] = useState([]);
    const [userNameValue, setUserNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [ageValue, setAgeValue] = useState('');
    const [professionValue, setProfessionValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
    const [stepValue, setStepValue] = useState(1)
  //  const [userProfilePic, setUserProfilePic] = useState(null)
    const [interestsValue, setInterestsValue] = useState([])
    const [showLoader,setshowLoader] = useState(false);


    let values = {userNameValue,emailValue,ageValue,professionValue,passwordValue,confirmPasswordValue,interestsValue,showLoader};

    const history = useHistory();
   
            
    const onSignUpClicked = async () => {
      setshowLoader(true);
        try{
             const response =  await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/Register`,
    
             {
                        username: userNameValue,
            email: emailValue,
            age: ageValue,
            profession: professionValue,
            password: passwordValue,
            confirm_password: confirmPasswordValue,
            verified:false,
            isAdmin:false,
            interests: interestsValue,
        },{
          headers: {
            "Accept": "application/json"
          }
        }
        );

        setshowLoader(false);
       // const json_response = JSON.parse(response.data);

       //console.log(JSON.parse(JSON.stringify(response.data)));
       // history.push('/please-verify');
       if(response.data.status==200){
        const nextstep = stepValue+1
        setStepValue(nextstep);
       }
       else{
     //   console.log("error")
      //  console.log(response.data)
       // console.log(typeof(response.data))
       
        console.log(response.data.msgs)
        setValidationMessages(response.data.msgs)
       }
  
    }
    catch(e){
      //  setValidationMessages(e.response.data)
    }
    }

    const updateInterests = (value) => {
        let interests_copy = [...interestsValue];
        if(interests_copy.includes(value)){
            interests_copy= interests_copy.filter((interest_copy) => interest_copy!=value)
        }
        else{
            interests_copy.push(value)
        }
        setInterestsValue(interests_copy)
    }

    const prevStep = () => {
        const prevstep = stepValue-1
        setValidationMessages([])
        setStepValue(prevstep);
      }

     const nextStep = () => {
        const nextstep = stepValue+1
        setStepValue(nextstep);
      }

     const handleChange = (input,value) => {
   //     console.log(input)
      //  console.log(value)
        if(input ==="email"){
  
            //    console.log("email");
                setEmailValue(value)
        }
        else if(input ==="password"){
              //  console.log("password");
                setPasswordValue(value)
        }
        else if(input ==="confirmPassword"){
              //  console.log("confirmPassword");
                setConfirmPasswordValue(value)
        }
        else if(input ==="username"){
               // console.log("username");
                setUserNameValue(value)
        }
        else if(input ==="age"){
          //  console.log("age");
            setAgeValue(value)
    }
    else if(input ==="profession"){
       // console.log("profession");
        setProfessionValue(value)
}
else if(input ==="profilepic"){
setUserProfilePic(value)
}
        else if(input ==="interests"){
  
               // console.log("interests");
updateInterests(value)
            
        }

        

        values = {userNameValue,emailValue,ageValue,professionValue,passwordValue,confirmPasswordValue,interestsValue,showLoader};
      }

    
    return (
        <div className='signup-container'>
        <div className="content-container">
        {validationMessages && <Messages messages={validationMessages}/>}
            
{stepValue===1 && <UserDetails prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={values}/> }

{stepValue===2 && <Interests prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={values}/> }    
 

{/*stepValue===3 && <UserProfilePic prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={values}/>*/ }    

{stepValue===3 && <Terms prevStep={prevStep} nextStep={nextStep} handleChange={handleChange}   values={values}/> }    


{stepValue===4 && <Confirmation prevStep={prevStep} nextStep={nextStep} handleChange={handleChange}  onSignUpClicked={onSignUpClicked} values={values}/> }    

    
{stepValue===5 && <Success/> }    


      

        </div>
        </div>
    )

}