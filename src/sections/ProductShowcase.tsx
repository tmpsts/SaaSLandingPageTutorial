"use client";
// import productImage from "@/assets/product-image.png";
import hawkTuahImage from "@/assets/hawktuah.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const productRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: productRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={productRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-wrap">
          <div className="flex justify-center">
            <div className="tag">I hope this hurts</div>
          </div>
          <h2 className="section-title mt-5">
            Face it little sheep, you are worthless
          </h2>
          <p className="section-description mt-5">
            Buy more crypto... I&apos;m hungry... nom nom nom nom. nom nom nom
            nom. nom nom nom nom.
          </p>
        </div>
        <div className="relative">
          <div className="mt-10 rounded-xl aspect-video">
            <Image
              src={hawkTuahImage}
              alt="Hawk Tuah Stock Price"
              className="aspect-video object-cover rounded-xl"
            />
          </div>
          <motion.img
            src={pyramidImage.src}
            alt="Pyramid Image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-36"
            style={{ translateY }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube Image"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-8 -left-36"
            style={{ translateY }}
          />
        </div>
      </div>
    </section>
  );
};
