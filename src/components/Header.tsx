
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Calendar, Trophy, User } from 'lucide-react';
import { useProgram } from '@/contexts/ProgramContext';

const Header: React.FC = () => {
  const { progress } = useProgram();
  
  return (
    <header className="fixed top-0 inset-x-0 glass z-50 border-b border-slate-200">
      <div className="container flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary/10">
            <Trophy className="w-4 h-4 text-primary" />
          </div>
          <span className="font-semibold text-lg text-foreground">
            Couch to 5K
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">
            {progress.percentComplete}% Complete
          </span>
        </div>
      </div>
      
      <nav className="container">
        <ul className="flex items-center justify-between px-4 pb-2">
          {[
            { to: '/', icon: Home, label: 'Home' },
            { to: '/program', icon: Calendar, label: 'Program' },
            { to: '/progress', icon: Trophy, label: 'Progress' },
            { to: '/profile', icon: User, label: 'Profile' }
          ].map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) => `
                  flex flex-col items-center justify-center p-2 rounded-full
                  transition-all duration-200 ease-in-out
                  ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}
                `}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-xs mt-1">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
