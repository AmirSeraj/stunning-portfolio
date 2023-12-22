import Link from "next/link";
import Logo from "./Logo";
import CustomLink from "./CustomLink";

const Navbar = () => {
  return (
    <header className="relative w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" />
        <CustomLink href="/about" title="About" />
        <CustomLink href="/projects" title="Projects" />
        <CustomLink href="/articles" title="Articles" />
      </nav>
      <div className="absolute bottom-3 left-[50%] translate-x-[-50%]">
        <Logo />
      </div>
      <nav>
        <Link href="/" target={"_blank"}>
          Twitter
        </Link>
        <Link href="/" target={"_blank"}>
          Twitter
        </Link>
        <Link href="/" target={"_blank"}>
          Twitter
        </Link>
        <Link href="/" target={"_blank"}>
          Twitter
        </Link>
        <Link href="/" target={"_blank"}>
          Twitter
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
