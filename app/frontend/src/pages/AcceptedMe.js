import {useEffect, useState, useRef, useLayoutEffect} from 'react'
import axios from 'axios'
import { Header } from "./partials/Header"
import { Footer } from "./partials/Footer"
import { Messages } from "./partials/Messages"
import { useToken } from '../auth/useToken';
import { useUser } from '../auth/useUser';
import { useQueryParams } from '../util/useQueryParams';
import { Audio } from 'react-loader-spinner'
import { useHistory } from 'react-router-dom';

import io from 'socket.io-client';


export const AcceptedMe = (props) => {
  const [showChat, setshowChat] = useState(false);
  const [token, setToken] = useToken();
  const [user, setUser] = useUser();
  const [currentUser,setCurrentUser] = useState('');
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [validationMessages, setValidationMessages] = useState([]);
    const [msgreceiverId, setmsgreceiverId] = useState('')
    const [AcceptedMeLength,setAcceptedMeLength] = useState(0);
    const [acceptedMe, setacceptedMe] = useState([]);
    const [showLoader,setshowLoader] = useState(false);
    const history = useHistory();

    const inputEl = useRef(null)

    const chatEl = useRef(null)

    useEffect(() =>{
      if(!token){
        history.push("/");
    }
    else{
      fetchUsers();
    }
    /*  const socket = io(process.env.REACT_APP_BACKEND_URL, { transports : ['websocket'] });
      console.log(token)
      socket.connect();

      //socket.on('message',setLatestMessages)

      return () => {
        socket.disconnect();
      }
    */
 
      
      
    },[props.users])


    const fetchUsers = async () => {
      let accepted_me=[];
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/getUsers`,{"user_id":user},{headers: {
        Authorization: `Bearer ${token}`
      }}).
      then((data)=>{
        accepted_me = data.data.users
      //  setValidationMessages(data.data.msgs)
  
      }
  
      ).catch((e)=>{
     //   setValidationMessages(e.response.data)
      })
  
    
      
    
     
  
      console.log(accepted_me)
      accepted_me = accepted_me.filter((accepted) =>   props.users.includes(accepted.user_id))
      setAcceptedMeLength(accepted_me.length)
     // let temp_accepted = all_accepted_me.split(",");
      //  all_accepted_me = all_accepted_me.filter((user) => user.friends.find((friend) => friend.userId===current_user._id )); 
      setacceptedMe(accepted_me);
    }

    useEffect(() => {
      console.log("triggered_layout")
      if (chatEl.current) {
        chatEl.current.scrollTop = chatEl.current.scrollHeight;
      console.log("heey")
      }
  }, [messages]);

    
   
                const getMessages  = async (userId) => {
                  await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/getMessages`,{user_id:user,receiver_id: userId},{headers: {
                    Authorization: `Bearer ${token}`
                  }}).
                  then((data)=>{
             console.log(data)
            
                    setMessages(data.data.messages)
                  //  setValidationMessages(data.data.msgs)
                    
                  } )
                  .catch((e)=>{
                //    setValidationMessages(e.response.data.msgs)
                  })
                  
                }

                const openChat = (userId) => {
                  getMessages(userId)
                  setmsgreceiverId(userId);
            
                  setshowChat(!showChat);
                  scrollToBottom();

                }

                const scrollToBottom = () => {
                  console.log("triggered")
                  console.log( inputEl)
                  chatEl.current?.scrollIntoView({ behavior: 'smooth' })
                }

                const sendMessage = async () =>{
                  await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/sendMessage`,{user_id:user,receiver_id: msgreceiverId, message_txt: message},{
                      headers: {
                        Authorization: `Bearer ${token}`
                      }
                    }).then((data)=>{
                      if(data.data.status==500){
                        setValidationMessages(data.data.msgs)
                      }
                    }
                    ).catch((e)=> {
                      //setValidationMessages(e.response.data.msgs)
                  })
                  getMessages(msgreceiverId);
                }
  
                  


                const addDecline =  async (userId) => {
                  setshowLoader(true);
                  await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/removeFriend`,{user_id: user,decline_id: userId,mode: "to"},{headers: {
                    Authorization: `Bearer ${token}`
                  }}).
                  then((data)=>{
                    setshowLoader(false);
                    console.log("users-")
                  //  console.log(data.data.users)
            //setUsers(data.data.users)
            if(data.data.status===200){
              props.fetchAcceptedMe();
              setValidationMessages(data.data.msgs)
            }
            else{
              setValidationMessages(data.data.msgs)
            }
                  }
            
                  ).catch((e) => {
                 //   setValidationMessages(e.response.data.msgs)
                  })
                }


               const showChatBox =(event) => {

                }
                

    return (
    <main>
    <Header token={token} AcceptedMeLength={AcceptedMeLength}/>
    {validationMessages && <Messages messages={validationMessages}/>}
    <div className="container">
      

        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Username</th>
              <th scope="col">E-Mail</th>
            </tr>
          </thead>
          <tbody>
{Array.isArray(acceptedMe) && acceptedMe.map((user,i) => 
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
                            title="Chat"  onClick={(event)=> openChat(user.user_id)}><i className="fa fa-comment" aria-hidden="true" ></i></button>
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
{showChat && <div className="chat_popup">
<form  className="form-container">
<h1>Chat</h1>
<div className="messages_div" ref={chatEl}>
   {messages && messages.map((message,i) => { 
    return (
 user == message.sender_id ? 
<div className="received_msg" key={i}>{message.message_text}</div> :
 <div className="sent_msg" key={i}>{message.message_text}</div>
    )
  })
}
<input ref={inputEl} type="hidden" />
</div>
  <label htmlFor="msg" className="msg_heading"><b>Message</b></label>
    <textarea placeholder="Type message.." name="msg" className="chat_text"   onChange={(event)=> setMessage(event.target.value)} required></textarea>
    <button type="button" className="btn" onClick={(event)=>sendMessage()}>Send</button>
    <button type="button" className="btn cancel" onClick={(event)=> setshowChat(!showChat)}>Close</button>
    </form>
    </div>}
    </div>
    
  
  <Footer/></main>)
                        }