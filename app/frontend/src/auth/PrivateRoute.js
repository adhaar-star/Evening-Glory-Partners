import { Redirect, Route } from 'react-router-dom';
import { useUser } from './useUser';

export const PrivateRoute = props => {
    const user = useUser();

    console.log(props)
    console.log("user-"+JSON.stringify(user))
    if (!user) return <Redirect to="/login" />

    return <Route {...props} />
}