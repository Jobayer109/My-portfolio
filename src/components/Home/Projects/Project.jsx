import { HiExternalLink } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./Project.css";

const Project = ({ project }) => {
  const { _id, img, title, type, link } = project;
  return (
    <div
      className="card w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%]  hover:shadow-xl hover:shadow-gray-600 border border-gray-600   hover:border-amber-500 hover:transition duration-300 ease-in-out"
      data-aos="fade-up"
    >
      <div className="card-body ">
        <a target="_blank" href={link} rel="noreferrer">
          <div className="flex items-center justify-start gap-1">
            <h2 className="card-title text-2xl text-amber-400">{title}</h2>
            <HiExternalLink className="text-xl text-white" />
          </div>
        </a>
        <p className="text-gray-400 text-sm">{type}</p>
        <Link to={`/project/${_id}`}>
          <button className=" border mt-2 px-3 py-1 border-amber-400 rounded-md  hover:bg-gray-800 text-amber-100 hover:text-white  transition  duration-300 ease-in-out">
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
