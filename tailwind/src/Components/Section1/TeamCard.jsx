import React from "react";

const TeamCard = ({ name, role, image }) => {
  return (
    <div className="bg-white p-4 rounded-3xl shadow-lg">
      <img
        src={image}
        alt={name}
        className="w-full h-72 object-cover rounded-2xl"
      />

      <div className="mt-4">
        <h3 className="font-semibold text-lg">{role}</h3>
        <p className="text-gray-500">{name}</p>
      </div>
    </div>
  );
};

export default TeamCard;