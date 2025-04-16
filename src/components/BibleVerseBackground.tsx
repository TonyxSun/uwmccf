
import React from "react";

const BibleVerseBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top left verse */}
      <div className="absolute -top-10 -left-5 transform -rotate-12 opacity-[0.05] dark:opacity-[0.07]">
        <p className="text-[10rem] font-serif leading-none text-gray-900 dark:text-gray-300 whitespace-nowrap">
          John 3:16
        </p>
      </div>
      
      {/* Bottom right verse */}
      <div className="absolute bottom-0 right-0 transform rotate-12 opacity-[0.05] dark:opacity-[0.07]">
        <p className="text-[8rem] font-serif leading-none text-gray-900 dark:text-gray-300 whitespace-nowrap">
          Philippians 4:13
        </p>
      </div>
    </div>
  );
};

export default BibleVerseBackground;
