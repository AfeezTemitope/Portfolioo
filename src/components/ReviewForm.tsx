import React, { useState, FormEvent } from 'react';

type ReviewFormProps = object

const ReviewForm: React.FC<ReviewFormProps> = () => {
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!name || !review) {
            setError("Please fill in both name and review.");
            return;
        }

        const mailtoLink = `mailto:tbelzbby@gmail.com?subject=Review&body=Name: ${encodeURIComponent(name)}\nReview: ${encodeURIComponent(review)}`;

        window.location.href = mailtoLink;

        setIsSubmitted(true);
        setName('');
        setReview('');
        setError(null);
    };

    if (isSubmitted) {
        return <p className="text-center text-green-500 mt-4">Thank you for your review!</p>;
    }

    return (
        <div className="max-w-md mx-auto mt-8 p-4 md:p-6 bg-transparent rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center text-white">Leave a Review</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="w-full bg-transparent border border-gray-600 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-white glow"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="review" className="block text-gray-300 font-medium mb-2">Review</label>
                    <textarea
                        id="review"
                        className="w-full bg-transparent border border-gray-600 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white h-24 text-white glow"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    >
                        Send Review
                    </button>
                </div>
            </form>
        </div>
    );
};


const styles = `
.glow {
    transition: box-shadow 0.3s ease;
}

.glow:focus {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.7); /* White glow on focus */
    outline: none; /* Remove default outline */
}
`;

const ReviewFormWithStyles: React.FC = () => {
    return (
        <div>
            <style>{styles}</style>
            <ReviewForm />
        </div>
    )
}


export default ReviewFormWithStyles;
