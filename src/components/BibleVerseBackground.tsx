import React, { useEffect, useState } from "react";

const BibleVerseBackground = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top left verse */}
      <div className={`absolute -top-10 -left-5 transform -rotate-12 opacity-[0.05] dark:opacity-[0.07] animate-slide-left transition-all duration-1500 ${mounted ? 'opacity-[0.05] dark:opacity-[0.07]' : 'opacity-0'}`}>
        <p className="text-[10rem] font-serif leading-none text-gray-900 dark:text-gray-300 whitespace-nowrap">
          For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.
        </p>
      </div>
      
      {/* Bottom right verse */}
      <div className={`absolute bottom-0 right-0 transform rotate-12 opacity-[0.05] dark:opacity-[0.07] animate-slide-right transition-all duration-1500 delay-200 ${mounted ? 'opacity-[0.05] dark:opacity-[0.07]' : 'opacity-0'}`}>
        <p className="text-[8rem] font-serif leading-none text-gray-900 dark:text-gray-300 whitespace-nowrap">
          I can do all things through him who strengthens me."
        </p>
      </div>
    </div>
  );
};

export default BibleVerseBackground;
