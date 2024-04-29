"use client";
import { author } from "@/contents/Author";
import { motion } from "framer-motion";
import { Splash } from "next/font/google";
import Link from "next/link";

const splashFont = Splash({
  weight: "400",
  subsets: ["latin"],
});

export default function () {
  return (
    <motion.header>
      <h1 className={`${splashFont.className} text-2xl`}>
        <Link href="/">{author.nickName}</Link>
      </h1>
    </motion.header>
  );
}
