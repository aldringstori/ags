
import { Checkbox } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { Navbar } from '@/components/navbar-menu'; 
import Image from 'next/image';

export default function Calisthenics() {
  return (
    <div className="flex flex-col min-h-screen bg-[#000017] text-white font-sans">
      <header className="w-full max-w-5xl mx-auto px-8 pt-8">
      </header>
      <main className="flex-grow flex flex-col items-center justify-between p-8">
        <header className="w-full max-w-5xl mb-12">
          <h1 className="text-4xl font-bold mb-2 text-white drop-shadow-[0_2px_2px_rgba(0,255,208,0.8)]">
            Calisthenics
          </h1>
        </header>
        
        {/* Calisthenics */}
        <section className="w-full max-w-5xl mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white drop-shadow-[0_1px_1px_rgba(0,255,208,0.8)]">
            Calisthenics
          </h2>
          <p className="text-lg text-[#E6F3FF] mb-6">
            Its a passion i found when i was 24 years old. I think the sport can change lifes, and if changed mine can
            change yours too.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Photos</h3>
          <div className="grid grid-cols-2 gap-4">
            <Image src="/images/IMG_20210909_210519.jpg" alt="Photo 1" width={500} height={500} />
            <Image src="/images/IMG_20210908_160206.jpg" alt="Photo 2" width={500} height={500} />
            <Image src="/images/IMG-20220118.jpg" alt="Photo 3" width={500} height={500} />
          </div>

          <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Videos</h3>
          <div className="grid grid-cols-2 gap-4">
            <video controls className="w-full">
              <source src="/images/VID-20220118.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video controls className="w-full">
              <source src="/images/VID_20211121_101410.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video controls className="w-full">
              <source src="/images/VID_20210724_151547.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video controls className="w-full">
              <source src="/images/2021-08-15-101237029.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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