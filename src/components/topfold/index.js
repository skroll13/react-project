import React, {useState} from 'react'
import { Link } from 'react-router-dom'
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
            <Link to='/add-expense'>
                <div className='add-button'>
                    <i className="fi fi-rr-add"></i>
                    <label>Add</label>
                </div>
            </Link>
        </div> : (
                <div className='add-topfold'> 
                    <Link to="/">
                        <div className='add-topfold-button'>
                            <i className="fi fi-rr-angle-left"></i>
                            <label>Back</label>
                        </div>
                    </Link>
                    <Link to='/'>
                        <div className='add-topfold-button'>
                            <i className="fi fi-rr-x"></i>
                            <label>Cancel</label>
                        </div>
                    </Link>    
                </div>
        )}
    </div>
  )
}

export default TopFold
