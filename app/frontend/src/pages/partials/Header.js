import axios from 'axios';
import {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'

import { useToken } from '../../auth/useToken';
import { useUser } from '../../auth/useUser';
import { useQueryParams } from '../../util/useQueryParams';

export const Header = (RequestsLength,RequestsSentLength,FriendsLength,AcceptedMeLength,DeclinedMeLength,DeclinesLength) => {

  const history = useHistory();
  const [token, setToken] = useToken();
  const [user,setUser]  = useUser();
  const [requests, setRequests] = useState([]);



  useEffect(()=> {
  

    

  },[])

 

 

  
  
  const logOut = async (e) => {
    console.log("logout")
    e.preventDefault();
  localStorage.removeItem('token')
  localStorage.removeItem('user_id')
  
    history.push('/login');
  

 
}

    return (<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
      aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          {!token && <a className="nav-link" href="/login">Home</a> }
          {token && <a className="nav-link" href="/userlist">Home</a> }
        </li>
  
    
  
        
       
      
      {token  && <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Requests {RequestsLength+RequestsSentLength >0 ? requestslength+RequestsSentLength: ''}</a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/requestsReceived">Received {RequestsLength >0 ? RequestsLength: ''}</a>
          <a className="dropdown-item" href="/requestsSent">Sent {RequestsSentLength >0 ? RequestsSentLength: ''}</a>
        </div>
        </li> }
  
        {token  && <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Acceptances {AcceptedMeLength+FriendsLength >0 ? AcceptedMeLength+FriendsLength : ''}</a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/iAccepted">i Accepted {FriendsLength >0 ? FriendsLength : ''}</a>
          <a className="dropdown-item" href="/AcceptedMe">Accepted Me {AcceptedMeLength >0 ? AcceptedMeLength : ''}</a>
        </div>
        </li> }
  
        {token  && <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Declined {DeclinesLength+DeclinedMeLength >0 ? DeclinesLength+DeclinedMeLength : ''}</a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/iDeclined">i Declined {DeclinesLength >0 ? DeclinesLength : ''}</a>
          <a className="dropdown-item" href="/DeclinedMe">Declined Me {DeclinedMeLength >0 ? DeclinedMeLength : ''}</a>
        </div>
        </li> }
  
       
        
       
      </ul>
      <ul className="navbar-nav my-2 my-lg-0">
  
       
            <li className="nav-item">
  {token && <a className="btn btn-success nav-link" href="#" onClick={(e)=>logOut(e)}><i className="fa fa-lock" aria-hidden="true"></i>
                Logout</a>}
                {!token &&  <a className="btn btn-success nav-link" href="/login"><i className="fa fa-lock" aria-hidden="true"></i>
                Login</a>}
            </li>
  

      </ul>
    </div>
  </nav>)
}