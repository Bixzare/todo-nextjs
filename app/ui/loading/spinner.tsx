import React from 'react';

export default function Spinner({ size = 'medium', className = '' }) {
  const sizeClasses:any = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  return (
    <div className={`inline-block ${sizeClasses[size]} ${className}`}>
      <div className="w-full h-full border-4 border-blue-200 rounded-full border-t-blue-800 animate-spin"></div>
    </div>
  );
}