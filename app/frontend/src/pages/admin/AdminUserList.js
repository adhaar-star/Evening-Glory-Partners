import {useEffect, useState} from 'react'
import axios from 'axios'
import { AdminHeader } from "../partials/AdminHeader"
import { AdminFooter } from "../partials/AdminFooter"
import { Messages } from "../partials/Messages"
import { useToken } from '../../auth/useToken';
import { useUser } from '../../auth/useUser';
import { useHistory } from 'react-router-dom';

import { useQueryParams } from '../../util/useQueryParams';

export const AdminUserList = () => {
  const [token, setToken] = useToken();
  const [user, setUser] = useUser();
  const [validationMessages, setValidationMessages] = useState([]);
  const history = useHistory();


    const [users, setUsers] = useState([]);

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
      console.log("reach")
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/admin/getAllUsers`, {user_id: user},{ headers: {Authorization: `Bearer ${token}`}}).
            then((data)=>{
              console.log("users-")
              console.log(data.data.users)
      setUsers(data.data.users)
      setValidationMessages(data.data.msgs)
            }
      
            )
      
              }

    const verifyUser = async (event,userId) => {
      event.preventDefault();
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/admin/verifyUser`,{user_id: user,verify_id: userId} ,{ headers: {Authorization: `Bearer ${token}`}}).
      then((data)=>{
    let users_clone = [...users];
users_clone.find(current_user => current_user.user_id==userId ).verified = 1

setUsers(users_clone);
setValidationMessages(data.data.msgs)
      }

      )
    }

    return (
    <main>
    <AdminHeader token={token}/>
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
                <td >
                  {user.age}
                </td>
                <td>
                  {user.profession}
                </td>
                <td>

              

                {user.verified==1 ? <div>Member</div> :
                    <a href="#" onClick={(event)=>verifyUser(event,`${user.user_id}`)}className="btn btn-success"
                      title="Verify user"><i className="fa fa-check" aria-hidden="true"></i></a>
                }
              
                </td>
                <td>

                          <a href={`/admin/userlist/decline/${user.user_id}`} className="unverify btn btn-danger"
                            title="Delete user"><i className="fa fa-times" aria-hidden="true"></i></a>
</td>
              
              </tr>
          )    
        )
            }
          </tbody>
        </table>

    </div>
    
  
  <AdminFooter/></main>)
                        }