import React, { useState, useEffect } from 'react';
import type { BookingData } from '../types';

interface BookingFormProps {
    availableTimes: string[];
    dispatch: React.Dispatch<{ type: 'UPDATE_TIMES'; payload: Date }>;
    submitForm: (data: BookingData) => boolean;
}

const BookingForm: React.FC<BookingFormProps> = ({ availableTimes, dispatch, submitForm }) => {
    const today = new Date().toISOString().split('T')[0];
    const [date, setDate] = useState(today);
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');
    const [errors, setErrors] = useState({
        date: '',
        time: '',
        guests: '',
    });

    const isFormValid = () => {
        const newErrors = { date: '', time: '', guests: '' };
        let isValid = true;
        if (!date) {
            newErrors.date = 'Date is required.';
            isValid = false;
        }
        if (!time) {
            newErrors.time = 'Time is required.';
            isValid = false;
        }
        if (guests < 1 || guests > 10) {
            newErrors.guests = 'Number of guests must be between 1 and 10.';
            isValid = false;
        }
        setErrors(newErrors);
        return isValid;
    };

    useEffect(() => {
        dispatch({ type: 'UPDATE_TIMES', payload: new Date(date) });
    }, [date, dispatch]);

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isFormValid()) {
            submitForm({ date, time, guests, occasion });
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-2xl p-8">
            <h3 className="text-2xl font-semibold text-center text-highlight-dark mb-6">Find a table for any occasion</h3>
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                    <label htmlFor="res-date" className="block text-sm font-medium text-gray-700">Choose date</label>
                    <input
                        type="date"
                        id="res-date"
                        value={date}
                        onChange={handleDateChange}
                        min={today}
                        required
                        aria-describedby="date-error"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm text-highlight-dark"
                    />
                    {errors.date && <p id="date-error" className="text-red-500 text-xs mt-1">{errors.date}</p>}
                </div>

                <div>
                    <label htmlFor="res-time" className="block text-sm font-medium text-gray-700">Choose time</label>
                    <select
                        id="res-time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                        aria-describedby="time-error"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm text-highlight-dark"
                    >
                        <option value="" disabled>Select a time</option>
                        {availableTimes.map((t) => (
                            <option key={t} value={t}>{t}</option>
                        ))}
                    </select>
                    {errors.time && <p id="time-error" className="text-red-500 text-xs mt-1">{errors.time}</p>}
                </div>

                <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Number of guests</label>
                    <input
                        type="number"
                        placeholder="1"
                        min="1"
                        max="10"
                        id="guests"
                        value={guests}
                        onChange={(e) => setGuests(parseInt(e.target.value, 10))}
                        required
                        aria-describedby="guests-error"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm text-highlight-dark"
                    />
                    {errors.guests && <p id="guests-error" className="text-red-500 text-xs mt-1">{errors.guests}</p>}
                </div>

                <div>
                    <label htmlFor="occasion" className="block text-sm font-medium text-gray-700">Occasion</label>
                    <select
                        id="occasion"
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm text-highlight-dark"
                    >
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Business</option>
                        <option>Other</option>
                    </select>
                </div>

                <button
                    type="submit"
                    aria-label="On Click, Make your reservation"
                    disabled={!date || !time || guests < 1}
                    className="w-full bg-primary text-secondary font-bold py-3 px-4 rounded-md hover:bg-yellow-400 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                    Make Your reservation
                </button>
            </form>
        </div>
    );
};

export default BookingForm;