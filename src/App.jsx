import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SocialDash from './components/SocialDash'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SocialDash/>
    </>
  )
}

export default App
