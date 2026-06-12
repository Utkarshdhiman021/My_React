import React from "react";
import TeamCard from "./TeamCard";
import teamData from "./teamData";

const Section1 = () => {
  return (
    <section className="min-h-screen w-full py-10">
      <h1 className="text-5xl font-bold text-center text-blue-500">
        Shodwe Tech Startup
      </h1>

      <p className="text-gray-500 text-center mb-10">
        Meet the talented team behind our success
      </p>

      <div className="grid grid-cols-3 gap-6 mt-10">
        {teamData.map((member) => (
          <TeamCard
            key={member.id}
            name={member.name}
            role={member.role}
            image={member.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Section1;