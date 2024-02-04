"use client";
import React from "react";
import useMainPageHook from "../utils/useMainPageHook";

const page = () => {
    const { number, numberColor } = useMainPageHook();
    return (
        <div className="flex justify-center items-center bg-zinc-700 h-screen w-full text-green-500">
            <div className="flex flex-col items-center text-white">
                <p>Quadra Test</p>
                <div className="rounded p-3 bg-zinc-800 min-w-28 flex justify-center ">
                    <p className={numberColor}>{number}</p>
                </div>
            </div>
        </div>
    );
};

export default page;
