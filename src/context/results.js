import { createContext, useState } from "react";
import { LYRICS_API_ENDPOINT, RESULTS_API_ENDPOINT } from "../constants/Constants";
import { purifyArtist } from "../utils/artist";

const ResultsContext = createContext();

const Provider = ({ children }) => {

  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [lyrics, setLyrics] = useState('');
  const [error, setError] = useState('');

  const getResults = async (term) => {
    try {
      setLoading(true);
      const response = await getResponse(RESULTS_API_ENDPOINT + term.toLowerCase());
      if(response.error){
        setError(response.error);
        setResults([]);
      }
      else {
        setResults(response.data);
        setError('');
      }
    } catch(e) {
      setError(e.message || e.toString());
    } finally {
      setLoading(false);
      setLyrics('');
    }
  }

  const getLyrics = async (artist, title) => {
    try {
      const purifiedArtist = purifyArtist(artist);
      const response = await getResponse(LYRICS_API_ENDPOINT + purifiedArtist + '\\' + title)
      if(response.error){
        setError(response.error);
        setLyrics('');
      }
      else {
        setLyrics(response.lyrics);
        setError('');
      }
    } catch(e) {
      setError(e.message || e.toString());
    }
  }

  const getResponse = async (apiCall) => {
    let response = await fetch(apiCall);
    response = await response.json();
    return response;
  }

  const contextValues = {
    loading,
    results,
    lyrics,
    error,
    getResults,
    getLyrics
  };

  return (
    <ResultsContext.Provider value={contextValues}>
      {children}
    </ResultsContext.Provider>
  );
}

export { Provider };
export default ResultsContext;