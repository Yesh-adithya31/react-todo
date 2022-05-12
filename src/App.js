import React from 'react'
import ToDo from './component/ToDo'
import SignIn from './component/SignIn'
import { auth } from './config/firebaseConfig'
import { useAuthState } from 'react-firebase-hooks/auth'


const App = () => {
  const [user] = useAuthState(auth)
  return (
    user ? <ToDo/> : <SignIn/>
  )
}

export default App

