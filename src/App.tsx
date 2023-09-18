import { useState } from 'react'
import Header from './components/Layout/Header'
import Main from './components/Layout/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App
