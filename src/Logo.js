import React from 'react';

const Logo = ({ size = 'medium', className = '' }) => {
  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-24 h-24',
    large: 'w-32 h-32'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} flex flex-col items-center`}>
      {/* Walking Red Cube Character */}
      <div className="relative w-16 h-16 mb-2">
        {/* Main cube body */}
        <div className="absolute w-12 h-12 bg-red-500 border-2 border-red-700 rounded-sm transform rotate-45 top-1 left-2">
          {/* Face */}
          <div className="absolute top-1 left-1 w-2 h-2 bg-black rounded-sm"></div>
          <div className="absolute top-1 right-1 w-2 h-2 bg-black rounded-sm"></div>
          <div className="absolute bottom-1 left-2 w-4 h-1 bg-black rounded-sm"></div>
        </div>
        
        {/* Arms */}
        <div className="absolute top-3 -left-2 w-1 h-3 bg-black transform rotate-12"></div>
        <div className="absolute top-3 -right-2 w-1 h-3 bg-black transform -rotate-12"></div>
        
        {/* Legs */}
        <div className="absolute bottom-1 left-1 w-1 h-3 bg-black transform rotate-12"></div>
        <div className="absolute bottom-1 right-1 w-1 h-3 bg-black transform -rotate-12"></div>
        
        {/* Laptop */}
        <div className="absolute top-2 left-6 w-6 h-4 bg-black border border-gray-800 rounded-sm">
          <div className="w-full h-1 bg-green-400 text-xs text-green-800 font-mono flex items-center justify-center">
            &lt;/_
          </div>
        </div>
      </div>
      
      {/* PIXEL POWER Text */}
      <div className="text-center">
        <div className="text-xs font-bold text-black tracking-wider">PIXEL</div>
        <div className="text-xs font-bold text-black tracking-wider">POWER</div>
      </div>
    </div>
  );
};

export default Logo; 