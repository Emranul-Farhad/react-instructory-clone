import React from 'react';
import './Search.css';

const Search = () => {
    return (
        <div>
            <div className='container sm d-flex justify-content-center'>
                <input className='input' type="text" placeholder='Start Learning! EX: Fiver Freelmcing Course ' />
                <button className='sb'>Search Anything</button>
            </div>
        </div>
    );
};

export default Search;