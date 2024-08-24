import React from 'react';
import useResultsContext from '../hooks/use-results-context';
import ResultItem from './ResultItem';
import LoadingSpinner from './LoadingSpinner';

const Results = () => {

  const { loading, results } = useResultsContext();

  return loading ? <LoadingSpinner/> : results.length ? (
    <div className='results w-full'>
      <ul className='result-list sm:flex-column sm:align-center w-full'>
        {results.map(result => <li key={result.id} className='flex justify-center'><ResultItem data={result}/></li>)}
      </ul>
    </div>
  ) : (
    <div className='results w-full'>
      <p className='no-results text-center text-white'>No results found.</p>
    </div>
  )
}

export default Results;