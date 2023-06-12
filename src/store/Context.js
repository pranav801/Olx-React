import {createContext, useState} from 'react'

export const FirebaseContext = createContext()
export const AuthContext = createContext()


export default function Context({children}) {
    const [user,setUser] = useState('Hello world')
    return (

        <AuthContext.Provider value={{user,setUser}} >
            {children}
        </AuthContext.Provider>
    )
}