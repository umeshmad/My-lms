import React,{createContext,useState,useContext, Children} from 'react'

const Authcontext=createContext();
    
export const useAuth=()=>{
    return useContext(Authcontext);
    }
    export const Authprovider=({Children})=>{
        const [isLoggedIn , setIsLoggedIn]=useState(false);
        const [user, setUser]=useState(null);

        const login=(userdata)=>{
            setIsLoggedIn(true);
            setUser(userdata);
            localStorage.setItem('user', JSON.stringify(userdata));
        };

        const logout=()=>{
            setIsLoggedIn(false);
            setUser(null);
            localStorage.removeItem('user');
        };

        const checkAuth=()=>{
            const loggedIn = localStorage.getItem('isLoggedIn')=== 'true';
            const userdata =JSON.parse(localStorage.getItem('user'));
            if(loggedIn && userdata){
                setIsLoggedIn(true);
                setUser(userdata);
            }
        };
        const value={
            isLoggedIn,
            user,
            login,
            logout,
            checkAuth,
        };

        return <Authcontext.Provider value={value}>{Children}</Authcontext.Provider>;


    };

    
export default function auth() {
    
  return (
    <div>
        
    </div>
  )
}
