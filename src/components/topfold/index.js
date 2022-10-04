import React, {useState} from 'react'
import './topfold.css'

const TopFold = () => {
    const[query, setQuery] = useState("");
    const handleQuery = (e) => {
        setQuery(e.target.value)
    }
  return (
    <div className='topfold'>
        <div className='home-topfold'>
            <div className='searchbar'>
            <i className="fi fi-rr-search"></i>
                <input 
                placeholder='search for expenses' 
                onChange={(e) => handleQuery(e)}
                />
            </div>
        </div>
    </div>
  )
}

export default TopFold
