
import React, { useEffect, useState } from 'react';

interface ProgressRingProps {
  radius: number;
  stroke: number;
  progress: number;
  children?: React.ReactNode;
  className?: string;
}

const ProgressRing: React.FC<ProgressRingProps> = ({ 
  radius, 
  stroke, 
  progress, 
  children,
  className = ''
}) => {
  const [offset, setOffset] = useState(0);
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  
  useEffect(() => {
    const progressOffset = circumference - (progress / 100) * circumference;
    setOffset(progressOffset);
  }, [circumference, progress, setOffset]);

  return (
    <div className={`progress-ring-container ${className}`} style={{ width: radius * 2, height: radius * 2 }}>
      <svg
        className="progress-ring absolute inset-0"
        width={radius * 2}
        height={radius * 2}
      >
        <circle
          className="text-muted stroke-current"
          strokeWidth={stroke}
          fill="transparent"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          className="progress-ring-circle text-primary stroke-current"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset: offset }}
          fill="transparent"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default ProgressRing;
