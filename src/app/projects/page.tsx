"use client";

import PageLayout from "@/components/PageLayout";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <PageLayout>
      <div className="bg-[var(--background)] py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="poppins-semibold text-center text-4xl mb-2">Projects</h1>
          <p className="montserrat-thin text-center mb-10">
            Here are some of the projects I've completed over the past few years.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead className="bg-white dark:bg-[#333333]">
                <tr className="border border-[var(--border)]">
                  <th className="p-4 text-left">Project Number</th>
                  <th className="p-4 text-left">Project Name</th>
                  <th className="p-4 text-left">Project Description</th>
                  <th className="p-4 text-left">Project Image</th>
                </tr>
              </thead>
              <tbody>
                {/* Autonomous Line-Following Luggage Transporter Robot */}
                <tr className="border border-[var(--border)] bg-white dark:bg-[#444444]">
                  <td className="p-4">1</td>
                  <td className="p-4 font-semibold">Autonomous Line-Following Luggage Transporter Robot 🧳🤖</td>
                  <td className="p-4">
                    <p className="mb-3">
                      As part of my Higher National Diploma in Software Engineering at NIBM, I contributed to the development of an Autonomous Luggage Transporter Robot designed for busy airport environments.
                    </p>
                    <p className="mb-3">
                      <b><u>Key Features</u></b><br />
                      <b>Line Following & Obstacle Detection: </b> IR sensors and ultrasonic sensors for navigation.<br />
                      <b>Luggage Weight Measurement: </b> Load cell sensor to ensure weight limits.<br />
                      <b>Passenger Input & Gate Selection: </b> Bluetooth device for gate selection.<br />
                      <b>RFID-Based Navigation & Verification: </b> RFID tags for accurate routing.<br />
                      <b>Secure Luggage Box Operation: </b> RFID locking system for luggage safety.
                    </p>
                    <p className="mb-3">
                      <b>Technologies Used: </b><br />
                      Arduino Mega, IR Sensors, Ultrasonic Sensors, Load Cells, RFID Technology, Bluetooth Module, Servo Motors, Motor Drivers.
                    </p>
                    <p className="mb-3">
                      <b>Project Cost: </b> Rs 17,935
                    </p>
                  </td>
                  <td className="p-4">
                    <Image
                      src="/images/Robot.jpeg"
                      alt="Luggage Transporter Robot"
                      width={250}
                      height={250}
                      className="object-contain"
                    />
                  </td>
                </tr>

                {/* Modern Room Clothing Website */}
                <tr className="border border-[var(--border)] bg-white dark:bg-[#444444]">
                  <td className="p-4">2</td>
                  <td className="p-4 font-semibold">Modern Room Clothing Website | Front-End</td>
                  <td className="p-4">
                    <p className="mb-3">
                      Developed a responsive e-commerce website for a clothing brand, focusing on user experience and functionality.
                    </p>
                    <p className="mb-3">
                      <b><u>Key Features</u></b><br />
                      <b>Responsive Design: </b> Mobile and desktop compatibility.<br />
                      <b>Authentication System: </b> Secure login and sign-up functionality.<br />
                      <b>Intuitive UI/UX: </b> Clean, minimal, and user-friendly design.
                    </p>
                    <p className="mb-3">
                      <b>Technologies Used: </b><br />
                      HTML, CSS, JavaScript.
                    </p>
                    <p className="mb-3">
                      This project showcases my front-end development skills with a focus on e-commerce platforms.
                    </p>
                    <a
                      href="https://github.com/ewan1027/Modern-Room-Clothing-Website.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--accent)] hover:underline"
                    >
                      GitHub Repository
                    </a>
                  </td>
                  <td className="p-4">
                    <Image
                      src="/images/Modern_Room.png"
                      alt="Modern Room Clothing"
                      width={250}
                      height={250}
                      className="object-contain"
                    />
                  </td>
                </tr>

                {/* Urban Food E-Commerce Platform */}
                <tr className="border border-[var(--border)] bg-white dark:bg-[#444444]">
                  <td className="p-4">3</td>
                  <td className="p-4 font-semibold">Urban Food E-Commerce Platform</td>
                  <td className="p-4">
                    <p className="mb-3">
                      Developed a fresh food e-commerce platform, connecting customers with healthy, high-quality food products.
                    </p>
                    <p className="mb-3">
                      <b><u>Key Features</u></b><br />
                      <b>For Customers: </b> Browse products, add to cart, secure order placement.<br />
                      <b>For Admins: </b> Manage products, track orders.
                    </p>
                    <p className="mb-3">
                      <b>Technologies Used: </b><br />
                      MongoDB, SQL, HTML, CSS, PHP.
                    </p>
                    <p className="mb-3">
                      The project was an excellent learning experience in full-stack development and e-commerce systems.
                    </p>
                    <a
                      href="https://github.com/ewan1027/Urban-Food-.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--accent)] hover:underline"
                    >
                      GitHub Repository
                    </a>
                  </td>
                  <td className="p-4">
                    <Image
                      src="/images/Urban_Food.png"
                      alt="Urban Food E-Commerce"
                      width={250}
                      height={250}
                      className="object-contain"
                    />
                  </td>
                </tr>

                {/* More Projects can go here... */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
