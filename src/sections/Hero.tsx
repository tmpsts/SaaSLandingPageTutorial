"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center ">
          <div className="md:w-[478px]">
            <div className="tag">
              This Is My Website About Shapes | Version 2
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              I Love My Shapes!
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              These are my favorite shapes, all except for the noodle. The
              noodle does&apos;t seem to have a concept of personal space. This
              is because the noodle was raised in a broken home. Can&apos;t you
              tell?
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Eat the noodle</button>
              <button className="btn btn-text gap-1">
                <span>I&apos;m on mobile and I can&apos;t seee itt :C</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={cogImage.src}
              alt="Cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY: [-30, 30],
                z: 1,
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={cylinderImage.src}
              width={220}
              height={220}
              alt="Cylinder image"
              className="hidden md:block -top-8 -left-32 absolute"
              style={{ translateY: translateY }}
            />
            <motion.img
              src={noodleImage.src}
              width={220}
              alt="Noodle image"
              className="hidden lg:block absolute top-[556px] left-[448px]"
              style={{ rotate: 30, translateY: translateY }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
