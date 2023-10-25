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

export const Declines = (props) => {
  const [token, setToken] = useToken();
  const [user, setUser] = useUser();
    const [DeclinesLength,setDeclinesLength] = useState(0);
    const [declines, setDeclines] = useState([]);
    const [showLoader,setshowLoader] = useState(false);
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
    
      
    //    fetchData();
    },[props.users])


    const fetchUsers = async () => {
      let declined=[];
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/getUsers`,{"user_id":user},{headers: {
        Authorization: `Bearer ${token}`
      }}).
      then((data)=>{
        console.log("users-")
        declined = data.data.users
      //  setValidationMessages(data.data.msgs)
  
      }
  
      ).catch((e)=>{
       // setValidationMessages(e.response.data.msgs)
      })
  
    
      
    
     
  
      console.log(declined)
      declined = declined.filter((decline) => props.users.includes(decline.user_id))
      setDeclinesLength(declined.length)
     // let temp_accepted = all_accepted_me.split(",");
      //  all_accepted_me = all_accepted_me.filter((user) => user.friends.find((friend) => friend.userId===current_user._id )); 
      setDeclines(declined);
    }



            


                const addFriend =  async (userId) => {
                  setshowLoader(true);
                  await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/addFriend`,{user_id:user,friend_id: userId,mode: "to"},{headers: {
                    Authorization: `Bearer ${token}`
                  }}).
                  then((data)=>{
                    setshowLoader(false);
                    console.log("users-")
                  //  console.log(data.data.users)
            //setUsers(data.data.users)
            if(data.status===200){
              props.fetchDeclines();
              setValidationMessages(data.data.msgs)
            }
                  }
            
                  ).catch((e)=>{
                //    setValidationMessages(e.response.data.errors)
               //     setValidationMessages(e.response.data.msgs)
                  })
                }

                

    return (
    <main>
    <Header token={token} DeclinesLength={DeclinesLength}/>
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
{Array.isArray(declines) && declines.map((user,i) => 
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
                            title="Accept Again" onClick={(event)=>addFriend(user.user_id)}><i className="fa fa-user" aria-hidden="true"></i></button>
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