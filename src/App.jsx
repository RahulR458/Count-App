import { useState } from 'react'
import Count from './components/Count'

function App() {
  const [count, setCount] = useState(0)

  // onDecrement = () => setCount(prevCount => prevCount -1 )
  //  incrementByAmount = (amount) => setCount(prevCount => prevCount + amount)

  const onDecrement =  () => setCount(count - 1)
  const onIncrement = () => setCount(count + 1)

  return (
    <Count  count={count} onIncrement={onIncrement} onDecrement={onDecrement}  />
  )
}

export default App
