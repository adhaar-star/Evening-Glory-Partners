import { useState, useEffect } from 'react';
import { useToken } from './useToken';

export const useUser = () => {
 /* const [token] = useToken();

    const getPayloadFromToken = token => {
        console.log("token-"+token)
        const encodedPayload = token.split('.')[1];
        return JSON.parse(atob(encodedPayload));
    }

    const [user, setUser] = useState(() => {
        if (!token) return null;
        return getPayloadFromToken(token);
    });

    useEffect(() => {
        if (!token) {
            setUser(null);
        } else {
            setUser(getPayloadFromToken(token));
        }
    }, [token]);
    
   
    return user;*/
    const [currentUser, setUserInternal] = useState(() => {
        return localStorage.getItem('user');
    });

    const setcurrentUser = newUser => {
        localStorage.setItem('user', newUser);
        setUserInternal(newUser);
    }

    return [currentUser, setcurrentUser];

}