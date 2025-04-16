
import { useState, useEffect } from "react";
import { Instagram } from "lucide-react";
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
          
          {/* Subtitle with softer tone */}
          <h2 className={`text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 animate-slide-up transition-all duration-300 delay-100 ${mounted ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            University of Washington Malaysian Chinese Christian Fellowship
          </h2>
          
          {/* Description Card with lighter background */}
          <Card className={`p-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg animate-slide-up transition-all duration-300 ${mounted ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              We are a community of Malaysian Chinese Christians at the University of Washington. 
              We gather to worship, study the Bible, and support one another in our faith journey.
              Join us for fellowship, spiritual growth, and friendship!
            </p>
          </Card>
          
          {/* Instagram Link */}
          <div className={`animate-slide-up transition-all duration-300 ${mounted ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Button 
                className="group bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white px-8 py-6 rounded-full text-lg transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <Instagram className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Contact us to find out how to join!
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
