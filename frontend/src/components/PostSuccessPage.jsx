import React from 'react';
import { useNavigate } from 'react-router-dom';

const CheckmarkIcon = () => (
    <svg className="w-24 h-24 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

function PostSuccessPage() {


    const navigate = useNavigate();


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
            
            <div className="mb-6">
                <CheckmarkIcon />
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Job Posted Successfully!
            </h1>
            <p className="text-gray-600 mb-8">
                Your job listing is now live. We'll notify you when candidates start applying.
            </p>

            <div className="flex flex-col space-y-4">
                <button onClick={() => navigate('/')}
                    className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                    Back to Dashboard
                </button>
                
                <button  onClick={() => navigate('/jobs')}
                    className="w-full bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors duration-300"
                >
                    View Job Post
                </button>
            </div>

        </div>
    </div>
  );
}

export default PostSuccessPage;

