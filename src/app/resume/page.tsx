"use client";

import PageLayout from "@/components/PageLayout";
import Link from "next/link";

export default function Resume() {
  return (
    <PageLayout>
      <div className="max-w-5xl mx-auto p-6 md:p-10">
        <div className="text-center mb-8">
          <h1 className="poppins-semibold text-4xl mb-4">Resume</h1>
          {/* Replace the href with the actual path to your CV file */}
          <a
            href="/CV/Ewan_Dirubut_CV.pdf" // Update this path to your actual CV file
            className="btn-primary inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>

        {/* Experience Section */}
        <div className="mb-12">
          <h2 className="poppins-semibold text-2xl mb-6">Experience</h2>

          <div className="card mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-1">
                <div className="mb-2">
                  <h3 className="text-[var(--accent)] poppins-semibold text-xl">2020 - Present</h3>
                  <p className="font-semibold">Freelance Web Developer</p>
                  <p className="text-sm montserrat-thin">Various Clients (Remote)</p>
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="montserrat-thin">
                  Collaborated with small companies to develop websites and digital content, including video editing and logo creation. 
                  Gained hands-on experience in front-end development using HTML, CSS, JavaScript, and back-end development with MongoDB. 
                  Developed custom solutions, refining problem-solving skills and enhancing knowledge in full-stack web development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <h2 className="poppins-semibold text-2xl mb-6">Education</h2>

          <div className="card mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-1">
                <div className="mb-2">
                  <h3 className="text-[var(--accent)] poppins-semibold text-xl">Nov 2024 - Present</h3>
                  <p className="font-semibold">National Institute of Business Management (NIBM)</p>
                  <p className="text-sm">Higher National Diploma in Software Engineering</p>
                  <p className="text-sm montserrat-thin">Undergraduate</p>
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="montserrat-thin">
                  Pursuing a Higher National Diploma with a focus on software development, programming, and database management. 
                  This program has enhanced my understanding of software engineering principles and my ability to create efficient software solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="card mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-1">
                <div className="mb-2">
                  <h3 className="text-[var(--accent)] poppins-semibold text-xl">Nov 2023 - Nov 2024</h3>
                  <p className="font-semibold">National Institute of Business Management (NIBM)</p>
                  <p className="text-sm">Diploma in Software Engineering</p>
                  <p className="text-sm montserrat-thin">Undergraduate</p>
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="montserrat-thin">
                  This diploma has provided me with practical knowledge in software development, database management, and system analysis. 
                  I’ve gained hands-on experience with various software engineering techniques and tools.
                </p>
              </div>
            </div>
          </div>

          <div className="card mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-1">
                <div className="mb-2">
                  <h3 className="text-[var(--accent)] poppins-semibold text-xl">Nov 2022</h3>
                  <p className="font-semibold">King's College London</p>
                  <p className="text-sm">Introduction to Business Management</p>
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="montserrat-thin">
                  Gained organizational and team collaboration skills while developing a foundation in business management.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Certifications */}
          <div className="card mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-1">
                <div className="mb-2">
                  <h3 className="text-[var(--accent)] poppins-semibold text-xl">2024</h3>
                  <p className="font-semibold">Microsoft & LinkedIn</p>
                  <p className="text-sm">Career Essentials in Generative AI</p>
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="montserrat-thin">
                  This certification focused on AI, Generative AI, and computer ethics, equipping me with cutting-edge knowledge in AI technologies.
                </p>
              </div>
            </div>
          </div>

          <div className="card mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-1">
                <div className="mb-2">
                  <h3 className="text-[var(--accent)] poppins-semibold text-xl">2024</h3>
                  <p className="font-semibold">LinkedIn Learning</p>
                  <p className="text-sm">Introduction to Artificial Intelligence</p>
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="montserrat-thin">
                  Focused on the application of Artificial Intelligence in business, which broadened my understanding of AI technologies and their role in innovation.
                </p>
              </div>
            </div>
          </div>

          <div className="card mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-1">
                <div className="mb-2">
                  <h3 className="text-[var(--accent)] poppins-semibold text-xl">2021</h3>
                  <p className="font-semibold">IELTS - IDP</p>
                  <p className="text-sm">Band Score: 7.0</p>
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="montserrat-thin">
                  Achieved a band score of 7.0 in IELTS, demonstrating proficiency in English and effective communication skills.
                </p>
              </div>
            </div>
          </div>

          <div className="card mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-1">
                <div className="mb-2">
                  <h3 className="text-[var(--accent)] poppins-semibold text-xl">2021</h3>
                  <p className="font-semibold">SLIIT Academy</p>
                  <p className="text-sm">Office Productivity Tools for Knowledge</p>
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="montserrat-thin">
                  Gained proficiency in Microsoft Office tools such as Word, Excel, and PowerPoint.
                </p>
              </div>
            </div>
          </div>

          {/* A-Level Details */}
          <div className="card mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-1">
                <div className="mb-2">
                  <h3 className="text-[var(--accent)] poppins-semibold text-xl">August 2019</h3>
                  <p className="font-semibold">KM/Wesly High School</p>
                  <p className="text-sm">Advanced Level (Science Stream – GCE Advanced Level)</p>
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="montserrat-thin">
                  Completed the Science Stream for the GCE Advanced Level at KM/Wesly High School in August 2019.
                </p>
              </div>
            </div>
          </div>

          {/* O-Level Details */}
          <div className="card mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-1">
                <div className="mb-2">
                  <h3 className="text-[var(--accent)] poppins-semibold text-xl">2020</h3>
                  <p className="font-semibold">KM/Wesly High School</p>
                  <p className="text-sm">G.C.E. Ordinary Level (O-Level)</p>
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="montserrat-thin">
                  Completed foundational subjects including ICT, Math, Science, English, and Commerce.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="poppins-semibold text-2xl mb-4">Professional Skillset</h2>
            <ul className="list-disc pl-5 montserrat-thin space-y-2">
              <li>Programming Languages: Java, C, C++, HTML, CSS, JavaScript</li>
              <li>Software Development: Front-end and back-end development</li>
              <li>Database Management: SQL, MySQL, NoSQL</li>
              <li>Version Control: Git, GitHub</li>
              <li>Problem Solving: Strong logical thinking and debugging skills</li>
              <li>Project Management: Agile methodology, Scrum</li>
            </ul>
          </div>
          <div>
            <h2 className="poppins-semibold text-2xl mb-4">Languages</h2>
            <ul className="list-disc pl-5 montserrat-thin space-y-2">
              <li>Sinhala: Native</li>
              <li>English: Fluent</li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
