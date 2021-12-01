import React from 'react';
import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
  const dispach = useDispatch()
  const counter = useSelector(state => state.counter)
  const show = useSelector(state => state.showCounter)

  const incrementHandler = () => {
    dispach({ type: 'increment' })
  };

  const decrementHandler = () => {
    dispach({ type: 'decrement' })
  };

  const increaseHandler = () => {
    dispach({ type: 'increase', amount: 10 })
  }

  const toggleCounterHandler = () => {
    dispach({ type: 'toggle' })
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>increase by 10</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
    </main>
  );
};

export default Counter;
