import { useState } from 'react'
import UserSignUpForm  from '../Components/UserSignUpForm/UserSignUpForm'
import './App.css'
import 'flowbite'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <UserSignUpForm/>
    </>
  )
}

export default App
