"use client";

import { Checkbox } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { Navbar } from '@/components/navbar-menu'; 

export default function Educational() {
  return (
    <div className="flex flex-col min-h-screen bg-[#000017] text-white font-sans">
      <header className="w-full max-w-5xl mx-auto px-8 pt-8">
      </header>
      <main className="flex-grow flex flex-col items-center justify-between p-8">
        <header className="w-full max-w-5xl mb-12">
          <h1 className="text-4xl font-bold mb-2 text-white drop-shadow-[0_2px_2px_rgba(0,255,208,0.8)]">
            Education and papers
          </h1>
        </header>
        

         {/* Projects */}
         <section id="about" className="w-full max-w-5xl mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white drop-shadow-[0_1px_1px_rgba(0,255,208,0.8)]">
            Educational 
          </h2>
          <p className="text-lg text-[#E6F3FF]">
            Graduated in Computer Science Technology from Maringá University, with a 
            Post graduation degree in Mobile Application Development from Americas Union University, and subsequently a Master of Business Administration (MBA) 
            in Cybersecurity from Americas Union University. Currently pursuing a Master's in Software Engineering (Software Engineering) from the Universidad Europea del Atlántico,
            in Santander, Spain. Currently working as a Software Engineer and DevOps for the Foundation for Support in Education, Research, and Scientific and Technological Development of the 
            Federal Technological University of Paraná (UTFPR), also has over 70 IT and Leadership course certificates.
          </p>
          <span className="block my-6"></span>

          {/* Checkbox List */}
          <h3 className="text-xl font-semibold mb-3 text-white">Educational Achievements and Objectives</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Checkbox className="ant-checkbox-custom" />
              <span className="ml-2 text-[#E6F3FF]">PhD (Future Goal) AI/Cyberpsychology </span>
            </li>
            <li className="flex items-center">
              <Checkbox checked disabled className="ant-checkbox-checked-custom">
              </Checkbox>
              <span className="ml-2 text-[#E6F3FF]">Master&apos;s in Software Engineering - Universidad Europea del Atlántico</span>
            </li>
            <li className="flex items-center">
              <Checkbox checked disabled className="ant-checkbox-checked-custom">
              </Checkbox>
              <span className="ml-2 text-[#E6F3FF]">MBA in Cybersecurity</span>
            </li>
            <li className="flex items-center">
              <Checkbox checked disabled className="ant-checkbox-checked-custom">
              </Checkbox>
              <span className="ml-2 text-[#E6F3FF]">MBA in Big Data</span>
            </li>
            <li className="flex items-center">
              <Checkbox checked disabled className="ant-checkbox-checked-custom">
              </Checkbox>
              <span className="ml-2 text-[#E6F3FF]">Postgraduate in Mobile Application Development</span>
            </li>
            <li className="flex items-center">
              <Checkbox checked disabled className="ant-checkbox-checked-custom">
              </Checkbox>
              <span className="ml-2 text-[#E6F3FF]">Postgraduate in Software Engineering</span>
            </li>
            <li className="flex items-center">
              <Checkbox checked disabled className="ant-checkbox-checked-custom">
              </Checkbox>
              <span className="ml-2 text-[#E6F3FF]">Bachelor&apos;s in Systems Analysis and Development</span>
            </li>
            <li className="flex items-center">
              <Checkbox className="ant-checkbox-custom" />
              <span className="ml-2 text-[#E6F3FF]">Marketing/Entrepreunership </span>
            </li>
            <li className="flex items-center">
              <Checkbox className="ant-checkbox-custom" />
              <span className="ml-2 text-[#E6F3FF]">Economics </span>
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