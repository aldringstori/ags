
import { Checkbox } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { Navbar } from '@/components/navbar-menu'; 

export default function Hobbies() {
  return (
    <div className="flex flex-col min-h-screen bg-[#000017] text-white font-sans">
      <header className="w-full max-w-5xl mx-auto px-8 pt-8">
        <Navbar />
      </header>
      <main className="flex-grow flex flex-col items-center justify-between p-8">
        <header className="w-full max-w-5xl mb-12">
          <h1 className="text-4xl font-bold mb-2 text-white drop-shadow-[0_2px_2px_rgba(0,255,208,0.8)]">
            Hobbies
          </h1>
        </header>
        
        {/* Career Overview */}
        <section className="w-full max-w-5xl mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white drop-shadow-[0_1px_1px_rgba(0,255,208,0.8)]">
            Calisthenics/Human Psychology
          </h2>
          <p className="text-lg text-[#E6F3FF] mb-6">
            Text
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