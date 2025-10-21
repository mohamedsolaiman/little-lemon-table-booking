import React from 'react';
import type { Page } from '../App';

interface FooterProps {
    onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    return (
        <footer className="bg-secondary text-white py-10">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                     <img src="https://picsum.photos/seed/footer/100/100" alt="Little Lemon Restaurant" className="h-24 w-24 rounded-lg object-cover mb-4" />
                </div>
                <div>
                    <h4 className="font-bold text-lg mb-3">Navigation</h4>
                    <ul>
                        <li className="mb-2"><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="hover:text-primary">Home</a></li>
                        <li className="mb-2"><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('about'); }} className="hover:text-primary">About</a></li>
                        <li className="mb-2"><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('menu'); }} className="hover:text-primary">Menu</a></li>
                        <li className="mb-2"><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('booking'); }} className="hover:text-primary">Reservations</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-lg mb-3">Contact</h4>
                    <p className="mb-2">123 Lemon Grove, Chicago, IL</p>
                    <p className="mb-2">(312) 555-1234</p>
                    <p><a href="mailto:contact@littlelemon.com" className="hover:text-primary">contact@littlelemon.com</a></p>
                </div>
                <div>
                    <h4 className="font-bold text-lg mb-3">Social Media</h4>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-primary" onClick={e => e.preventDefault()}>Facebook</a>
                        <a href="#" className="hover:text-primary" onClick={e => e.preventDefault()}>Instagram</a>
                        <a href="#" className="hover:text-primary" onClick={e => e.preventDefault()}>Twitter</a>
                    </div>
                </div>
            </div>
            <div className="text-center text-gray-400 mt-8 pt-6 border-t border-gray-600">
                <p>&copy; {new Date().getFullYear()} Little Lemon Restaurant. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
