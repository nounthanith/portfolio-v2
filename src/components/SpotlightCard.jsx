import React from 'react';

const SpotlightCard = ({ children, className = '' }) => {
  return (
    <div 
      className={`relative group p-8 rounded-2xl overflow-hidden ${className}`}
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        {children}
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

export default SpotlightCard;
