import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Button, ButtonGroup } from '@chakra-ui/react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button colorScheme='blue'>Button</Button>
    </div>
  )
}

export default App
