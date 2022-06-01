import NasaLogo from "../assets/images/nasalogo.png";
import ViewButton from "../components/Viewbutton";
import BlobTop from "../components/Blobs/Blobtop";
import BlobBottom from "../components/Blobs/Blobbottom";
import Saturngif from "../components/Saturngif";
import BlobMobile from "../components/Blobs/BlobMobile";

export default function Home() {
  return (
    <>
      <header className="pt-10 flex gap-3 justify-center items-center font-body text-4xl font-semibold">
        <img src={NasaLogo} alt="Logo da Nasa" />
        <h1>NASA APOD</h1>
      </header>
      <main className="pt-10">
        <div className="flex flex-col justify-center items-center text-center">
          <BlobTop />
          <h1 className="font-extrabold	text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-title-blue via-title-purple to-title-pink">
            Discover the cosmos!
          </h1>
          <h2 className="pt-5 max-w-md lg:text-lg lg:max-w-2xl text-center font-bold">
            Each day a different image or photograph of our fascinating universe
            is featured, along with a brief explanation written by a
            professional astronomer.
          </h2>
          <div>
            <ViewButton text="View image of the day" />
          </div>
          <BlobBottom />
          <Saturngif />
          <BlobMobile />
        </div>
      </main>
    </>
  );
}
