import React from "react";
import Hero from "./Hero";
import TechStack from "./TechStack";
import Projects from "./projects/Projects";

const Landing: React.FC<{}> = () => {
    return (
        <div>
            <div className="h-screen bg-[#FFFFF} px-32">
                <Hero />
                {/* <TechStack /> */}
                {/* <Projects /> */}
            </div>
        </div>
    );
};

export default Landing;