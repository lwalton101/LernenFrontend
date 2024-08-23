import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import axiosInstance from '../axiosInstance.ts';
import {User} from "../Model/User.ts";

// create context with an empty object as the default value
const UserContext = createContext<any>(null);

export function UserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Fetch the user data
        axiosInstance.get('/user').then((r) => setUser(r.data)).catch(err => console.error(err));
    }, []);

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
}

// Create a custom hook for easy access to the UserContext
export function useUser(): User | null {
    return useContext(UserContext);
}
