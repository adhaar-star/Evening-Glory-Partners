import {useEffect, useState} from 'react'
import axios from 'axios'
import { Header } from "./partials/Header"
import { Footer } from "./partials/Footer"
import { Messages } from "./partials/Messages"
import { useToken } from '../auth/useToken';
import { useQueryParams } from '../util/useQueryParams';

export const  UserProfilePic = ({nextStep, prevStep, handleChange, values}) => {
    
     const onFileChange = async(event) => {
    
        // Update the state
     handleChange(event.target.files[0],"profilepic")
      
      };
   const onFileUpload = async (event) => {
    
        // Create an object of formData
        const formData = new FormData();
      
        // Update the formData object
        formData.append(
          "myFile",
        //  selectedFile,
        values.userProfilePic,
        values.userProfilePic.name
        );
      
        // Details of the uploaded file
        console.log(values.userProfilePic);
      
        // Request made to the backend api
        // Send formData object
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/userlist/uploadfile`, formData).then((data)=> {
console.log("profile pic uploaded successfully");
console.log(data);
setValidationMessages(data.data.msgs)
        }).catch((error)=> {
            console.log("error uploading profile pic");
            console.log(error);
            setValidationMessages(error.response.data.msgs)

        })
      };

    return (<div className='userprofilepic'>
  <input type="file" onChange={(event)=>onFileChange(event)} />
                <button onClick={(event)=>onFileUpload(event)}>
                  Upload!
                </button>

                {values.userProfilePic && 
        
 
           <div>
             <h2>File Details:</h2>
              

 <p>File Name: {selectedFile.name}</p>
  
              
 <p>File Type: {selectedFile.type}</p>
  
              
 <p>
               Last Modified:{" "}
               {selectedFile.lastModifiedDate.toDateString()}
             </p>
  
           </div>
         
       }  
         {!values.userProfilePic  &&
           <div>
             <br />
             <h4>Choose before Pressing the Upload button</h4>
           </div>
}  <button onClick={()=>nextStep()}>Submit</button>
      <button onClick={()=>prevStep()}>Back</button>
       

    </div>)
}