import React from "react";
import Title from "./Title";
import { teamData } from "../assets/assets";

const Teams = () => {
  return (
    <div className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 py-30 text-gray-800 dark:text-white">
      <Title
        title="Meet the team"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, quis. adipisicing elit. Assumenda, quis."
      />
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {teamData.map((team, index) => (
          <div
            key={index}
            className="flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700   shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 transition-all duration-400"
          >
            <img
              src={team.image}
              alt={team.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="text-sm font-semibold">{team.name}</h3>
              <p className="text-xs opacity-60">{team.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
