import React from 'react';

interface HomePageProps {
    onNavigateToBooking: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigateToBooking }) => {
    return (
        <section className="bg-secondary">
            <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="md:w-1/2 text-white">
                    <h1 className="text-6xl font-bold text-primary">Little Lemon</h1>
                    <h2 className="text-4xl font-light mt-2">Chicago</h2>
                    <p className="mt-4 text-lg text-highlight-light max-w-md">
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <button
                        onClick={onNavigateToBooking}
                        className="mt-8 bg-primary text-secondary font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-400 transition-transform transform hover:scale-105"
                        aria-label="Navigate to table reservation page"
                    >
                        Reserve a Table
                    </button>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0">
                    <img
                        src="https://picsum.photos/id/1060/800/600"
                        alt="Delicious bruschetta served at Little Lemon"
                        className="rounded-lg shadow-2xl w-full h-auto object-cover"
                        style={{ aspectRatio: '4/3' }}
                    />
                </div>
            </div>
        </section>
    );
};

export default HomePage;
