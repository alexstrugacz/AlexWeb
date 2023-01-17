import React from "react";
import ProjectItemBig from "./ProjectItemBig";

const Projects: React.FC<{}> = () => {
    return (
        <div>
            <div className="h-screen w-full">
                <h1 className="text-5xl text-[#42446E] font-bold font-DM w-full text-center">Projects</h1>
                <p className="text-[#42446E] font-regular font-DM w-full text-center mt-2 ">Awesome things I've built so far</p>
                <div className="grid grid-cols-2 w-full gap-8 mt-20">
                    <ProjectItemBig />
                    <ProjectItemBig />
                </div>
                <div className="grid grid-cols-3 w-full gap-8 mt-12">
                    <ProjectItemBig />
                    <ProjectItemBig />
                    <ProjectItemBig />

                </div>
            </div>
        </div>
    );
};

export default Projects;