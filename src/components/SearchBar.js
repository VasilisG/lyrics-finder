import React, { useState } from 'react';
import useResultsContext from '../hooks/use-results-context';

const SearchBar = () => {

  const [term, setTerm] = useState('');

  const { getResults } = useResultsContext();

  const handleChange = (event) => {
    setTerm(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    getResults(term);
  }

  return (
    <form className='search-bar-form flex justify-center w-full px-4 sm:px-4 md:px-0 sm:w-full md:w-3/4 xl:w-1/2' onSubmit={handleSubmit}>
      <input className='search-input w-full text-white bg-stone-800/25 rounded-l-xl border border-stone-950 px-2 outline-none focus:outline-none' type='text' placeholder='Enter a song title...' value={term} onChange={handleChange} required/>
      <button className='search-button bg-stone-400 hover:bg-stone-300 p-2 rounded-r-xl border-t border-b border-r border-stone-950' type='submit'value='Search'>Search</button>
    </form>
  )
}

export default SearchBar;