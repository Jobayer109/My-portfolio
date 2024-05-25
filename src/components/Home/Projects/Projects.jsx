import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BounceLoader } from "react-spinners";
import Project from "./Project";

const Projects = () => {
  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:4000/projects`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return (
      <BounceLoader
        color="#FFC000"
        style={{
          position: "fixed",
          top: "35%",
          left: "48%",
          paddingBottom: "100px",
        }}
      />
    );
  }
  console.log(projects);
  return (
    <div className="flex justify-center items-center ">
      <div
        className="mt-24 sm:mb-20 md:mb-36 lg:mb-36 px-8 md:px-18 lg:px-36 "
        data-aos="fade-up"
      >
        <h3 className="text-3xl font-semibold  text-gray-300">Projects</h3>
        <div className="h-[3px] bg-amber-500 mb-8 w-[113px] blur-sm"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-12">
          {projects?.map((project) => (
            <Project key={project._id} project={project}></Project>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
