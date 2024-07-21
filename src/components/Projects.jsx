"use client"

import { useState } from "react";

export default function Projects() {
  const [activeProject, setActiveProject] = useState('Project 1');

  const handleProjectClick = (project) => {
    setActiveProject(project);
  };

  return (
    <div className="bg-blue-50 py-8">
      <div id="projects" className="mx-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Projects we are proud of</h2>
        <p className="mb-8">Our software development company is truly proud of the wonderful clients we have worked with. We enjoy a long-term partnership</p>
        <div className="flex flex-row space-x-5">
          <div
            className={activeProject === 'Project 1' ? 'border-b-4 border-b-yellow-300 cursor-pointer' : 'cursor-pointer'}
            onClick={() => handleProjectClick('Project 1')}
          >
            Project 1
          </div>
          <div
            className={activeProject === 'Project 2' ? 'border-b-4 border-b-yellow-300 cursor-pointer' : 'cursor-pointer'}
            onClick={() => handleProjectClick('Project 2')}
          >
            Project 2
          </div>
          <div
            className={activeProject === 'Project 3' ? 'border-b-4 border-b-yellow-300 cursor-pointer' : 'cursor-pointer'}
            onClick={() => handleProjectClick('Project 3')}
          >
            Project 3
          </div>
          <div
            className={activeProject === 'Project 4' ? 'border-b-4 border-b-yellow-300 cursor-pointer' : 'cursor-pointer'}
            onClick={() => handleProjectClick('Project 4')}
          >
            Project 4
          </div>
        </div>
        <div className="flex">
          <div>
            <h2 className="my-10">{activeProject}</h2>
            <p className="text-sm">Crafted an innovative rental property management app, seamlessly integrating secure
              login, absence registration, and a tenant notice board. Elevating the resident
              experience with user-friendly design and efficient communication channels</p>
              <p className="my-10 text-gray-500">Business analysis / iOS / Android / QA / UI/UX Design</p>
              <div className="flex my-5">
                <p className="mx-10">India</p>
                <p>Real Estate</p>
              </div>
              <div className="flex space-x-10 my-5">
                <div>
                  <h2>400%</h2>
                  <span>User Growth</span>
                </div>
                <div>
                  <h2>+ 200 000</h2>
                  <span>Active Users</span>
                </div>
              </div>
              <div className="flex space-x-10">
                <a href=""><img src="https://freeiconshop.com/wp-content/uploads/edd/app-store-badge.png" alt="" /></a>
                <a href=""><img src="https://freeiconshop.com/wp-content/uploads/edd/google-play-badge.png" alt="" /></a>
              </div>
          </div>
          <div>
            <img src="https://www.figma.com/file/e7A6rGgInZisqOQ6ruCsn5/image/67816a2882ad7f15e26edcf5629068de100f570f" alt="" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}