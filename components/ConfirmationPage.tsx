
import React from 'react';
import type { BookingData } from '../types';

interface ConfirmationPageProps {
    bookingData: BookingData;
    onReturnHome: () => void;
}

const ConfirmationPage: React.FC<ConfirmationPageProps> = ({ bookingData, onReturnHome }) => {
    return (
        <section className="text-center py-20 bg-highlight-light">
            <div className="max-w-2xl mx-auto bg-white p-10 rounded-lg shadow-xl">
                 <svg className="mx-auto h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 className="text-4xl font-bold text-secondary mt-6 mb-4">Booking Confirmed!</h2>
                <p className="text-lg text-highlight-dark mb-8">
                    Thank you for choosing Little Lemon. We look forward to serving you.
                </p>
                <div className="text-left bg-highlight-light p-6 rounded-md border border-gray-200 space-y-3">
                    <h3 className="text-xl font-semibold text-secondary border-b pb-2 mb-3">Your Reservation Details:</h3>
                    <p><strong>Date:</strong> {new Date(bookingData.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}</p>
                    <p><strong>Time:</strong> {bookingData.time}</p>
                    <p><strong>Number of Guests:</strong> {bookingData.guests}</p>
                    <p><strong>Occasion:</strong> {bookingData.occasion}</p>
                </div>
                 <button
                    onClick={onReturnHome}
                    className="mt-10 bg-primary text-secondary font-bold py-3 px-6 rounded-md hover:bg-yellow-400 transition-colors"
                >
                    Book Another Table
                </button>
            </div>
        </section>
    );
};

export default ConfirmationPage;
