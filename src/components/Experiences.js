import React from "react";
import experiences from "../data/experiences";
import ExperienceCard from "./ExperienceCard";

function Experiences() {
  return (
    <div>
      <h2>Experiencias Recomendadas</h2>
      <div className="exp-list">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </div>
    </div>
  );
}

export default Experiences;