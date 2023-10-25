import {useEffect, useState} from 'react'
import axios from 'axios'
import { Header } from "./partials/Header"
import { Footer } from "./partials/Footer"
import { Messages } from "./partials/Messages"
import { useToken } from '../auth/useToken';
import { useUser } from '../auth/useUser';
import { useHistory } from 'react-router-dom';
import { useQueryParams } from '../util/useQueryParams';
import { Audio } from 'react-loader-spinner'

export const Requests = (props) => {
  const [token, setToken] = useToken();
  const [user, setUser] = useUser();
  const [showLoader,setshowLoader] = useState(false);
  const [requestsReceived, setrequestsReceived] = useState([]);
    const [validationMessages, setValidationMessages] = useState([]);
const [RequestsLength, setRequestsLength] = useState(0);

const history = useHistory();

    useEffect(() =>{
      console.log("token-")
      console.log(token)
      console.log("props-")
      console.log(props)
      if(!token){
        history.push("/");
    }
    else{

      fetchUsers();
    }

    },[props.users])

    const fetchUsers = async () => {
    let all_requested_me=[];
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/getUsers`,{"user_id":user},{headers: {
      Authorization: `Bearer ${token}`
    }}).
    then((data)=>{
      console.log("users-")
    //  setValidationMessages(data.data.msgs)
      all_requested_me = data.data.users

    }

    ).catch((e)=>{
     // setValidationMessages(e.response.data.msgs)
    })

  
    
  
   

    console.log(all_requested_me)
    console.log(props.users)

    all_requested_me = all_requested_me.filter((request) => props.users.includes(request.user_id))
   // let temp_accepted = all_accepted_me.split(",");
    //  all_accepted_me = all_accepted_me.filter((user) => user.friends.find((friend) => friend.userId===current_user._id )); 
    setrequestsReceived(all_requested_me);
  }


                const addFriend =  async (userId) => {
                  setshowLoader(true);
             
                  await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/addFriend`,{user_id: user,friend_id: userId},{headers: {
                    Authorization: `Bearer ${token}`
                  }}).
                  then((data)=>{
                    setshowLoader(false);
                    console.log("users-")
                  //  console.log(data.data.users)
            //setUsers(data.data.users)
            if(data.status===200){
              setValidationMessages(data.data.msgs)

              props.fetchRequests();
            }
            else{
              setValidationMessages(data.data.msgs)
            }
                  }
            
                  ).catch((e)=>{
                  //  setValidationMessages(e.response.data.msgs)
                  })
                }


                const addDecline =  async (userId) => {
                  setshowLoader(true);

                  await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/addDecline`,{user_id: user,decline_id: userId,mode: "to"},{headers: {
                    Authorization: `Bearer ${token}`
                  }}).
                  then((data)=>{
                    setshowLoader(false);
                    console.log("users-")
                  //  console.log(data.data.users)
            //setUsers(data.data.users)
            if(data.status===200){
              setValidationMessages(data.data.msgs)
              props.fetchRequests();
            }
            else{
              setValidationMessages(data.data.msgs)
            }
                  }
            
                  ).catch((e)=>{
                  //  setValidationMessages(e.response.data.msgs)
                  })
                }

                

    return (
    <main>
    <Header token={token} RequestsLength={RequestsLength}/>
   
    <div className="container">
      
    {validationMessages && <Messages messages={validationMessages}/>}
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Username</th>
              <th scope="col">E-Mail</th>
            </tr>
          </thead>
          <tbody>
{requestsReceived.map((user,i) => 
           (
              <tr key={i}>
                <td>
           
                  {user.username}
                </td>
                <td>
               
                  {user.email}
                </td>
            <td>
            <button className="btn btn-success"
                            title="Accept" onClick={(event)=>addFriend(user.user_id)}><i className="fa fa-user" aria-hidden="true"></i></button>
      </td>
      <td>
         <button className="btn btn-danger"
                            title="Decline" onClick={(event)=>addDecline(user.user_id)}><i className="fa fa-user" aria-hidden="true"></i></button>
            </td>
              
              </tr>
          )    
        )
            }
          </tbody>
        </table>
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
    
  
  <Footer/></main>)
                        }