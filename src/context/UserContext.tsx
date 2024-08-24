import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import axiosInstance from '../axiosInstance.ts';
import { User } from "../Model/User.ts";

// Define the structure of the context value
interface UserContextType {
    user: User | null;
    refreshUser: () => void;
}

// Create context with an empty object as the default value
const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    // Function to fetch the user data
    const fetchUser = () => {
        console.log("Fetching user data...");
        axiosInstance.get('/user')
            .then((response) => setUser(response.data))
            .catch(err => console.error(err));
    };

    // Fetch user data on component mount or location change
    useEffect(() => {
        fetchUser();
    }, []);

    // Provide both user and refreshUser function in context
    return (
        <UserContext.Provider value={{ user, refreshUser: fetchUser }}>
            {children}
        </UserContext.Provider>
    );
}

// Create a custom hook for easy access to the UserContext
export function useUser(): UserContextType {
    const context = useContext(UserContext);
    if(!context){
        throw new Error("Use User should be in a UserContext.Provider!");
    }
    return context;
}