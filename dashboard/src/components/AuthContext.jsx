import { useState, useEffect, createContext, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({children}){
    const [user,setUser] = useState(null);

    useEffect(()=> {
        fetch("http://localhost:3000/user",{
            method:"GET",
            credentials:"include"
        })
        .then((res)=>res.json())
        .then((data) => {
            if(data.status){
                setUser(data.user)
            }else{
                window.location.href="http://localhost:5173/login"
            }
        })
        .catch(()=> {
            window.location.href="http://localhost:5173/login"
        })
    },[]);
    return(
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext);