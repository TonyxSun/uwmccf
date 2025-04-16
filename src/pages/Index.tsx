import { useState, useEffect } from "react";
import { Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import BibleVerseBackground from "@/components/BibleVerseBackground";

const Index = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-white/80 to-gray-50 dark:from-gray-900 dark:to-gray-950 transition-colors duration-500">
      {/* Bible verse background */}
      <BibleVerseBackground />
      
      {/* Header with Theme Toggle */}
      <header className="w-full py-4 px-6 flex justify-end z-10">
        <ThemeToggle />
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-6xl px-6 py-12 z-10">
        <div className="w-full max-w-3xl mx-auto text-center space-y-12">
          {/* Title with softer animation */}
          <h1 className={`text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-white bg-clip-text text-transparent animate-glow transition-all duration-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
            UWMCCF
          </h1>
          
          {/* Subtitle with designer font styling - warm tones */}
          {/* <h2 className={`text-2xl md:text-2xl font-semibold tracking-wide bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-800 dark:from-amber-500 dark:via-yellow-400 dark:to-amber-600 bg-clip-text text-transparent animate-slide-up transition-all duration-300 delay-100 ${mounted ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            University of Waterloo Mandarin Chinese Christian Fellowship
          </h2> */}
          
          {/* Description Card with lighter background */}
          <Card className={`p-8 bg-white dark:bg-gradient-to-r from-gray-800 via-gray-900 to-gray-950 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-md animate-slide-up transition-all duration-300 ${mounted ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <p className="text-lg text-gray-800 dark:text-gray-300 mb-3">
              大家好，我们是UWMCCF 滑铁卢校园国语基督教团契! ⭐️ 
            </p>
            <p className="text-lg text-gray-800 dark:text-gray-300 mb-3">
            无论你的背景如何，只要你对耶稣基督或圣经感兴趣，我们都非常乐意通过集体活动和查经讨论，帮助你认识圣经中的世界观！
            我们也热情欢迎主内的弟兄姐妹加入，与我们一起在基督里服侍、成长，荣耀神！🤩
            </p>
            <p className="text-lg text-gray-800 dark:text-gray-300 italic">
              "We love because he first loved us." 1 John 4:19
            </p>
          </Card>
          
          {/* Social Links */}
          <div className={`flex justify-center space-x-4 animate-slide-up transition-all duration-300 ${mounted ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            {/* Instagram Link (icon only) */}
            <a href="https://www.instagram.com/uwmccf/" target="_blank" rel="noopener noreferrer">
              <Button 
                className="group bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 text-white p-3 rounded-full transition-all duration-300 shadow-md hover:shadow-xl"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </Button>
            </a>
            
            {/* Email Link */}
            <a href="mailto:uwmccf@gmail.com">
              <Button 
                className="group bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 hover:from-blue-600 hover:via-teal-600 hover:to-green-600 text-white p-3 rounded-full transition-all duration-300 shadow-md hover:shadow-xl"
                aria-label="Email us"
              >
                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </Button>
            </a>
          </div>
        </div>
      </main>
      
      <footer className="w-full py-6 text-center text-gray-600 dark:text-gray-400 z-10">
        <p>&copy; {new Date().getFullYear()} UWMCCF. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
