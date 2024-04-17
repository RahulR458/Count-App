import React from 'react'
import './Count.css'

export default function Count({count, onIncrement,  onDecrement}) {
  return (
    <div className='count'>
      <h1 className='count-h1'>Count App</h1>
      <div className="main-container">
      <div className="sub-container-one">
        <div className='text'>
        <h3 >ezy</h3>
        <h1 >count</h1>
        </div>
        <div className="counter-container">
          <h1>{count}</h1>  
        </div>
        <div className='button-container'>
          <button className='button' onClick={onDecrement} >-</button>
          <button className='button' onClick={onIncrement} >+</button>
        </div>
      </div>
      {/* <div className="sub-container-two"> */}
        
        <img className="sub-container-two" src="/public/clock.jpg" alt="" />
      {/* </div> */}
    </div>
    </div>
  );
}
