import Logo from "./Logo";
import CustomLink from "./CustomLink";
import { GithubLogo, LinkDinIcon, TwitterIcon } from "./Icons";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <header className="relative w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" />
        <CustomLink href="/about" title="About" />
        <CustomLink href="/projects" title="Projects" />
        <CustomLink href="/articles" title="Articles" />
        <CustomLink href="/slider" title="Slider" />
      </nav>
      <div className="absolute bottom-3 left-[50%] translate-x-[-50%]">
        <Logo />
      </div>
      <nav className="flex justify-center items-center gap-3">
        <motion.a
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
          href="https://twitter.com"
          target={"_blank"}
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
          href="https://linkdin.com"
          target={"_blank"}
        >
          <LinkDinIcon />
        </motion.a>
        <motion.a
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
          href="https://twitter.com"
          target={"_blank"}
        >
          <GithubLogo />
        </motion.a>
        <motion.a
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
          href="https://twitter.com"
          target={"_blank"}
        >
          <LinkDinIcon />
        </motion.a>
        <motion.a
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
          href="https://twitter.com"
          target={"_blank"}
        >
          <TwitterIcon />
        </motion.a>
      </nav>
    </header>
  );
};

export default Navbar;
