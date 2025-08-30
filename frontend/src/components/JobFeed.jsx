import React from 'react';
import Header from './Header';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

function JobFeed() {
    const [jobListings, setJobListings] = React.useState([]);

    const jobsData = async () => {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${Cookies.get('token')}`
            }
        };
        const response = await fetch('https://job-web-application-ktk3.onrender.com/api/jobs/', options);
        const data = await response.json();
        return data.jobListings || data;
    };

    useEffect(() => {
        jobsData().then(data => {
            setJobListings(data);
        });
    }, []);

    return (

        <>
            <div className='mb-12'>
                <Header />
            </div>

            <div className="bg-gray-50 py-12">
                <div className="container mx-auto px-4">
                    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search jobs, companies, or keywords..."
                                    className="w-full pl-10 pr-4 py-2 border rounded-md"
                                />
                            </div>
                            <div>
                                <select className="w-full py-2 px-3 border rounded-md">
                                    <option>All locations</option>
                                    <option>Remote</option>
                                    <option>New York, NY</option>
                                    <option>San Francisco, CA</option>
                                </select>
                            </div>
                            <div>
                                <select className="w-full py-2 px-3 border rounded-md">
                                    <option>All types</option>
                                    <option>Full-time</option>
                                    <option>Contract</option>
                                    <option>Internship</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mb-6">
                        <p className="text-sm text-gray-600">
                            Showing 1-6 of 6 jobs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {jobListings.map((job, index) => (
                            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
                                    {job.isFeatured && (
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                                            Featured
                                        </span>
                                    )}
                                </div>
                                <div className="mt-2 flex items-center space-x-4 text-sm text-gray-600">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        <span className="ml-2">{job.company}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="ml-2">{job.location}</span>
                                    </div>
                                </div>
                                <p className="mt-4 text-sm text-gray-700">
                                    {job.description}
                                </p>
                                <div className="mt-6 flex justify-between items-center">
                                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                                        <span>{job.postedAgo}</span>
                                        <span className="font-bold text-green-600">{job.salary}</span>
                                    </div>

                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default JobFeed;