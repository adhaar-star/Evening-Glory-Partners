import { Redirect, Route } from 'react-router-dom';
import { useUser } from './useUser';

export const AdminPrivateRoute = props => {
    const user = useUser();

console.log("user-"+JSON.stringify(user))
    if (!user) return <Redirect to="/admin/login" />

    return <Route {...props} />
}