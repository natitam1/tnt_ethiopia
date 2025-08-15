import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const servicesData = [
    {
      title: "Advertising",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage...",
      icon: assets.ads_icon,
    },
    {
      title: "Advertising",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage...",
      icon: assets.marketing_icon,
    },
    {
      title: "Advertising",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage...",
      icon: assets.content_icon,
    },
    {
      title: "Advertising",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage...",
      icon: assets.social_icon,
    },
  ];
  return (
    <div
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
        alt=""
      />
      <Title
        title="How can we help?"
        desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, ipsam!
      adipisicing elit. Libero, ipsam! adipisicing elit. Libero, ipsam!"
      />
      <div className="flex flex-col md:grid grid-cols-2">
        {servicesData.map((service, index) => (
          <ServicesCard key={index} index={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
