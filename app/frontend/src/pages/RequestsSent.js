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

export const RequestsSent = (props) => {
  const [token, setToken] = useToken();
  const [user, setUser] = useUser();
  const [showLoader,setshowLoader] = useState(false);
  const [currentUser, setcurrentUser] = useState([]);
    const [validationMessages, setValidationMessages] = useState([]);
    const [requestsSent, setrequestsSent] = useState([]);
    const [RequestsSentLength, setRequestsSentLength] = useState(0);


    const history = useHistory();


    useEffect(() =>{
      console.log("token-")
      console.log(token)
      if(!token){
        history.push("/");
    }
    else{

      fetchUsers();
    }

  
      
      //  fetchData();
    },[props.users])


    const fetchUsers = async () => {
      let requests_sent=[];
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/getUsers`,{"user_id":user},{headers: {
        Authorization: `Bearer ${token}`
      }}).
      then((data)=>{
        console.log("users-")
        requests_sent = data.data.users
        setValidationMessages(data.data.msgs)
      }
  
      ).catch((e)=>{
       // setValidationMessages(e.response.data.msgs)
      })
  
    
      
    
     
      console.log(props.users)
      console.log(requests_sent)
      requests_sent = requests_sent.filter((request) =>  props.users.includes(request.user_id))
     // let temp_accepted = all_accepted_me.split(",");
      //  all_accepted_me = all_accepted_me.filter((user) => user.friends.find((friend) => friend.userId===current_user._id )); 
      console.log(requests_sent)
      setRequestsSentLength(requests_sent.length)
      setrequestsSent(requests_sent);
    }

 


              
                const removeRequest =  async (userId) => {
                  setshowLoader(true);
                  await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/removeRequest`,{user_id: user,request_id: userId},{headers: {
                    Authorization: `Bearer ${token}`
                  }}).
                  then((data)=>{
                    setshowLoader(false);
                    console.log("users-")
                  //  console.log(data.data.users)
            //setUsers(data.data.users)

            if(data.status===200){
              setValidationMessages(data.data.msgs)
              props.fetchRequestsSent();
            }
    
              else{
                setValidationMessages(data.data.msgs)
              }
            
                  }
            
                  ).catch((e)=>{
                   // setValidationMessages(e.response.data.msgs)
                 //   setValidationMessages(e.response.data.errors)
                  })
                }

                

    return (
    <main>
    <Header token={token} RequestsSentLength={RequestsSentLength}/>
   
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
{ Array.isArray(requestsSent)  && requestsSent.map((user,i) => 
           (
              <tr key={i}>
                <td>
           
                  {user.username}
                </td>
                <td>
               
                  {user.email}
                </td>
                <td>
         <button className="btn btn-danger"
                            title="Decline" onClick={(event)=>removeRequest(user.user_id)}><i className="fa fa-user" aria-hidden="true"></i></button>
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