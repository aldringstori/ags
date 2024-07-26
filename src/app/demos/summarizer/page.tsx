import { Checkbox } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { Navbar } from '@/components/navbar-menu'; 

export default function Summarizer() {
  return (
    <div className="flex flex-col min-h-screen bg-[#000017] text-white font-sans">
      <header className="w-full max-w-5xl mx-auto px-8 pt-8">
      </header>
      <main className="flex-grow flex flex-col items-center justify-between p-8">
        <header className="w-full max-w-5xl mb-12">
          <h1 className="text-4xl font-bold mb-2 text-white drop-shadow-[0_2px_2px_rgba(0,255,208,0.8)]">
            Summarizer
          </h1>
        </header>
        
        {/* Career Overview */}
        <section className="w-full max-w-5xl mb-12">
          {/* Buttons */}
          <div id="button-container">
            <button id="summary-btn">
              <img src="/assets/summary.svg" alt="Summary Icon" />
              Summary
            </button>
            <button id="transcription-btn">
              <img src="/assets/cc.svg" alt="Transcription Icon" />
              Transcription
            </button>
            <button id="copy-btn">
              <img src="/assets/copy.svg" alt="Copy Icon" />
              Copy
            </button>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="w-full max-w-5xl mt-12 text-center text-[#E6F3FF]">
          <p>&copy; 2024 Aldrin Gustavo Stori. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
