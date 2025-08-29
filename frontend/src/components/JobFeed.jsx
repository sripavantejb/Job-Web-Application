import React from 'react';
import Header from './Header';

function JobFeed() {
    const jobListings = [
        {
            title: 'Senior Frontend Developer',
            company: 'TechCorp Inc.',
            location: 'San Francisco, CA',
            description: "We're looking for a senior frontend developer to join our growing team. You'll work on building scalable web applications using React, TypeScript, and modern development practices.",
            postedAgo: '20 months ago',
            salary: '$120,000 - $160,000',
            type: 'Full-time',
            isFeatured: true,
        },
        {
            title: 'Product Manager',
            company: 'StartupXYZ',
            location: 'Remote',
            description: 'Join our product team to drive the vision and execution of our core platform. We’re looking for someone with 3+ years of product management experience.',
            postedAgo: '20 months ago',
            salary: '$100,000 - $140,000',
            type: 'Full-time',
            isFeatured: false,
        },
        {
            title: 'UX Designer',
            company: 'Design Studio',
            location: 'New York, NY',
            description: 'Create beautiful and intuitive user experiences for our clients. Experience with Figma, prototyping, and user research required.',
            postedAgo: '20 months ago',
            salary: '$80,000 - $110,000',
            type: 'Full-time',
            isFeatured: false,
        },
        {
            title: 'DevOps Engineer',
            company: 'CloudTech Solutions',
            location: 'Toronto, ON',
            description: 'Help us build and maintain scalable infrastructure using AWS, Kubernetes, and modern DevOps practices.',
            postedAgo: '20 months ago',
            salary: '$100,000 - $140,000',
            type: 'Contract',
            isFeatured: true,
        },
        {
            title: 'Data Scientist',
            company: 'AI Innovations',
            location: 'London, UK',
            description: 'Work with large datasets to extract insights and build machine learning models. Python, SQL, and statistics experience required.',
            postedAgo: '20 months ago',
            salary: '£60,000 - £85,000',
            type: 'Full-time',
            isFeatured: false,
        },
        {
            title: 'Marketing Intern',
            company: 'Growth Co.',
            location: 'Remote',
            description: 'Learn digital marketing while supporting our growth team. Great opportunity for students or recent graduates.',
            postedAgo: '20 months ago',
            salary: '$20/hour',
            type: 'Internship',
            isFeatured: false,
        },
    ];

    return (
        <>
        <div className='mb-12'>
          <Header/>
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
                                    <span className="bg-gray-200 px-2 py-1 rounded-md">{job.type}</span>
                                </div>
                                <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center">
                                    View Details
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </a>
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

