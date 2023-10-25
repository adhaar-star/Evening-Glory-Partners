import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';


export const Interests = ({nextStep, prevStep, handleChange, values}) => {
console.log(values)
  const all_interests = ["singing","travel","cooking","gardening","dancing","yoga","meditation","movies","social media","music","shopping"]
  
    return (
      <>
            <h1>Interests</h1>
          
          <div className="interests">
            {all_interests.map((all_interest, index)=>{
    return values.interestsValue.includes(all_interest) ? 
    <a href="#" key={index} className='all_interests interests_active' onClick={e => {console.log("e-",e);handleChange("interests",e.target.innerText)}}>{all_interest}</a> :
    <a href="#" key={index} className='all_interests interests_inactive' onClick={e => {console.log("e-",e);handleChange("interests",e.target.innerText)}}>{all_interest}</a>
     
    }
         
          )}

          </div>
            <button onClick={()=>nextStep()}>Next</button>
      <button onClick={()=>prevStep()}>Back</button>
       </>
    );
}