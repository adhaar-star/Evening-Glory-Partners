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

export const UserList = () => {
  const [token, setToken] = useToken();
  const [user, setUser] = useUser();
  const [showLoader,setshowLoader] = useState(false);
    const [users, setUsers] = useState([]);
    const [currentUser, setcurrentUser] = useState();
   
    const [validationMessages, setValidationMessages] = useState([]);
    const history = useHistory();


    useEffect(() =>{
   
      if(!token){
        history.push("/");
       // localStorage.removeItem('token')
    }
    else{
        fetchData();
    }
    },[])

    const fetchData = async () => { 

let all_users=[];
     const response =  await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/getUsers`,{user_id: user},{headers: {
        Authorization: `Bearer ${token}`
      }}).then((response)=> {
        console.log(response)
        if(response.data.message == "User not authentificated"){
          localStorage.removeItem('token')
   // history.push('/login');
        }
        all_users=response.data.users;
            
       // setValidationMessages(response.data.msgs)

      })
      .catch((e)=> {
       // setValidationMessages(e.response.data.msgs)
      })

      let current_user = {};

      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/getCurrentUser`,{user_id: user},{headers: {
        Authorization: `Bearer ${token}`
      }}).
      then((data)=>{
 console.log(data.data.user[0])
        current_user=data.data.user[0];
        setcurrentUser(data.data.user[0])
      //  setValidationMessages(data.data.msgs)
      } )
      .catch((e)=>{
    //    setValidationMessages(e.response.data.msgs)
      })

     console.log(all_users)
     console.log(current_user)


      all_users = all_users.filter((user) => !user.requests || user.requests.includes(current_user.user_id)==false); 

      console.log(all_users)

      all_users = all_users.filter((user) => !current_user.requests || current_user.requests.includes(user.user_id)==false); 

      console.log(all_users)
      
      all_users = all_users.filter((user) => !user.friends || user.friends.includes(current_user.user_id)==false); 

      console.log(all_users)
      
      all_users = all_users.filter((user) => !current_user.friends || current_user.friends.includes(user.user_id)==false); 

      console.log(all_users)
      
      all_users = all_users.filter((user) => !user.declines || user.declines.includes(current_user.user_id)==false); 

      console.log(all_users)
      
      all_users =  all_users.filter((user) => !current_user.declines || current_user.declines.includes(user.user_id)==false); 
      

      console.log(all_users)

      setUsers(all_users)


      


    
    }
    const sendRequest = async (requestId) => {
      setshowLoader(true);
      console.log(requestId)
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/addRequest`,{user_id:user,request_id: requestId},{headers: {
        Authorization: `Bearer ${token}`
      }}).
      then((data)=>{
        setshowLoader(false);
        console.log("users-")
      //  console.log(data.data.users)
//setUsers(data.data.users)
if(data.status===200){
  setValidationMessages(data.data.msgs)
  fetchData();
}
else{
  setValidationMessages(data.data.msgs)
}
      }
     

      ).catch((e) => {
      //  setValidationMessages(e.response.data.msgs)
      })
    }

    return (
      
    <main>
    <Header token={token}/>
    {validationMessages && <Messages messages={validationMessages}/>}
    <div className="container">
      

        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Username</th>
              <th scope="col">E-Mail</th>
              <th scope="col">Age</th>
              <th scope="col">Profession</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
{users.map((user,i) => 
           (
              <tr key={i}>
                <td>
           
                  {user.username}
                </td>
                <td>
               
                  {user.email}
                </td>
                <td>
               
               {user.age}
             </td>
             <td>
               
               {user.profession}
             </td>
            
                <td>

                 <button className="btn btn-success"
                            title="send Request" onClick={(event)=>sendRequest(user.user_id)}><i className="fa fa-user" aria-hidden="true"></i></button>



           

                         

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