import React from 'react';
import useResultsContext from '../hooks/use-results-context';
import { formatDuration } from '../utils/duration';

const ResultItem = ({ data }) => {

  const { getLyrics } = useResultsContext();

  const handleClick = async () => {
    await getLyrics(data.artist.name, data.title);
  }

  return (
    <div className='result-item mb-3 bg-stone-800/80 w-full'>
      <div className='result-inner-container flex-col-reverse md:flex-row flex p-4'>
        <div className='image-container md:mr-6'>
          <img className='artist-image shadow-2xl min-w-[120px] hidden md:inline' src={data.artist.picture} alt={data.artist.name}/>
          <div className='lyrics-container text-center mt-4'>
            <button className='lyrics-button text-white bg-sky-600 hover:bg-sky-700 rounded py-1 px-2' type='button' onClick={handleClick}>Get lyrics</button>
          </div>
        </div>
        <div className='details-container text-white w-full px-0 md:px-6 md:border-l md:border-stone-600'>
          <div className='info-container'>
            <p className='result-title mb-4 text-center md:text-left text-xl'>{data.title}</p>
            <p className='artist-title flex flex-col align-center md:block mb-3 md:mb-2'><span className="font-thin inline-block lg:mr-2 text-center md:text-left md:w-20">Artist:</span><span className='artist text-center md:text-left'>{data.artist.name}</span></p>
            <p className='album-title flex flex-col align-center md:block mb-3 md:mb-2'><span className="font-thin inline-block lg:mr-2 text-center md:text-left md:w-20">Album:</span><span className='album text-center md:text-left'>{data.album.title}</span></p>
            <p className='result-duration flex flex-col align-center md:block mb-3 md:mb-2'><span className="font-thin inline-block lg:mr-2 text-center md:text-left md:w-20">Duration:</span><span className='duration text-center md:text-left'>{formatDuration(data.duration)}</span></p>
          </div>
          <div className='preview-container flex flex-col align-center md:flex-row items-center mb-3 md-mb-0'>
            <span className='preview font-thin inline-block lg:mr-2 text-center md:text-left md:w-20'>Preview:</span>
            <audio className="grayscale w-3/4 text-center md:text-left" src={data.preview} controls></audio>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultItem;