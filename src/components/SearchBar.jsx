import React from 'react'

const SearchBar = ({
    filterText, 
    inStockOnly, 
    onFilterTextChange, 
    onInStockOnlyChange
    }) => {  
  return (
    <div>
        <form action="#">
            <input type="text" 
            value={filterText} 
            placeholder='Search...'
            onChange={(e) => onFilterTextChange(e.target.value)} /><br /> 
            <label htmlFor="">
                <input type="checkbox" 
                checked={inStockOnly}
                onChange={(e) => onInStockOnlyChange(e.target.checked)} />
                {" "} Only show products in stock  
            </label> 
        </form>
      
    </div>
  )
}

export default SearchBar
