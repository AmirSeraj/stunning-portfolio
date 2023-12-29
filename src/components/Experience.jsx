import React from "react";

const Details = ({ position, company, companyLink, time, address, work }) => {
  return (
    <li>
      <div>
        <h3>
          {position}&nbsp;<a href={companyLink}>@{companyLink}</a>
        </h3>
        <span>
          {time} | {address}
        </span>
        <p>{work}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  return (
    <div className="my-48">
      <h2 className="text-8xl font-bold text-center mb-32 w-full">
        Experience
      </h2>

      <div className="w-[75%] mx-auto relative">
        <ul>
          <Details />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
