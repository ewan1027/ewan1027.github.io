"use client";

import PageLayout from "@/components/PageLayout";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <PageLayout>
      <div className="landing-container flex flex-col md:flex-row bg-[var(--background)] min-h-[80vh]">
        {/* Left Section with Profile Card */}
        <div className="landing-left w-full md:w-1/2 p-6 md:p-10 flex justify-center items-center">
          <div className="card max-w-md p-8 text-center shadow-lg rounded-lg">
            <div className="flex justify-center mb-6">
              <div className="relative w-64 h-64 rounded-full bg-[#e9f0f3] flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/new_profile.png"
                  alt="Ewan Dirubut"
                  width={400}
                  height={400}
                  className="absolute"
                />
              </div>
            </div>
            <h1 className="poppins-semibold text-3xl mb-1">Ewan Dirubut</h1>
            <p className="montserrat-thin text-lg mb-6">Aspiring Software Engineer</p>
            <div className="contact-strip flex justify-center space-x-6">
              <a href="mailto:ewan6852@gmail.com" className="contact-link">
                <Image
                  src="https://ext.same-assets.com/3953338052/2424857983.png"
                  alt="Email"
                  width={25}
                  height={25}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/EwanDirubut/"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://ext.same-assets.com/3953338052/1390246219.png"
                  alt="LinkedIn"
                  width={25}
                  height={25}
                />
              </a>
              <a
                href="https://github.com/EwanDirubut"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://ext.same-assets.com/3953338052/3684934911.png"
                  alt="GitHub"
                  width={25}
                  height={25}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section with Introduction */}
        <div className="landing-right w-full md:w-1/2 p-6 md:p-10 flex justify-center items-center">
          <div className="about-me max-w-xl">
            <div className="hero-content">
              <h1 className="poppins-semibold text-6xl md:text-8xl mb-2">Hello</h1>
              <p className="montserrat-thin text-2xl mb-6">Here's who I am</p>

              <div className="flex gap-4 mb-8">
                <Link href="/resume">
                  <button className="btn-primary">RESUME</button>
                </Link>
                <Link href="/projects">
                  <button className="btn-outline">PROJECTS</button>
                </Link>
              </div>

              <p className="montserrat-thin text-lg mb-4">
                I’m a software engineering student with a focus on Java, C++, web development, and database management. Passionate about building innovative applications and exploring new technologies like Generative AI.
              </p>
              <p className="montserrat-thin text-lg mb-4">
                I enjoy working on both front-end and back-end projects and am constantly learning and applying new skills.
              </p>
              <p className="montserrat-thin text-lg">
                Outside of coding, I love reading and exploring emerging tech, as well as improving my communication skills, demonstrated through my success in the Provincial English Language Competition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
