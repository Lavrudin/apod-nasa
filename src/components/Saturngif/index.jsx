import Saturngif from "../../assets/images/saturn.gif";

export default function SaturnGif() {
  return (
    <figure className="flex justify-center bg">
      <img
        className="w-4/6 lg:w-auto"
        src={Saturngif}
        alt="Um gif de Saturno"
      />
    </figure>
  );
}
