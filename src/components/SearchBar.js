import React, { useState, useRef } from 'react';
import useResultsContext from '../hooks/use-results-context';

const SearchBar = () => {

  const inputRef = useRef(null);

  const [term, setTerm] = useState('');

  const { getResults } = useResultsContext();

  const handleChange = (event) => {
    setTerm(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    inputRef.current.blur();
    getResults(term);
  }

  return (
    <form className='search-bar-form flex justify-center w-full px-4 sm:px-4 md:px-0 sm:w-full md:w-3/4 xl:w-[500px] h-[50px]' onSubmit={handleSubmit}>
      <button className='search-button bg-zinc-800 px-3 py-2 rounded-l-[30px]' type='submit'value='Search'>
        <img className='search-icon w-6 h-6' src={`${process.env.PUBLIC_URL}/assets/icons/search.svg`} alt='Search Icon'/>
      </button>
      <input ref={inputRef} className='search-input w-full text-white bg-zinc-800 rounded-r-[30px] px-2 outline-none focus:outline-none' type='text' placeholder='Enter a song title...' value={term} onChange={handleChange} required/>
    </form>
  )
}

export default SearchBar;