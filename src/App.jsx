import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const feedback = useSelector((state) => state)

  const handleGood = () => dispatch({ type: 'GOOD' })
  const handleOk = () => dispatch({ type: 'OK' })
  const handleBad = () => dispatch({ type: 'BAD' })
  const handleReset = () => dispatch({ type: 'ZERO' })

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button> 
      <button onClick={handleOk}>ok</button> 
      <button onClick={handleBad}>bad</button>
      <button onClick={handleReset}>reset stats</button>

      <h2>statistics</h2>
      <p>good: {feedback.good}</p>
      <p>ok: {feedback.ok}</p>
      <p>bad: {feedback.bad}</p>
    </div>
  )
}

export default App