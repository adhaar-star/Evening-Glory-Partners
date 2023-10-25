import {useEffect, useState} from 'react'
import axios from 'axios'
import { Header } from "./partials/Header"
import { Footer } from "./partials/Footer"
import { Messages } from "./partials/Messages"
import { useToken } from '../auth/useToken';
import { useUser } from '../auth/useUser';
import { Audio } from 'react-loader-spinner'
import { useHistory } from 'react-router-dom';

import { useQueryParams } from '../util/useQueryParams';

export const DeclinedMe = (props) => {
  const [token, setToken] = useToken();
  const [user, setUser] = useUser();
  const [currentUser, setcurrentUser] = useState([]);
  const [declinedMe, setdeclinedMe] = useState([]);
  const [DeclinedMeLength,setDeclinedMeLength] = useState(0);
  const history = useHistory();

  const [validationMessages, setValidationMessages] = useState([]);

    useEffect(() =>{
      console.log("token-")
      console.log(token)
      if(!token){
        history.push("/");
    }
    else{

    
      fetchUsers();
    }
      
    },[props.users])



    const fetchUsers = async () => {
      let declined_me=[];
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/getUsers`,{"user_id":user},{headers: {
        Authorization: `Bearer ${token}`
      }}).
      then((data)=>{
        console.log("users-")
        declined_me = data.data.users
     //   setValidationMessages(data.data.msgs)
      }
  
      ).catch((e)=>{
      //  setValidationMessages(e.response.data.msgs)
      })
  
    
      
    
     
  
      console.log(declined_me)
      console.log(props.users)
      declined_me = declined_me.filter((declined) => props.users  &&  props.users.includes(declined.user_id))
      console.log(declined_me)
      setDeclinedMeLength(declined_me.length)
     // let temp_accepted = all_accepted_me.split(",");
      //  all_accepted_me = all_accepted_me.filter((user) => user.friends.find((friend) => friend.userId===current_user._id )); 
      setdeclinedMe(declined_me);
    }

            
                

    return (
    <main>
    <Header token={token} DeclinedMeLength={DeclinedMeLength}/>
    {validationMessages && <Messages messages={validationMessages}/>}

    <div className="container">
      

        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Username</th>
              <th scope="col">E-Mail</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
{Array.isArray(declinedMe) && declinedMe.map((user,i) => 
           (
              <tr key={i}>
                <td>
           
                  {user.username}
                </td>
                <td>
               
                  {user.email}
                </td>
            <td>
          <span>Declined Me</span>
      </td>
     
              
              </tr>
          )    
        )
            }
          </tbody>
        </table>

    </div>
    
  
  <Footer/></main>)
                        }