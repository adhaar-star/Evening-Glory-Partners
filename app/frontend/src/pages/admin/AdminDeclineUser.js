import {useEffect, useState} from 'react'
import axios from 'axios'
import { AdminHeader } from "../partials/AdminHeader"
import { AdminFooter } from "../partials/AdminFooter"
import { Messages } from "../partials/Messages"
import { useToken } from '../../auth/useToken';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../auth/useUser';
import { Audio } from 'react-loader-spinner'
import { useParams } from "react-router-dom";

import { useQueryParams } from '../../util/useQueryParams';

export const AdminDeclineUser = (props) => {
  const [token, setToken] = useToken();
  const [user, setUser] = useUser();
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('')
    const [validationMessages, setValidationMessages] = useState([]);
    const [showLoader,setshowLoader] = useState(false);
    const history = useHistory();
    const { id } = useParams();



    useEffect(() =>{
      console.log("token-")
      console.log(token)
    
      if(!token){
        history.push("/admin");
    }
    else{
      
        fetchData();
    }
    },[])

    async function fetchData(){ 



    }

    const DeclineUser = async () => {
      setshowLoader(true)
      console.log(id)
      const userId = id;
      
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/admin/decline`,{user_id: user,delete_id: userId,message},{
          headers: {Authorization: `Bearer ${token}`}
        }).
      then((data)=>{
        setshowLoader(false)

      console.log(data)
      setValidationMessages(data.data.msgs)


      })
      .catch((e)=>{
        setValidationMessages(e.response.data.msgs)
console.log("decline user error-")
console.log(e)
      })
    }

    return (
    <main>
    <AdminHeader token={token}/>
    {validationMessages && <Messages messages={validationMessages}/>}
    <div className="container">
      
<p>Send message</p>
       <textarea  className="ContactUser" value={message} onChange={(event)=>setMessage(event.target.value)}></textarea>
<button onClick={()=>DeclineUser()}>Send</button>
    </div>
    {showLoader ?  <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/> : null }
  
  <AdminFooter/></main>)
                        }