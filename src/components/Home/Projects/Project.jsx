import { HiExternalLink } from "react-icons/hi";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  const { _id, img, title, type, link } = project;
  return (
    <div
      className="card w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%]  shadow-xl border border-gray-600   hover:border-amber-500 hover:transition duration-500 ease-in-out "
      data-aos="fade-up"
    >
      <div className="card-body ">
        <a target="_blank" href={link} rel="noreferrer">
          <div className="flex items-center justify-start">
            <h2 className="card-title">{title}</h2>
            <HiExternalLink className="text-2xl text-white" />
          </div>
        </a>
        <p className="text-gray-400 text-sm">{type}</p>
        <Link to={`/project/${_id}`}>
          <button className=" border mt-2 px-3 py-1 border-amber-400 rounded-md  hover:bg-gray-800 hover:text-white  transition  duration-300 ease-in-out">
            View details
          </button>
        </Link>
      </div>
      <figure>
        <img src={img} alt="websitePhoto" />
      </figure>
    </div>
  );
};

export default Project;
