import React from 'react';
import type { Page } from '../App';

interface HeaderProps {
    onNavigate: (page: Page) => void;
    currentPage: Page;
}

const NavLink: React.FC<{
    page: Page;
    currentPage: Page;
    onNavigate: (page: Page) => void;
    children: React.ReactNode;
}> = ({ page, currentPage, onNavigate, children }) => {
    const isActive = page === currentPage;
    return (
        <li>
            <a
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    onNavigate(page);
                }}
                className={`text-secondary hover:text-primary transition-colors ${isActive ? 'font-bold text-primary' : ''}`}
                aria-current={isActive ? 'page' : undefined}
            >
                {children}
            </a>
        </li>
    );
};


const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="flex items-center cursor-pointer">
                     <img src="https://picsum.photos/seed/picsum/50/50" alt="Little Lemon Logo" className="h-12 w-12 rounded-full object-cover mr-4" />
                     <h1 className="text-3xl font-bold text-secondary">Little Lemon</h1>
                </a>
                <nav>
                    <ul className="flex space-x-6 text-lg">
                        <NavLink page="home" currentPage={currentPage} onNavigate={onNavigate}>Home</NavLink>
                        <NavLink page="menu" currentPage={currentPage} onNavigate={onNavigate}>Menu</NavLink>
                        <NavLink page="booking" currentPage={currentPage} onNavigate={onNavigate}>Book</NavLink>
                        <NavLink page="about" currentPage={currentPage} onNavigate={onNavigate}>About</NavLink>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
