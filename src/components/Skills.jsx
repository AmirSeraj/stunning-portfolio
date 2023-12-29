import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="cursor-pointer flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-40 w-full text-center">Skills</h2>
      <div className="w-full h-screen flex items-center justify-center bg-circularLight relative rounded-full">
        <motion.div
          className="cursor-pointer flex items-center justify-center rounded-full font-semibold bg-dark text-light p-3"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="CSS" x="-4vw" y="-9vw" />
        <Skill name="HTML" x="25vw" y="6vw" />
        <Skill name="JavaScript" x="-33vw" y="6vw" />
        <Skill name="React" x="-13vw" y="3vw" />
        <Skill name="Next" x="3vw" y="9vw" />
      </div>
    </>
  );
};

export default Skills;
