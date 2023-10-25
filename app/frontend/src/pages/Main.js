import {useEffect, useState, useRef, useLayoutEffect} from 'react'
import axios from 'axios'
import { Header } from "./partials/Header"
import { Footer } from "./partials/Footer"
import { Messages } from "./partials/Messages"
import { Friends } from './Friends'
import { AcceptedMe } from './AcceptedMe'
import { Declines } from './Declines'
import { DeclinedMe } from './DeclinedMe'
import { Requests } from './Requests'
import { RequestsSent } from './RequestsSent'
import { useToken } from '../auth/useToken';
import { useUser } from '../auth/useUser';
import { useHistory } from 'react-router-dom';
import { useQueryParams } from '../util/useQueryParams';

export const Main = (props) => {

    const [token, setToken] = useToken();
    const [currentUser, setcurrentUser] = useUser();
    const [friends, setFriends] = useState([]);
    const [acceptedme, setAcceptedMe] = useState([]);
    const [declinedme, setDeclinedMe] = useState([]);
    const [declines, setDeclines] = useState([]);
    const [requests, setRequests] = useState([]);
    const [validationMessages, setValidationMessages] = useState([]);
    const [requestssent, setRequestsSent] = useState([]);
    const history = useHistory();


useEffect( ()=>{
  if(!token){
    history.push("/");
   // localStorage.removeItem('token')
}
else{
  console.log("current-"+props.current)
    fetchAcceptedMe();

    fetchDeclinedMe();

    fetchDeclines();

    fetchRequests();

    fetchFriends();


    fetchRequestsSent();
}
},[requests])
    const fetchDeclinedMe = async () => {
        console.log("reach")
        console.log("token-")
        console.log(token)
        let all_declined_me=[];
        let all_declined_me_ids=[];
              await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/getUsers`,{"user_id":currentUser},{headers: {
                Authorization: `Bearer ${token}`
              }}).
              then((data)=>{
                console.log("users-")
                all_declined_me = data.data.users
             //   setValidationMessages(data.data.msgs)
              }
        
              ).catch((e)=>{
            //    setValidationMessages(e.response.data.msgs)
              })
        
        
             console.log(all_declined_me)

             all_declined_me = all_declined_me.filter((user) => user.declines && user.declines.includes(currentUser )); 
        console.log(all_declined_me)
        for(var x in all_declined_me){
          all_declined_me_ids.push(all_declined_me[x].user_id)
        }
             
              setDeclinedMe(all_declined_me_ids);
     
      }

    const fetchAcceptedMe = async () => {


        let all_accepted_me=[];
        let all_accepted_me_ids=[];
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/getUsers`,{"user_id":currentUser},{headers: {
          Authorization: `Bearer ${token}`
        }}).
        then((data)=>{
          console.log("users-")
          all_accepted_me = data.data.users
         // setValidationMessages(data.data.msgs)
    
        }
    
        ).catch((e)=>{
        //  setValidationMessages(e.response.data.msgs)
        })
    
      
        
      
       
    
        console.log(all_accepted_me)
        console.log(currentUser)
        all_accepted_me = all_accepted_me.filter((user) => user.friends && user.friends.includes(currentUser )); 
        console.log(all_accepted_me)
        for(var x in all_accepted_me){
          all_accepted_me_ids.push(all_accepted_me[x].user_id)
        }
        setAcceptedMe(all_accepted_me_ids);
      }

      const fetchDeclines = async () => {
        console.log("reach")
        console.log("token-")
        console.log(token)
        let all_declined=[];
        let all_declined_ids=[];
              await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/getDeclines`,{"user_id":currentUser},{headers: {
                Authorization: `Bearer ${token}`
              }}).
              then((data)=>{
                console.log("users-")
                console.log(data.data.declines)
                all_declined=data.data.declines
            //    setValidationMessages(data.data.msgs)
              }
        
              ).catch((e)=>{
              //  setValidationMessages(e.response.data.msgs)
              })


              console.log(all_declined)
              
             
              setDeclines(all_declined);
      }

      const fetchRequestsSent = async () => { 
        console.log("reach")
        console.log("token-")
        console.log(token)
        let all_users=[];
        let all_users_ids=[];
              await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/getUsers`,{"user_id":currentUser},{headers: {
                Authorization: `Bearer ${token}`
              }}).
              then((data)=>{
                console.log("users-")
                all_users = data.data.users
           //     setValidationMessages(data.data.msgs)
              }
        
              ).catch((e)=>{
              //  setValidationMessages(e.response.data.msgs)
              })
        
              let requests_arr = [];
              let current_user = {};
        
              await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/getCurrentUser`,{"user_id":currentUser},{headers: {
                Authorization: `Bearer ${token}`
              }}).
              then((data)=>{
             //   setValidationMessages(data.data.msgs)
                current_user=data.data.user;
              } )
              .catch((e)=>{
             //   setValidationMessages(e.response.data.msgs)
              })

              console.log(all_users)
              console.log(currentUser)
              
              all_users = all_users.filter((user) =>  user.requests && user.requests.includes(currentUser )); 
              console.log(all_users)
              for(var x in all_users){
                console.log(x)
                all_users_ids.push(all_users[x].user_id)
              }
              console.log(all_users_ids)
        setRequestsSent(all_users_ids)
                }


                const fetchRequests = async () => { 
                    console.log("reach")
                    console.log("token-")
                    console.log(token)
                          await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/getRequests`,{"user_id":currentUser},{headers: {
                            Authorization: `Bearer ${token}`
                          }}).
                          then((data)=>{
                            console.log("users-")
                    
                       //     setValidationMessages(data.data.msgs)
                    setRequests(data.data.requests)
                          }
                    
                          ).catch((e)=>{
                      //     setValidationMessages(e.response.data.msgs)
                      //      setValidationMessages(e.response.data.errors)
                          })
                          console.log("requests-"+requests)
                            }


    const fetchFriends = async () => { 
        console.log("reach")
        console.log("token-")
        console.log(token)



     
        let current_user = {};
        
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/getCurrentUser`,{"user_id":currentUser},{headers: {
          Authorization: `Bearer ${token}`
        }}).
        then((data)=>{
   
          current_user=data.data.user;
      //    setValidationMessages(data.data.msgs)
        } )
        .catch((e)=>{
      //    setValidationMessages(e.response.data.msgs)
        })
       

              await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/getFriends`,{"user_id":currentUser},{headers: {
                Authorization: `Bearer ${token}`
              }}).
              then((data)=>{
                console.log("users-")
                console.log(data.data.friends)
                setValidationMessages(data.data.msgs)
        setFriends(data.data.friends)
              })
              .catch((e)=>{
              //  setValidationMessages(e.response.data.msgs)
              })
    
                }



    return (
      
        <div className="main-container">
               <Header 
           //    RequestsLength={requests.length} 
             //  RequestsSentLength={requestssent.length}
              // FriendsLength={friends.length}
              // AcceptedMeLength={acceptedme.length}
               //DeclinedMeLength={declinedme.length}
               //DeclinesLength={declines.length}
               />

               {props.current=="friends" && <Friends users={friends} fetchFriends={fetchFriends}/>}
               {props.current=="acceptedme" && <AcceptedMe users={acceptedme} fetchAcceptedMe={fetchAcceptedMe}/>}
               {props.current=="declinedme" && <DeclinedMe users={declinedme} fetchDeclinedMe={fetchDeclinedMe}/>}
               {props.current=="declines" && <Declines users={declines} fetchDeclines={fetchDeclines}/>}
               {props.current=="requests" && <Requests users={requests} fetchRequests={fetchRequests}/>}
               {props.current=="requestssent" && <RequestsSent users={requestssent} fetchRequestsSent={fetchRequestsSent}/>}
        
        </div>
    );
}
