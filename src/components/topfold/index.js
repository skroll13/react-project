import React, {useState} from 'react'
import './topfold.css'

const TopFold = () => {
    const[query, setQuery] = useState("");
    const handleQuery = (e) => {
        setQuery(e.target.value)
    }
  return (
    <div className='topfold'>
        {window.location.pathname ==='/' ? <div className='home-topfold'>
        
            <div className='searchbar'>
                <i className="fi fi-rr-search"></i>
                    <input 
                    placeholder='search for expenses' 
                    onChange={(e) => handleQuery(e)}
                />
            </div>
            <div className='add-button'>
                <i className="fi fi-rr-add"></i>
                <label>Add</label>
            </div>
        </div> : (
                <div className='add-topfold'>  
                    <div className='add-topfold-button'>
                        <i className="fi fi-rr-angle-left"></i>
                        <label>Back</label>
                    </div>
                    <div className='add-topfold-button'>
                        <i className="fi fi-rr-x"></i>
                        <label>Cancel</label>
                    </div>
                </div>
        )}
    </div>
  )
}

export default TopFold
