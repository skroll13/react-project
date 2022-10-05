import React, { useEffect, useState } from 'react'
import Card from './card';
import './expense-list.css'
import { useSelector } from 'react-redux'

const ExpenseList = () => {
     const {expenseList: list, query} = useSelector(state => state.expenses);
     const filteredList = list.filter((item) => item.title.includes(query))
  return <div className='expense-list'>  
  {filteredList.length ? filteredList.map((item) => (
  <Card item = {item} />
  )) : <div className='empty-state'>
   <img src={require('../../assets/images/empty.png')} alt='Empty List' className='empty image' />
   <label> Your list is Empty</label>
  </div>}
  </div>;
}

export default ExpenseList