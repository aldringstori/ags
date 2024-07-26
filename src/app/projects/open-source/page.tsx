import { Checkbox } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

export default function Opensource() {
  return (
    <div className="flex flex-col min-h-screen bg-[#000017] text-white font-sans">
      <header className="w-full max-w-5xl mx-auto px-8 pt-8">
      </header>
      <main className="flex-grow flex flex-col items-center justify-between p-8">
        <header className="w-full max-w-5xl mb-12">
          <h1 className="text-4xl font-bold mb-2 text-white drop-shadow-[0_2px_2px_rgba(0,255,208,0.8)]">
            Open source projects
          </h1>
        </header>

        {/* Projects */}
        <section id="about" className="w-full max-w-5xl mb-12">
          <p>More than 20 software projects</p>
          <ul className="list-disc pl-6 text-[#E6F3FF]">
            <li>Youtube </li>
            <li>Free Youtube Summarizer</li>
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
