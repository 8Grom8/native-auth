import { onAuthStateChanged, User } from 'firebase/auth';
import React, {createContext, useEffect, useMemo, useState, FC} from 'react';
import { auth, login, db, register, logout} from '../firebase';
import {Alert} from 'react-native';
import {addDoc, collection} from "@firebase/firestore";

interface Icontext{
    user: User | null
    isLoading: boolean;
    register: (email: string, password: string) => Promise<void>
    login: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>
}

export const AuthContext = createContext<Icontext>({} as Icontext)

export const AuthProvider: FC = ({children}) => {
    const [user, setUser] = useState<User | null>(null)
    const [isLoadingInitial,setIsLoadingInitial] = useState(true)
    const [isLoading,setIsLoading] = useState(false)

    const registerHandler = async(email:string, password: string) =>{
        setIsLoading(true)
        try {
            const {user} = await register(email, password)
            await addDoc(collection(db,'users'),{
                _id: user.uid,
                displayName: "No name",
            })
        } catch (error:any) {
            Alert.alert("Error reg.", error)
        }finally{
            setIsLoading(false)
        }
    }
    const loginHandler  = async(email:string, password: string) =>{
        setIsLoading(true)
        try {
            await login(email, password)
        } catch (error:any) {
            Alert.alert("Error logIn.", error)
        }finally{
            setIsLoading(false)
        }
    }

    const logOutHandler = async() =>{
        setIsLoading(true)
        try {
            await logout()
        } catch (error:any) {
            Alert.alert("Error logOut.", error)
        }finally{
            setIsLoading(false)
        }
    }

useEffect(() => onAuthStateChanged(auth,user => {
    setUser(user || null)
    setIsLoadingInitial(false)
}),[])

    const value = useMemo(() => ({
user, isLoading, login: loginHandler, logout: logOutHandler, register: registerHandler
}),[user, isLoading])
    return (
        <AuthContext.Provider value={value}>
        {!isLoadingInitial && children}
        </AuthContext.Provider>
    );
}

