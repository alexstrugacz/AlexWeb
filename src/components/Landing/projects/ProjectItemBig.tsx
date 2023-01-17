import React from "react";

const ProjectItemBig: React.FC<{}> = (props) => {
    return (
        <div>
            <div className={`h-[300px] w-full  ring-4 ring-offset-4 rounded-xl text-xl font-bold ml-0 flex flex-col hover:-mt-1 transform transition-all duration-100 ease-in-out`}>
                <div className="h-1/2 flex flex-col justify-center mt-5 items-center">
                    <img src={""} alt="" className="h-full" />
                </div>
                <div className={`flex flex-col text-center w-full justify-center mt-2`}>
                    <p className="opacity-95"></p>
                    <p className="mt-6 text-lg font-light flex flex-col justify-center items-center opacity-90">
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectItemBig;