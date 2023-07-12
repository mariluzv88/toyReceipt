import React from 'react'
import { lastIndexOf } from '../models/toys'

function Toys(props) {
  return (
    <div className='toyReceipt'>
      
      <span>Receipt</span><hr/>
      <h1>{props.toyInfo.name}</h1>
      <h2>Price: {props.toyInfo.price}</h2>
      <h2>Is Fun: {props.toyInfo.isFun}</h2>
      <h3>Amount: {props.toyInfo.type.amount}</h3>
      <h3>Age: {props.toyInfo.age}</h3>
      <ul>
        {props.toyInfo.type.colors.map((type)=>{
          return (<li>{type}</li>)
        })}
      </ul>
      
      
     
    </div>
  )
}

export default Toys