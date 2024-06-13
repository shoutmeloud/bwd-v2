"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ScrollDown } from "../index";

export default function Banner() {
    const [scrollDirection, setScrollDirection] = useState(null);
    const [visibleLetters, setVisibleLetters] = useState(0);
    const [animationComplete, setAnimationComplete] = useState(false);

    const handleWheel = (event) => {
        if (!animationComplete) {
            event.preventDefault();
        }
        const deltaY = event.deltaY;
        if (deltaY > 0) {
            setScrollDirection("down");
        } else if (deltaY < 0) {
            setScrollDirection("up");
        }
    };

    useEffect(() => {
        window.addEventListener("wheel", handleWheel, { passive: false });
        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, [animationComplete]);

    useEffect(() => {
        const text = "Experience BWD";
        const totalLetters = text.length;

        if (visibleLetters === totalLetters) {
            setAnimationComplete(true);
        }

        const timer = setTimeout(() => {
            if (scrollDirection === "down" && visibleLetters < totalLetters) {
                setVisibleLetters((prev) => prev + 1);
            } else if (scrollDirection === "up" && visibleLetters > 0) {
                setVisibleLetters((prev) => prev - 1);
            }
        }, 50); // Adjust the timing as needed

        return () => clearTimeout(timer);
    }, [scrollDirection, visibleLetters]);

    return (
        <div className="pt-14 h-[100vh]">
            <div className="flex items-center justify-center h-full flex-col">
                <h1 className="text-[53px] leading-[75px] text-white text-center">
                    {Array.from("Experience BWD").map((letter, index) => (
                        <span
                            key={index}
                            className={`${
                                index < visibleLetters ? "opacity-100" : "opacity-0"
                            } transition-opacity duration-500`}
                        >
                            {letter}
                        </span>
                    ))}
                </h1>
                <div className="flex items-center justify-center flex-col">
                    <div className="border-line h-[150px] w-[1px] mt-8 line"></div>
                    <div className="pt-3">
                        <Image src={ScrollDown} priority alt="Scroll Down" className="scroll-down-animation w-6" />
                    </div>
                </div>
                <div className="flex items-center justify-center flex-col">
                    <div className="pt-3">
                        <p className="text-white text-[16px] pt-5 tracking-[2px]">Scroll Down</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
