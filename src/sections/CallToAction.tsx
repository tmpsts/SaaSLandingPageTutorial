"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const callRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: callRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={callRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-wrap relative">
          <h2 className="section-title">Join Us.</h2>
          <p className="section-description mt-5">
            It&apos;s not too late! Join us before you grow old and fill with
            the ever increasing weight of the sins you carry.
          </p>
          <motion.img
            src={starImage.src}
            alt="Star Image"
            width={360}
            className="hidden md:block absolute -left-[380px] -top-[137px]"
            style={{ translateY: translateY }}
          />
          <motion.img
            src={springImage.src}
            alt="Spring Image"
            width={360}
            className="hidden md:block absolute -right-[351px] -top-[19px]"
            style={{ translateY: translateY }}
          />
        </div>
        <div className="flex justify-center gap-2 mt-10">
          <button className="btn btn-primary">Good Choice</button>
          <button className="btn btn-text gap-1">
            <span>Oh Well...</span>
            <ArrowIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
