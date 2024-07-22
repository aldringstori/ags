
import { Checkbox } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { Navbar } from '@/components/navbar-menu'; 

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen bg-[#000017] text-white font-sans">
      <header className="w-full max-w-5xl mx-auto px-8 pt-8">
      </header>
      <main className="flex-grow flex flex-col items-center justify-between p-8">
        <header className="w-full max-w-5xl mb-12">
          <h1 className="text-4xl font-bold mb-2 text-white drop-shadow-[0_2px_2px_rgba(0,255,208,0.8)]">
            All projects
          </h1>
        </header>
        

         {/* Projects */}
         <section id="about" className="w-full max-w-5xl mb-12">
          <p>More than 20 software projects</p>
          <span className="block my-6"></span>

         <ul className="list-disc pl-6 text-[#E6F3FF]">
            <li>Free Youtube Summarizer</li>
            <li>Wisdom Collector</li>
            <li>Preta Fina Acessórios</li>
            <li>Workspace Manager</li>
            <li>Portal do Candidato</li>
            <li>Exam ScoreSystem</li>
            <li>Faul</li>
            <li>FunTechy</li>
            <li>GFUN Legacy Transition</li>
            <li>PonderaScore</li>
            <li>Portal do Colaborador</li>
            <li>Extracion</li>
            <li>FUNTEF NextGen Portal</li>
            <li>GFUN</li>
            <li>Post Grad Software</li>
            <li>Exam Allocator</li>
            <li>Avaya Toolbar</li>
            <li>FUNTEF AI</li>
        </ul>
        <span className="block my-6"></span>

          <h2 className="text-2xl font-semibold mb-4 text-white drop-shadow-[0_1px_1px_rgba(0,255,208,0.8)]">
            Portal do candidato 
          </h2>
          <p className="text-lg text-[#E6F3FF]">
            As a Technical Leader, i led the development team and implementation of the digital registration and examination system for the Universidade Tecnológica Federal do Paraná's (UTFPR) 
            Entrance Exam since 2023. Successfully streamlined the registration process for over 3 years, across 114 courses, enabling a smooth, error-free registration experience for applicants. 
            Innovated by integrating a fee exemption feature, quota reservation system, and reasonable adaptations module for candidates with specific needs, significantly enhancing the inclusivity and efficiency of the admissions process.
            The system was so well that UTFPR used for public exams to select candidates to be federal employees of the university.
            System designed for candidate registration for UTFPR and FUNTEFPR selective processes. University entrance exams and public competitions.

            Over $4 million was collected and more than 150,000 unique registered candidates with over 1 million accesses.

            The software is still being used by UTFPR and FUNTEFPR.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-white drop-shadow-[0_1px_1px_rgba(0,255,208,0.8)]">
            FUNTEFPR AI
          </h2>
          <p className="text-lg text-[#E6F3FF]">
            AI developed with RAG to increase collaborators performance and quicker assistance to clients. Instead of having  to manually search over 5 terabytes of documents the AI makes a auto digest in the Drive documents
            and stores it on a vector database, so when the user needs that data the AI searches for the user, also gives IT support and works as Knowledge base. Which decreased 90% of the call time, 

            <h6>Text and voice search</h6> 
            User assistance
            Client assistance
            Knowledgebase
            IT Support
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-white drop-shadow-[0_1px_1px_rgba(0,255,208,0.8)]">
            Portal do colaborador 
          </h2>
          <p className="text-lg text-[#E6F3FF]">
            As a Technical Leader, I led the development team and implementation of the digital registration and examination system for the Universidade Tecnológica Federal do Paraná's (UTFPR) 
            Entrance Exam since 2023. Successfully streamlined the registration process for over 3 years, across 114 courses, enabling a smooth, error-free registration experience for applicants.\n\nInnovated by integrating a 
            fee exemption feature, quota reservation system, and reasonable adaptations module for candidates with specific needs, significantly enhancing the inclusivity and efficiency of the admissions process.\n\n
            The system was so well received that UTFPR used it for public exams to select candidates to be federal employees of the university.\n\nSystem designed for candidate registration for UTFPR and FUNTEFPR selective processes,
            including university entrance exams and public competitions.\n\n

            Over $4 million was collected and more than 150,000 unique registered candidates with over 1 million accesses.\n\n
            The software is still being used by UTFPR and FUNTEFPR.
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