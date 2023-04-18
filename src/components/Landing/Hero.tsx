import React from "react";
const me = require("../../assets/pfpfinal.png")
const resume = require("../../assets/resume.pdf");

const Header: React.FC<{}> = () => {
    return (
        <div className="pb-64">
            <div className="w-full flex justify-between py-8 items-center h-max  z-30">
                <a className="text-3xl text-transparent font-DM font-bold bg-clip-text bg-gradient-to-r from-[#164052] to-[#000000]">{` < Alex Strugacz />`}</a>
                <div className="flex font-DM text-lg text-[#666666]">
                    <div className="flex gap-12 ">
                        <a href="/" className="hover:font-bold transition-all">Projects</a>
                        <a href="/" className="hover:font-bold transition-all"> Tech Stack</a>
                        <a href="/" className="hover:font-bold transition-all">About Me</a>
                        <a href="/" className="hover:font-bold transition-all">Contact</a>
                    </div>
                </div>

            </div>
            <div className="flex h-full ">
                <div>
                    <h1 className="mt-[50%] text-5xl font-DM text-[#42446E] font-bold leading-tight ">Alex Strugacz <br></br>
                        <h2 className='text-3xl font-DM text-[#777998] font-md'>Fullstack Developer</h2>

                    </h1>
                    <div className="flex mt-5">
                        <button onClick={() => window.open("https://github.com/Nectar0")} className="p-2 w-12 h-12 text-emerald-900 bg-emerald-200 group rounded-md ring-2 ring-emerald-300/30 outline-none"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="group-hover:scale-90 h-full w-full ease-in-out transition-all" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></button>
                        <button onClick={() => window.open("https://twitter.com/AlexStrugacz")} className="p-2 w-12 h-12 ml-5 text-sky-900 bg-sky-200 group rounded-md ring-2 ring-sky-300/30 outline-none"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="group-hover:scale-90 h-full w-full ease-in-out transition-all" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path></svg></button>
                        <button onClick={() => window.open("https://www.linkedin.com/in/alex-strugacz/")} className=" ml-5 p-2 w-12 h-12 text-blue-900 bg-blue-200 group rounded-md ring-2 ring-blue-300/30 outline-none"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="scale-90 group-hover:scale-[0.8] h-full w-full ease-in-out transition-all" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path></svg></button>
                        <a className="hover:scale-[1.05] flex justify-center items-center p-2 px-3 h-12 w-28 ml-5 bg-blue-300 text-blue-900 outline-none ring-2 ring-blue-900 font-DM font-bold rounded-full ease-in-out transform transition-all cursor-pointer" href={resume} download={resume}> Resume<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="group-hover:scale-90 h-full w-full ease-in-out transition-all ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path></svg></a>
                    </div>
                </div>
                {/* <div className="ml-[40vh] mt-[10vh] bg-neutral-400 rounded-full w-[349px] h-[349px] pt-6 bg-gradient-to-r relaxed from-[#13B0F5] to-[#ff00b7]"> */}
                {/* <img src={me} className="rounded-full hover:scale-[1.05] transition-all"></img > */}
                {/* </div> */}
            </div>
        </div>
    );
};

export default Header;