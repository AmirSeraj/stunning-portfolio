import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  console.log(router);
  return (
    <Link href={href} className={`mx-4 relative group ${className}`}>
      {title}
      <span
        className={`
      h-[1px] bg-black -bottom-0.5 right-0 absolute group-hover:w-full transition-[width] ease duration-500
      ${router.asPath === href ? 'w-full' : 'w-0'}
      `}
      ></span>
    </Link>
  );
};

export default CustomLink;
