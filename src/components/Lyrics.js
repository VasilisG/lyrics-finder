import React, { useEffect, useRef } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useResultsContext from '../hooks/use-results-context';
import { formatLyrics } from '../utils/lyrics';

const Lyrics = () => {

  const { loading, lyrics, error, results } = useResultsContext();

  const lyricsRef = useRef(null);

  useEffect(() => {
    lyricsRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [lyrics]);

  const showInfo = () => {
    return `<p class='my-4 font-thin py-4 xl:py-0'>Click on <span class='font-bold'>Get Lyrics</span> to show the lyrics of a song.</p>`;
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(lyrics);
    toast.info('Lyrics copied to clipboard.', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: false,
        closeButton: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
    })
  }

  const showLyrics = () => {
    return error ? (
      <div ref={lyricsRef} className='error w-full text-center text-red-600 bg-stone-800/80 py-4 mb-3 px-4 md:px-0 md:mx-auto xl:mx-0 w-full'>{error}</div>
    ) : results.length ? (
      <div ref={lyricsRef} className={`lyrics w-full text-center text-white bg-stone-800/80 hover:bg-stone-800 hover:cursor-copy mb-3 px-4 md:px-0 md:mx-auto xl:mx-0 w-full ${lyrics ? 'py-4' : ''}`} 
      dangerouslySetInnerHTML={{
         __html: lyrics ? formatLyrics(lyrics) : results.length ? showInfo() : null
      }}
      onClick={() => lyrics ? copyToClipboard() : {}}
      ></div>
    ) : <div ref={lyricsRef} className='hidden'></div>;
  }

  return (
    <>
     {loading ? null : showLyrics()}
     <ToastContainer/>
    </>
  )
}

export default Lyrics;