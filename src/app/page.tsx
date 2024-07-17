import Image from "next/image";
import { Navbar } from '@/components/navbar';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#000017] text-white">
      <header className="w-full max-w-5xl mx-auto px-8 pt-8">
        <Navbar />
      </header>
      <main className="flex-grow flex flex-col items-center justify-between p-8">
      <header className="w-full max-w-5xl mb-12">
      <h1 
        className="text-4xl font-bold mb-2 text-white" 
        style={{
          textShadow: "0 2px 2px #00FFD0FF, 0 4px 4px #3BFFB980"
        }}
      >
        Aldrin Gustavo Stori, MSc
      </h1>
      <p className="text-xl text-[#00DEFF]">Software Engineer</p>
      <div>
        <a href="https://github.com/A-GustavoStori" className="text-[#00DEFF] hover:text-[#2E62FF] transition-colors duration-300">GitHub</a>
        <span className="mx-2">|</span>
        <a href="https://www.linkedin.com/in/aldringstori" className="text-[#00DEFF] hover:text-[#2E62FF] transition-colors duration-300">LinkedIn</a>
      </div>
      </header>

          {/* Passions */}
          <section id="about" className="w-full max-w-5xl mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white drop-shadow-[0_1px_1px_rgba(0,255,208,0.8)]">
          Passions
          </h2>
          <p className="text-lg text-[#E6F3FF]">
          Passionate about Learning and improving everyday.
          </p>
        </section>

         {/* Educational */}
        <section id="about" className="w-full max-w-5xl mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white drop-shadow-[0_1px_1px_rgba(0,255,208,0.8)]">
            Educational
          </h2>
          <p className="text-lg text-[#E6F3FF]">
          Master&apos;s degree in Software Engineering from Universidad Europea del Atlántico, (Santander, Spain). Has two MBA&apos;s one in Cybersecurity and in Big Data. 
          Has two Postgraduate degrees one in Mobile Application Development and other in Software Engineering, and an undergraduate degree in Systems Analysis and Development. 
          Currently works as an AI and Software Engineer and has obtained over 50 certifications in IT and Leadership. Now is pursuing a doctorate in IT.
          </p>
        </section>
        

        {/* Skills */}
        <section id="skills" className="w-full max-w-5xl mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white drop-shadow-[0_1px_1px_rgba(0,255,208,0.8)]">
          Passions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["God", "Family", "IT", "Coding", "Calisthenics", "Psychology", "Mind", "Spirit"].map((skill) => (
              <div key={skill} className="bg-[#3BFFB930] rounded-lg p-2 text-center text-white">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="w-full max-w-5xl mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white drop-shadow-[0_1px_1px_rgba(0,255,208,0.8)]">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Portal do candidato", description: "A brief description of Project 1" },
              { title: "Project 2", description: "A brief description of Project 2" },
              { title: "Project 3", description: "A brief description of Project 3" },
              { title: "Project 4", description: "A brief description of Project 4" },
            ].map((project, index) => (
              <div key={index} className="border border-[#00DEFF30] rounded-lg p-4 bg-[#3BFFB915] text-white">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="w-full max-w-5xl">
          <h2 className="text-2xl font-semibold mb-4 text-white drop-shadow-[0_1px_1px_rgba(0,255,208,0.8)]">
            Contact
          </h2>
          <p className="text-lg text-[#E6F3FF]">
            Feel free to reach out to me at{" "}
            <a href="mailto:johndoe@example.com" className="text-[#00DEFF] hover:underline">
              johndoe@example.com
            </a>
          </p>
        </section>

        {/* Footer */}
        <footer className="w-full max-w-5xl mt-12 text-center text-[#E6F3FF]">
          <p>&copy; 2024 Aldrin Gustavo Stori. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}