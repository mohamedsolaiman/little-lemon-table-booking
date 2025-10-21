
import React, { useReducer } from 'react';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from '../services/api';
import type { BookingData } from '../types';

// Reducer function to manage available times based on the selected date
export const updateTimes = (state: string[], action: { type: 'UPDATE_TIMES'; payload: Date }): string[] => {
    if (action.type === 'UPDATE_TIMES') {
        return fetchAPI(action.payload);
    }
    return state;
};

// Function to initialize available times for today's date
export const initializeTimes = (): string[] => {
    return fetchAPI(new Date());
};

interface BookingPageProps {
    onBookingSuccess: (data: BookingData) => void;
}

const BookingPage: React.FC<BookingPageProps> = ({ onBookingSuccess }) => {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    const submitForm = (formData: BookingData): boolean => {
        const success = submitAPI(formData);
        if (success) {
            onBookingSuccess(formData);
        }
        return success;
    };

    return (
        <section className="py-12 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                     <div className="text-white md:w-1/2">
                        <h2 className="text-5xl font-bold text-primary mb-2">Reserve a Table</h2>
                        <p className="text-xl">Experience the authentic taste of the Mediterranean. Book your table now for an unforgettable dining experience at Little Lemon.</p>
                        <img src="https://picsum.photos/id/292/600/400" alt="Restaurant dining area" className="rounded-lg mt-6 shadow-xl"/>
                    </div>
                    <div className="md:w-1/2 w-full max-w-lg">
                        <BookingForm
                            availableTimes={availableTimes}
                            dispatch={dispatch}
                            submitForm={submitForm}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingPage;
