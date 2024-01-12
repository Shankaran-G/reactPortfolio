import React from "react";

interface Skill {
  name: string;
  proficiency: string;
  level: number;
}

const Skills: React.FC<{ skills: Skill[] }> = ({ skills }) => {
  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="display-4 text-center mb-5">Skills</h2>
        <div className="row">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{skill.name}</h5>
                  <p className="card-text">Proficiency: {skill.proficiency}</p>
                  <div className="skill-level">
                    {Array.from({ length: skill.level }, (_, index) => (
                      <span key={index} className="filled"></span>
                    ))}
                    {Array.from({ length: 5 - skill.level }, (_, index) => (
                      <span key={index} className="empty"></span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
