import {useHistory} from 'react-router-dom'
import { useToken } from '../../auth/useToken';
import { useQueryParams } from '../../util/useQueryParams';

export const AdminHeader = (current_token,current_user) => {

  const history = useHistory();
  const [token, setToken] = useToken();

  const logOut = (e) => {
    console.log("logout")
    e.preventDefault();
  localStorage.removeItem('token')
  localStorage.removeItem('user_id')
    history.push('/admin/login');
}

    return (<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <a className="navbar-brand" href="/">Admin</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
      aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
  
        <li className="nav-item">
          <a className="nav-link" href="/admin/login">Login</a>
        </li>
  
        
       
      </ul>
      <ul className="navbar-nav my-2 my-lg-0">
  
       
            <li className="nav-item">
  {token && <a className="btn btn-success nav-link" href="#" onClick={(e)=>logOut(e)}><i className="fa fa-lock" aria-hidden="true"></i>
                Logout</a>}
                {!token &&  <a className="btn btn-success nav-link" href="/admin/login"><i className="fa fa-lock" aria-hidden="true"></i>
                Login</a>}
            </li>
  

      </ul>
    </div>
  </nav>)
}