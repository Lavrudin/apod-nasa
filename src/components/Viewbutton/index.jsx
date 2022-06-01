import { Link } from "react-router-dom";

export default function ViewButton(props) {
  return (
    <Link to={`/details`}>
      <button className="my-24 p-5 px-20 text-xl lg:px-28 rounded-md lg:text-2xl font-bold bg-button text-color-button outline-none hover:brightness-90 transition ease-in-out duration-500">
        {props.text}
      </button>
    </Link>
  );
}
