import React from "react";
import Title from "./Title";
import assets from "../assets/assets";

const OurWork = () => {
  const workData = [
    {
      title: "Mobile App Development",
      description: "Creating user-friendly and efficient mobile applications.",
      image: assets.work_mobile_app,
    },
    {
      title: "Web Development",
      description: "Building responsive and dynamic websites.",
      image: assets.work_fitness_app,
    },
    {
      title: "Dashboard management",
      description: "Developing intuitive dashboards for data visualization.",
      image: assets.work_dashboard_management,
    },
  ];
  return (
    <div
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
      id="our-work"
    >
      <Title
        title="Our latest work"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsa
      recusandae amet perferendis, saepe dolorum temporibus voluptatem alias
      velit nobis"
      />
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {workData.map((work, index) => (
            <div
              key={index}
              className="hover:scale-102 duration-500 transition-all cursor-pointer"
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full rounded-xl"
              />
              <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
              <p className="text-sm opacity-60 w-5/6">{work.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWork;
