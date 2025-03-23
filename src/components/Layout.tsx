
import React from 'react';
import Header from './Header';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  className = '',
  fullHeight = false
}) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className={cn(
        "flex-1 pt-32 pb-20 px-4 container transition-all",
        fullHeight ? "flex flex-col" : "",
        className
      )}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
