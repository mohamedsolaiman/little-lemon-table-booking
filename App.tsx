import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';
import ConfirmationPage from './components/ConfirmationPage';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import AboutPage from './components/AboutPage';
import type { BookingData } from './types';

export type Page = 'home' | 'booking' | 'menu' | 'about';

function App() {
    const [bookingData, setBookingData] = useState<BookingData | null>(null);
    const [currentPage, setCurrentPage] = useState<Page>('home');

    const handleBookingSuccess = (data: BookingData) => {
        setBookingData(data);
    };

    const handleReturnHome = () => {
        setBookingData(null);
        setCurrentPage('home');
    }

    const handleNavigate = (page: Page) => {
        setCurrentPage(page);
    }

    const renderPage = () => {
        switch (currentPage) {
            case 'booking':
                return <BookingPage onBookingSuccess={handleBookingSuccess} />;
            case 'menu':
                return <MenuPage />;
            case 'about':
                return <AboutPage />;
            case 'home':
            default:
                return <HomePage onNavigateToBooking={() => handleNavigate('booking')} />;
        }
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header onNavigate={handleNavigate} currentPage={currentPage} />
            <main className="flex-grow">
                {bookingData ? (
                    <ConfirmationPage bookingData={bookingData} onReturnHome={handleReturnHome} />
                ) : (
                    renderPage()
                )}
            </main>
            <Footer onNavigate={handleNavigate} />
        </div>
    );
}

export default App;
