import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <Head>
        <title>CodeBucks | About Page</title>
        <meta name="description" content="any description you want" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-5">
          <AnimatedText text="Passion Fuels Purpose!" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium mb-7">
                - Hi, I'm CodeBucks, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients' visions to life.
              </p>
              <p className="font-medium mb-7">
                - I believe that design is about more than just making things
                look pretty – it's about solving problems and creating
                intuitive, enjoyable experiences for users.
              </p>
              <p className="font-medium">
                - Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="w-[103%] h-[102%] bg-gray-600 rounded-[1rem] -right-3 -bottom-3 -z-20 absolute" />
              <Image
                src="/images/profile/developer-pic-2.jpg"
                className="w-full h-auto rounded-2xl"
                width={300}
                height={500}
              />
            </div>

            <div className="col-span-2 flex flex-col items-left justify-around text-xl">
              <div>
                <span className="font-bold text-5xl">
                  50+
                </span>
                <h2 className="capitalize text-dark/75 font-medium">satisfied clients</h2>
              </div>

              <div>
                <span className="font-bold text-5xl">
                  40+
                </span>
                <h2 className="capitalize text-dark/75 font-medium">projects completed</h2>
              </div>

              <div>
                <span className="font-bold text-5xl">
                  4+
                </span>
                <h2 className="capitalize text-dark/75 font-medium">years of eperience</h2>
              </div>
            </div>

          </div>
        </Layout>
      </main>
    </>
  );
};

export default About;
