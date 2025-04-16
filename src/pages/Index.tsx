
import { useState, useEffect } from "react";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-warm-50 to-warm-200 dark:from-warm-950 dark:to-warm-900 transition-colors duration-500">
      {/* Header with Theme Toggle */}
      <header className="w-full py-4 px-6 flex justify-end">
        <ThemeToggle />
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-6xl px-6 py-12">
        {/* Main Content */}
        <div className="w-full max-w-3xl mx-auto text-center space-y-12">
          {/* Title with animation */}
          <h1 className={`text-5xl md:text-7xl font-bold bg-gradient-to-r from-warm-600 to-warm-800 dark:from-warm-400 dark:to-warm-500 bg-clip-text text-transparent animate-glow transition-all duration-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
            UWMCCF
          </h1>
          
          {/* Subtitle with animation */}
          <h2 className={`text-2xl md:text-3xl font-semibold text-warm-800 dark:text-warm-300 animate-slide-up transition-all duration-300 delay-100 ${mounted ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            University of Washington Malaysian Chinese Christian Fellowship
          </h2>
          
          {/* Description Card */}
          <Card className={`p-8 bg-white/80 dark:bg-warm-900/80 backdrop-blur-sm border border-warm-200 dark:border-warm-800 shadow-lg animate-slide-up transition-all duration-300 ${mounted ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <p className="text-lg text-warm-700 dark:text-warm-300">
              We are a community of Malaysian Chinese Christians at the University of Washington. 
              We gather to worship, study the Bible, and support one another in our faith journey.
              Join us for fellowship, spiritual growth, and friendship!
            </p>
          </Card>
          
          {/* Instagram Link */}
          <div className={`animate-slide-up transition-all duration-300 ${mounted ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Button 
                className="group bg-gradient-to-r from-warm-500 to-warm-600 hover:from-warm-600 hover:to-warm-700 text-white px-8 py-6 rounded-full text-lg transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <Instagram className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Contact us to find out how to join!
              </Button>
            </a>
          </div>
        </div>
      </main>
      
      <footer className="w-full py-6 text-center text-warm-700 dark:text-warm-400">
        <p>&copy; {new Date().getFullYear()} UWMCCF. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
