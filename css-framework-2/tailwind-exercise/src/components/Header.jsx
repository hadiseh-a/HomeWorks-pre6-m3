import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="py-5 border-b border-gray-200">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-12h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2zm0 4h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2z" />
          </svg>
        </a>
        <div className="hidden lg:flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li><a href="#" className="font-semibold text-gray-700 hover:text-gray-900 transition-colors">Features</a></li>
            <li><a href="#" className="font-semibold text-gray-700 hover:text-gray-900 transition-colors">About</a></li>
            <li><a href="#" className="font-semibold text-gray-700 hover:text-gray-900 transition-colors">Blog</a></li>
            <li><a href="#" className="font-semibold text-gray-700 hover:text-gray-900 transition-colors">Contact</a></li>
          </ul>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-sm px-4">Log in</Button>
            <Button className="text-sm px-4">Sign up</Button>
          </div>
        </div>
        {/* Mobile menu */}
      </nav>
    </header>
  );
};

export default Header;