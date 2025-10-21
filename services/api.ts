
import type { BookingData } from '../types';

/**
 * A seeded random number generator function.
 * This ensures that the available times are consistent for a given date.
 * @param seed - The seed for the random number generator, typically derived from the date.
 * @returns A pseudo-random number between 0 and 1.
 */
const seededRandom = (seed: number): number => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
};

/**
 * Fetches available booking times for a given date.
 * This is a mock implementation.
 * @param date - The date for which to fetch available times.
 * @returns An array of available time strings.
 */
export const fetchAPI = (date: Date): string[] => {
    const result: string[] = [];
    const seed = date.getDate();

    for (let i = 17; i <= 22; i++) {
        if (seededRandom(seed + i) > 0.4) {
            result.push(`${i}:00`);
        }
        if (seededRandom(seed - i) > 0.6) {
            result.push(`${i}:30`);
        }
    }
    return result.sort();
};

/**
 * Submits the booking data to a mock API.
 * @param formData - The booking data to be submitted.
 * @returns A boolean indicating whether the submission was successful.
 */
export const submitAPI = (formData: BookingData): boolean => {
    // In a real application, this would make an API call.
    // Here, we'll just log the data and always return true.
    console.log("Submitting booking data:", formData);
    return true;
};
