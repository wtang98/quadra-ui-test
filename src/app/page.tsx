"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "../redux/store";
import useMainPageHook from "../utils/useMainPageHook";

const page = () => {
    const dispatch = useDispatch<AppDispatch>();

    const number = useAppSelector(
        ({ fileReducer }) => fileReducer.value.number
    );

    const { numberColor } = useMainPageHook("ws://localhost:8080", dispatch);

    return (
        <div className="flex justify-center items-center bg-zinc-700 h-screen w-full">
            <div className="flex flex-col items-center">
                <div className="text-white">Quadra Test</div>
                <div className="rounded p-3 bg-zinc-800 min-w-28 flex justify-center ">
                    <p className={numberColor}>{number}</p>
                </div>
            </div>
        </div>
    );
};

export default page;
