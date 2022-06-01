import Loading from "../components/Loading";
import useFetch from "../hooks/useFetch";

export default function ImageHd() {
  const APIkey = `${process.env.REACT_APP_API_KEY}`;
  const url = "api.nasa.gov/planetary/apod?api_key=";

  const { apod, isLoading } = useFetch(`${url}${APIkey}`);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <figure className="flex justify-center items-center">
          <img src={apod.hdurl} alt={apod.title} title={apod.title} />
        </figure>
      )}
    </>
  );
}
