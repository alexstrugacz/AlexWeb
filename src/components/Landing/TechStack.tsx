import React from "react";
import TechStackItem from "./TechStackItem";
const tailwind = require("../../assets/logos/tailwindlogo.png")
const typescript = require("../../assets/logos/typescriptlogo.png")



const TechStack: React.FC<{}> = () => {
    return (
        <div className="h-screen w-full">
            {/* <h1 className="text-4xl text-[#42446E] font-bold font-DM">Tech Stack</h1>
            <div className="grid grid-cols-5 mt-8 gap-12 ">
                <TechStackItem title="TailwindCSS" textColor="text-cyan-600" backgroundColor="bg-cyan-100" ringColor="ring-cyan-300/60" imageSource={require("../../assets/logos/tailwindlogo.png")} />
                <TechStackItem title="TypeScript" textColor="text-blue-900" backgroundColor="bg-blue-300" ringColor="ring-cyan-30/300" imageSource={require("../../assets/logos/typescriptlogo.png")} />
                <TechStackItem title="HTML" textColor="text-red-900" backgroundColor="bg-red-200" ringColor="ring-red-300/80" imageSource={require("../../assets/logos/htmllogo.png")} />
                <TechStackItem title="Javascript" textColor="text-yellow-900" backgroundColor="bg-yellow-200" ringColor="ring-yellow-300/80" imageSource={require("../../assets/logos/javascriptlogo.png")} />
                <TechStackItem title="Markdown" textColor="text-black" backgroundColor="bg-neutral-300" ringColor="ring-neutral-400/80" imageSource={require("../../assets/logos/markdownlogo.png")} />
                <TechStackItem title="Markdown" textColor="text-black" backgroundColor="bg-neutral-300" ringColor="ring-neutral-400/80" imageSource={require("../../assets/logos/markdownlogo.png")} />
                <TechStackItem title="Markdown" textColor="text-black" backgroundColor="bg-neutral-300" ringColor="ring-neutral-400/80" imageSource={require("../../assets/logos/markdownlogo.png")} />
                <TechStackItem title="Markdown" textColor="text-black" backgroundColor="bg-neutral-300" ringColor="ring-neutral-400/80" imageSource={require("../../assets/logos/markdownlogo.png")} />
                <TechStackItem title="Markdown" textColor="text-black" backgroundColor="bg-neutral-300" ringColor="ring-neutral-400/80" imageSource={require("../../assets/logos/markdownlogo.png")} />
                <TechStackItem title="Markdown" textColor="text-black" backgroundColor="bg-neutral-300" ringColor="ring-neutral-400/80" imageSource={require("../../assets/logos/markdownlogo.png")} />
                <TechStackItem title="Markdown" textColor="text-black" backgroundColor="bg-neutral-300" ringColor="ring-neutral-400/80" imageSource={require("../../assets/logos/markdownlogo.png")} />
                <TechStackItem title="Markdown" textColor="text-black" backgroundColor="bg-neutral-300" ringColor="ring-neutral-400/80" imageSource={require("../../assets/logos/markdownlogo.png")} />
                <TechStackItem title="Markdown" textColor="text-black" backgroundColor="bg-neutral-300" ringColor="ring-neutral-400/80" imageSource={require("../../assets/logos/markdownlogo.png")} />
                <TechStackItem title="Markdown" textColor="text-black" backgroundColor="bg-neutral-300" ringColor="ring-neutral-400/80" imageSource={require("../../assets/logos/markdownlogo.png")} />
                <TechStackItem title="Markdown" textColor="text-black" backgroundColor="bg-neutral-300" ringColor="ring-neutral-400/80" imageSource={require("../../assets/logos/markdownlogo.png")} />

            </div> */}
        </div>
    );
};

export default TechStack;