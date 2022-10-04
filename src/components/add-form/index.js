import React, { useState } from 'react'
import './add-form.css'

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleTitle = (e)=>{
    setTitle(e.target.value)
  }

  const handleAmount = (e) =>{
    const val = parseFloat(e.target.value)
    if(isNaN(val)){
      setAmount("");
      return
    }
    setAmount(val)
  }
  return (
  <div className='add-form'>
    <div className='form-item'>
      <label>Title</label>
      <input 
      placeholder='name the expense' 
      value={title} 
      onChange= {(e)=> handleTitle(e)} 
      />
    </div>
    <div className='form-item'>
      <label>Amount $</label>
      <input 
      className='amount-input'
      value={amount}
      placeholder="enter amount"
      onChange={(e) => handleAmount(e)}
      />
    </div>
      <div className='category-container-parent'>
    </div>
  </div>
  )
}

export default AddForm