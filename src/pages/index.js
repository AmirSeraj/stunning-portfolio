import AnimatedText from "@/components/AnimatedText";
import CustomLink from "@/components/CustomLink";
import HireMe from "@/components/HireMe";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { IoCloudDownloadOutline } from "react-icons/io5";

export default function Home() {
  return (
    <>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src="/images/profile/developer-pic-1.png"
                className="w-full h-auto"
                width={500}
                height={500}
                alt="CodeBucks"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl text-left"
              />
              <p className="my-4 text-base font-medium">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2 gap-1">
                <Link
                  className="bg-dark gap-2 flex items-center justify-center text-light py-2 px-3 hover:bg-light hover:text-dark border-2 border-transparent hover:border-dark transition duration-1000 rounded-lg shadow-lg shadow-slate-500"
                  download={true}
                  href="/dummy.pdf"
                  target={"_blank"}
                >
                  Resume
                  <IoCloudDownloadOutline />
                </Link>
                <CustomLink
                  href="mailto:amir.seraj6990@gmail.com"
                  className="text-dark font-bold"
                  title="Contact"
                />
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  );
}
