import React from 'react';

import './search-area.css';

const SearchArea = ({handleSearch, searchBook, handleSort}) => {
        return(
            <div className="search-area">
                <form onSubmit={searchBook} action="">
                    <input type="text"
                    placeholder="Enter the name of book..." 
                    onChange={handleSearch}/>
                    <button type="submit">Search</button>
                    <select defaultValue="Sort" onChange={handleSort}>
                        <option disabled value="Sort">Sort</option>
                        <option value="Newest">Newest</option>
                        <option value="Oldest">Oldest</option>
                    </select>
                </form>
            </div>
        )
    }

export default SearchArea;