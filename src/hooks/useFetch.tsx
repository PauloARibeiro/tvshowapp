import { useEffect, useState } from 'react';
import IFetchResult from '../interfaces/FetchResult';

function useFetch(url: string): IFetchResult<any> {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setResult(res);
        setError(null);
      })
      .catch((err) => {
        setResult(null);
        setError(err);
      });
  }, [url]);

  return [result, error];
}

export default useFetch;
