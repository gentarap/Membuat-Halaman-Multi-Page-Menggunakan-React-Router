import React from "react";

const projects = [
  {
    id: 1,
    title: "Project A",
    desc: "Deskripsi project A",
  },
  {
    id: 2,
    title: "Project B",
    desc: "Deskripsi project B",
  },
  {
    id: 3,
    title: "Project C",
    desc: "Deskripsi project C",
  },
];

function Portfolio() {
  return (
    <div className="container py-5">
      <h2 className="mb-4">Portfolio Kami</h2>
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
