import { ArrowLeft } from "phosphor-react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import ShareButton from "../components/Sharebutton";
import useFetch from "../hooks/useFetch";

export default function Details() {
  const APIkey = `${process.env.REACT_APP_API_KEY}`;
  const url = "api.nasa.gov/planetary/apod?api_key=";

  const { apod, isLoading } = useFetch(`${url}${APIkey}`);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <header className="flex bg-[#0b3d91] border-b-2 z-50 sticky top-0 border-indigo-400">
            <div className="flex items-center w-full ml-5 border-r-2 border-indigo-400">
              <div>
                <p className="text-xs lg:text-sm">{apod.title}</p>
                <p className="py-1 px-3 text-xs w-max rounded-xl bg-[#6F79C4]">
                  {apod.media_type}
                </p>
              </div>
            </div>
            <Link
              title="Return"
              className="flex justify-center items-center w-24 h-16 hover:brightness-90 transition ease-in-out duration-500"
              to={`/`}
            >
              <ArrowLeft size={24} />
            </Link>
          </header>
          <section className="flex flex-col items-center">
            <div className="flex flex-col w-[90%] items-center max-w-4xl">
              <Link
                className="rounded-xl mt-8 "
                to={"/imagehd"}
                target="_blank"
              >
                <img
                  title={apod.title}
                  className="rounded-xl hover:brightness-50 transition-all duration-700 cursor-zoom-in"
                  src={apod.url}
                  alt={apod.title}
                />
              </Link>

              <div className="flex flex-col ">
                <div className="flex justify-between items-center pt-5 pb-3 border-b-2 border-indigo-400">
                  <p className="font-semibold">Information</p>
                  <div className="flex  gap-5 ">
                    <ShareButton />
                  </div>
                </div>
                <div className="flex justify-between text-sm pt-3 pb-3 border-b-2 border-indigo-400">
                  <p>Created by</p>
                  <p>{apod.copyright}</p>
                </div>
                <div className="flex justify-between text-sm pt-3 pb-3 border-b-2 border-indigo-400">
                  <p>Date</p>
                  <p>{apod.date}</p>
                </div>
                <div className="flex flex-col gap-3 justify-between pt-5 pb-10">
                  <p className="font-semibold">Description</p>
                  <p className="text-sm">{apod.explanation}</p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
