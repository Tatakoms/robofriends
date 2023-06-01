import React from "react";

const SearchBox =({ searchfield, searchChange }) => {
    return (
        <div className='pa2'>
            <input 
            className='tc pa3 ba b--purple bg-light-pink'
            type='search' 
            placeholder ='search cats'
            onChange = {searchChange}
            />
        </div>
    );
}

export default SearchBox;
