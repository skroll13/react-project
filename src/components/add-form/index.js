import React, { useState } from 'react'
import { categories } from '../../pages/add-expense/add-expense';
import './add-form.css'
import { useDispatch } from 'react-redux'
import { addExpense }  from '../../redux/actions/expenses'


const AddForm = () => {
  const cat = categories;
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [categoryOpen, setCategoryOpen] = useState(false)
  const dispatch = useDispatch();

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

  const handleCategory = (category) =>{
    setCategory(category)
    setCategoryOpen(false)
    console.log(category);
  }

  const handleSubmit = () =>{
    if(title === '' || amount===''|| !category){
      console.log('not data');
      return;
    }
    const data = {
      title,
      amount,
      category,
      createdAt: new Date()
    }
    dispatch(addExpense(data))
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
        <div className='category'>
          <div 
          className='category-dropdown' 
          onClick={()=> setCategoryOpen(!categoryOpen)}
          >
            <label>{category ? category.title : 'Category'}</label>
            <i className="fi fi-rr-angle-down"></i>
          </div>
          {categoryOpen && <div className='category-container'>
            {cat.map(category=>(
              <div 
              className='category-item' 
              style={{borderRight: `5px solid${category.color}`}} 
              key={category.id} 
              onClick={()=>handleCategory(category)}
              >
                <label>{category.title}</label>
                <img src={category.icon.default} alt={category.title} />
              </div>
            ))}
        </div>}
      </div>
  </div>
  <div className='form-add-button'>
    <div onClick={handleSubmit}>
      <label>Add</label>
      <i className="fi fi-rr-paper-plane"></i>

    </div>
  </div>
</div>
)
}

export default AddForm