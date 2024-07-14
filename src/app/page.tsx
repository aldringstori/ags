import Image from "next/image";
import { Navbar } from '@/components/Navbar';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#000017] text-white">
      <header className="w-full max-w-5xl mx-auto px-8 pt-8">
        <Navbar />
      </header>
      <main className="flex-grow flex flex-col items-center justify-between p-8">
        {/* Header */}
        <header className="w-full max-w-5xl mb-12">
          <h1 className="text-4xl font-bold mb-2 text-white drop-shadow-[0_2px_2px_rgba(0,255,208,0.8)]">
            Aldrin Gustavo Stori
          </h1>
          <p className="text-xl text-[#00DEFF]">Software Engineer</p>
        </header>

        {/* About Me */}
        <section id="about" className="w-full max-w-5xl mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white drop-shadow-[0_1px_1px_rgba(0,255,208,0.8)]">
            About Me
          </h2>
          <p className="text-lg text-[#E6F3FF]">
            I'm a passionate developer with experience in building web applications using modern technologies.
            I love solving complex problems and creating user-friendly interfaces.
          </p>
        </section>

        {/* Skills */}
        <section id="skills" className="w-full max-w-5xl mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white drop-shadow-[0_1px_1px_rgba(0,255,208,0.8)]">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["JavaScript", "React", "Node.js", "Python", "HTML/CSS", "Git", "MongoDB", "AWS"].map((skill) => (
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
              { title: "Project 1", description: "A brief description of Project 1" },
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