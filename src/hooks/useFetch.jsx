import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch() {
  const [apod, setApod] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setApod(res.data))
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);

  return { apod, isLoading };
}
