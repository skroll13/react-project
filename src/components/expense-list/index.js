import React from 'react'
import Card from './card';
import './expense-list.css'

const ExpenseList = () => {
     const list=[
        {
        title: "made a purchase",
        logo: "logo here",
        createdAt: Date.now(),
        amount: 324,
     },
        {
        title: "made a purchase",
        logo: "logo here",
        createdAt: Date.now(),
        amount: 324,
     },
    ]
  return <div> {list.length ? list.map((item) => <Card item={item} />) : null} </div>;
}

export default ExpenseList