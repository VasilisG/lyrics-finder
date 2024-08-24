import { useContext } from "react";
import ResultsContext from "../context/results";

const useResultsContext = () => {
  return useContext(ResultsContext);
}

export default useResultsContext;