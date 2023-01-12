import React from "react";
import Hero from "./Hero";
import TechStack from "./TechStack";

const Landing: React.FC<{}> = () => {
    return (
        <div>
            <div className="h-full bg-[#FFFFF} px-32">
                <Hero />
                <TechStack />
            </div>
        </div>
    );
};

export default Landing;