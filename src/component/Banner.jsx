import React from "react";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <motion.h1
            animate={{ rotate: 180, transition: { duration: 2 } }}
            className="text-5xl font-bold"
          >
            Career Code{" "}
          </motion.h1>
          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="py-6"
          >
            Career Code is a platform that provides comprehensive resources and
            guidance to help individuals navigate their career paths.
          </motion.p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
