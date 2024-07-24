
import { Checkbox } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { Navbar } from '@/components/navbar-menu'; 

export default function Career() {
  return (
    <div className="flex flex-col min-h-screen bg-[#000017] text-white font-sans">
      <header className="w-full max-w-5xl mx-auto px-8 pt-8">
      </header>
      <main className="flex-grow flex flex-col items-center justify-between p-8">
        <header className="w-full max-w-5xl mb-12">
          <h1 className="text-4xl font-bold mb-2 text-white drop-shadow-[0_2px_2px_rgba(0,255,208,0.8)]">
            Career and Future
          </h1>
        </header>
        
        {/* Career Overview */}
        <section className="w-full max-w-5xl mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white drop-shadow-[0_1px_1px_rgba(0,255,208,0.8)]">
            Career Overview
          </h2>
          <p className="text-lg text-[#E6F3FF] mb-6">
            Experienced AI and Software Engineer with a strong academic background and numerous professional certifications.
            Started in IT as Tech computer hardware and software, then help desk, then internship as software developer typescript and then  IT Analyst and then Software developer, software engineer and AI Engineer.
            4 Years of experience as IT and 2 as SwE/Developer
            1,5 Years as tester
            1,5 as help desk 
            1 IT support
            1 IT Analyst
            6 Typescript developer 

            For more details on each project i worked on click here.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Professional Achievements</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Checkbox checked disabled className="ant-checkbox-checked-custom">
              </Checkbox>
              <span className="ml-2 text-[#E6F3FF]">Over 50 certifications in IT and Leadership</span>
            </li>
            <li className="flex items-center">
              <Checkbox checked disabled className="ant-checkbox-checked-custom">
              </Checkbox>
              <span className="ml-2 text-[#E6F3FF]">Currently working as an AI and Software Engineer</span>
            </li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="w-full max-w-5xl mt-12 text-center text-[#E6F3FF]">
          <p>&copy; 2024 Aldrin Gustavo Stori. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}