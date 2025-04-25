import { useState, useEffect } from "react";
import { Instagram, Mail, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import BibleVerseBackground from "@/components/BibleVerseBackground";

// Define the type for paragraph items
interface ParagraphItem {
  text: string;
  key: string;
  italic?: boolean; // Make italic optional
}

const Index = () => {
  const [mounted, setMounted] = useState(false);
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const paragraphs: ParagraphItem[] = [
    {
      text: "大家好，我们是UWMCCF 滑铁卢校园国语基督徒团契! ⭐️ ",
      key: "intro",
    },
    {
      text: "我们致力于为校园内讲国语的同学提供温暖、有爱的信仰家园，一起深入认识圣经、建立属灵的友谊、共同经历神的恩典！🤩",
      key: "mission",
    },
    // {
    //   text: '"We love because he first loved us." 1 John 4:19',
    //   key: "verse",
    //   italic: true,
    // },
  ];

  useEffect(() => {
    setMounted(true);

    // Set up paragraph rotation
    const intervalId = setInterval(() => {
      setCurrentParagraph((prev) => (prev + 1) % paragraphs.length);
    }, 5000); // Change paragraph every 5 seconds

    return () => clearInterval(intervalId);
  }, [paragraphs.length]);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-white/80 to-gray-50 dark:from-gray-900 dark:to-gray-950 transition-colors duration-500">
      {/* Bible verse background */}
      <BibleVerseBackground />

      {/* Header with Theme Toggle */}
      <header className="w-full py-4 px-6 flex justify-end z-10">
        <ThemeToggle />
      </header>

      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-6xl px-6 py-12 z-10">
        <div className="w-full max-w-3xl mx-auto text-center space-y-8">
          {/* Title with softer animation */}
          <h1
            className={`text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-white bg-clip-text text-transparent animate-glow transition-all duration-300 ${
              mounted ? "opacity-100" : "opacity-0"
            }`}
          >
            UWMCCF
          </h1>

          {/* Description section with pagination but without card border */}
          <div
            className={`p-8 backdrop-blur-sm animate-slide-up transition-all duration-300 ${
              mounted ? "opacity-100" : "opacity-0"
            } overflow-hidden min-h-[180px] md:min-h-[200px]`}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative h-24 md:h-26 flex items-center justify-center">
              {paragraphs.map((paragraph, index) => (
                <div
                  key={paragraph.key}
                  className={`absolute w-full transition-all duration-700 ease-in-out flex items-center justify-center ${
                    currentParagraph === index
                      ? "opacity-100 transform-none"
                      : "opacity-0 transform " + 
                        ((index < currentParagraph || (currentParagraph === 0 && index === paragraphs.length - 1))
                          ? "translate-y-16 rotate-6 scale-95"
                          : "-translate-y-16 -rotate-6 scale-95")
                  }`}
                >
                  <p
                    className={`text-lg text-center text-gray-800 dark:text-gray-300 ${
                      paragraph.italic ? "italic" : ""
                    } px-4`}
                  >
                    {paragraph.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Pagination indicators */}
            <div className="mt-6 flex justify-center space-x-2">
              {paragraphs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentParagraph(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentParagraph === index
                      ? "bg-primary w-8"
                      : "bg-gray-300 dark:bg-gray-700"
                  }`}
                  aria-label={`View paragraph ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div
            className={`flex justify-center space-x-4 animate-slide-up transition-all duration-300 ${
              mounted ? "opacity-100" : "opacity-0"
            }`}
            style={{ animationDelay: "0.6s" }}
          >
            {/* Instagram Link (icon only) */}
            <a
              href="https://www.instagram.com/uwmccf/"
              target="_blank"
              rel="noopener noreferrer"
            >
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

      <footer className="w-full py-6 text-center text-gray-600 dark:text-gray-400 z-10 relative">
        <p>&copy; {new Date().getFullYear()} UWMCCF. All rights reserved.</p>
        
        {/* GitHub Link */}
        <a 
          href="https://github.com/TonyxSun/uwmccf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="absolute bottom-4 right-4"
        >
          <Button 
            variant="outline" 
            size="icon" 
            className="text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Github className="h-5 w-5" />
          </Button>
        </a>
      </footer>
    </div>
  );
};

export default Index;
