import React from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1>Login Form</h1>
      <Login />
      <br></br>
      <br></br>
      <Profile />
    </UserContextProvider>
  )
}

export default App
