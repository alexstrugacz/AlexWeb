import React from "react";
import Hero from "./Hero";
import TechStack from "./TechStack";
import Projects from "./projects/Projects";

//testing if this repository still works

const Landing: React.FC<{}> = () => {
    return (
        <div>
            <div className="h-screen bg-[#FFFFFF} px-32">
                <Hero />
                {/* <TechStack /> */}
                {/* <Projects /> */}
            </div>
        </div>
    );
};

export default Landing;