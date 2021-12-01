import React from 'react'
import classes from './Counter.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../store/counter'

const Counter = () => {
  const dispach = useDispatch()
  const { counter, showCounter } = useSelector((state) => state.counter)

  const incrementHandler = () => {
    dispach(counterActions.increment())
  }

  const decrementHandler = () => {
    dispach(counterActions.decrement())
  }

  const increaseHandler = () => {
    dispach(counterActions.increase(10))
  }

  const toggleCounterHandler = () => {
    dispach(counterActions.toggleCounter())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>increase by 10</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
    </main>
  )
}

export default Counter
