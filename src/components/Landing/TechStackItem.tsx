import React from "react";
// const tailwind = require("../../assets/logos/tailwindlogo.png")
// const typescript = require("../../assets/logos/typescriptlogo.png")



const TechStackItem: React.FC<{
    title: string;
    imageSource: string;
    backgroundColor: string;
    ringColor: string;
    textColor: string;
}> = (props) => {
    return (

        <div className={`h-[200px] w-[200px] ${props.backgroundColor} ring-4 ring-offset-4 ${props.ringColor} rounded-xl text-xl font-bold ml-0 flex flex-col hover:-mt-1 transform transition-all duration-100 ease-in-out`}>
            <div className="h-1/2 flex flex-col justify-center mt-5 items-center">
                <img src={props.imageSource} alt="" className="h-full" />
            </div>
            <div className={`flex flex-col text-center w-full justify-center mt-2 ${props.textColor}`}>
                <p className="opacity-95">{props.title}</p>
                <p className="mt-6 text-lg font-light flex flex-col justify-center items-center opacity-90">
                </p>
            </div>
        </div>
    )
};

export default TechStackItem;