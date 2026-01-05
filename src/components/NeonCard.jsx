import React from 'react';

const NeonCard = ({ color, title, children, onClick }) => {
  // Renk seçimine göre gölge (box-shadow) ve kenarlık ayarları
  const neonStyles = {
    green: "shadow-[0_0_20px_rgba(34,197,94,0.6)] border-green-500/30 hover:shadow-[0_0_30px_rgba(34,197,94,0.8)]",
    pink: "shadow-[0_0_20px_rgba(236,72,153,0.6)] border-pink-500/30 hover:shadow-[0_0_30px_rgba(236,72,153,0.8)]",
    blue: "shadow-[0_0_20px_rgba(59,130,246,0.6)] border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]",
    purple: "shadow-[0_0_20px_rgba(168,85,247,0.6)] border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.8)]",
  };

  const selectedStyle = neonStyles[color] || neonStyles.blue;

  return (
    <div 
      onClick={onClick}
      className={`
      relative 
      backdrop-blur-xl           
      bg-white/5                 
      border border-solid        
      rounded-2xl                
      p-8 
      transition-all duration-300 
      hover:-translate-y-2       
      cursor-pointer
      group
      h-full
      ${selectedStyle}
    `}>
      <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 group-hover:text-white transition-colors">
        {title}
      </h2>
      <p className="text-gray-300 font-light leading-relaxed">
        {children}
      </p>
      
      {/* Kartın içindeki hafif parıltı efekti */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );
};

export default NeonCard;