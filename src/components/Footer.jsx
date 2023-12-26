import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-dark border-t-2 border-solid border-dark font-medium text-lg mt-auto">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()}&copy; All rights Reserved.</span>

        <div className="flex justify-center items-center">
          Build with{" "}
          <span className="text-2xl px-1 text-red-700 ">&#9825;</span>
          <Link href="/sss" className="underline font-bold underline-offset-2">
            CodeBucks
          </Link>
        </div>
        <Link href="/" className="flex justify-center items-center" target={"_blank"}>
          Say hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
