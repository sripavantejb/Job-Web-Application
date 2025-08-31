import React from 'react';
import Header from './Header';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function JobFeed() {
    const [jobListings, setJobListings] = React.useState([]);
    const [filteredJobs, setFilteredJobs] = React.useState([]);
    const [appliedJobs, setAppliedJobs] = React.useState(new Set());
    const [currentUserId, setCurrentUserId] = React.useState(null);
    const [searchTerm, setSearchTerm] = React.useState('');
    const [locationFilter, setLocationFilter] = React.useState('All locations');
    const [typeFilter, setTypeFilter] = React.useState('All types');

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
            setFilteredJobs(data);
        });
    }, []);

    // Filter jobs based on search term and filters
    useEffect(() => {
        let filtered = jobListings;

        // Apply search filter
        if (searchTerm) {
            filtered = filtered.filter(job => 
                job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                job.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Apply location filter
        if (locationFilter !== 'All locations') {
            filtered = filtered.filter(job => 
                job.location.toLowerCase().includes(locationFilter.toLowerCase())
            );
        }

        // Apply type filter (you can customize this based on your job types)
        if (typeFilter !== 'All types') {
            // For now, we'll filter by job title keywords
            const typeKeywords = {
                'Full-time': ['full', 'full-time', 'permanent'],
                'Contract': ['contract', 'temporary', 'freelance'],
                'Internship': ['intern', 'internship', 'student']
            };
            
            if (typeKeywords[typeFilter]) {
                filtered = filtered.filter(job => 
                    typeKeywords[typeFilter].some(keyword => 
                        job.title.toLowerCase().includes(keyword) ||
                        job.description.toLowerCase().includes(keyword)
                    )
                );
            }
        }

        setFilteredJobs(filtered);
    }, [jobListings, searchTerm, locationFilter, typeFilter]);

    // Get current user ID and check applied jobs
    useEffect(() => {
        const getCurrentUserAndAppliedJobs = async () => {
            try {
                const options = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${Cookies.get('token')}`
                    }
                };
                
                // Get current user info
                try {
                    const userResponse = await fetch('https://job-web-application-ktk3.onrender.com/api/auth/me', options);
                    if (userResponse.ok) {
                        const userData = await userResponse.json();
                        setCurrentUserId(userData.user._id || userData.user.id);
                    }
                } catch (error) {
                    console.log("Could not fetch user info, continuing without user ID:", error);
                }
                
                // Get applied jobs
                const appliedResponse = await fetch('https://job-web-application-ktk3.onrender.com/api/jobs/my-applicants', options);
                if (appliedResponse.ok) {
                    const data = await appliedResponse.json();
                    // Extract job IDs from jobs where user is an applicant
                    const appliedJobIds = new Set();
                    data.jobs?.forEach(job => {
                        if (job.applicants && job.applicants.length > 0) {
                            job.applicants.forEach(applicant => {
                                if (applicant._id || applicant.id) {
                                    appliedJobIds.add(job._id);
                                }
                            });
                        }
                    });
                    setAppliedJobs(appliedJobIds);
                }
            } catch (error) {
                console.error("Error getting user info and applied jobs:", error);
            }
        };
        
        getCurrentUserAndAppliedJobs();
    }, []);


const handleApply = async (jobId) => {
    console.log("Applying for job:", jobId);
    console.log("Token:", Cookies.get('token'));
    
    // TEMPORARY: Test button state change immediately
    setAppliedJobs(prev => new Set([...prev, jobId]));
    console.log("Button state updated for job:", jobId);
    
    try {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${Cookies.get('token')}`
            }
        };
        
        const response = await fetch(`https://job-web-application-ktk3.onrender.com/api/jobs/${jobId}/apply`, options);
        const data = await response.json();

        console.log("Response:", response);
        console.log("Data:", data);

        if (response.ok) {
            toast.success(data.message || "Applied successfully!");
            console.log("Job applied successfully, updating button state for job:", jobId);
        } else {
            // Don't show error for "own job" - just inform the user
            if (data.message === "You cannot apply to your own job post.") {
                toast.info("You cannot apply to your own job post.");
            } else {
                toast.error(data.message || "Failed to apply.");
            }
            console.log("Failed to apply, response status:", response.status);
            // Revert the button state if API call failed
            setAppliedJobs(prev => {
                const newSet = new Set(prev);
                newSet.delete(jobId);
                return newSet;
            });
        }
    } catch (error) {
        console.error("Apply error:", error);
        toast.error("An error occurred. Please try again.");
        // Revert the button state if API call failed
        setAppliedJobs(prev => {
            const newSet = new Set(prev);
            newSet.delete(jobId);
            return newSet;
        });
    }
};

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
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border rounded-md"
                                />
                                {searchTerm && (
                                    <button
                                        onClick={() => setSearchTerm('')}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                )}
                            </div>
                            <div>
                                <select 
                                    className="w-full py-2 px-3 border rounded-md"
                                    value={locationFilter}
                                    onChange={(e) => setLocationFilter(e.target.value)}
                                >
                                    <option>All locations</option>
                                    <option>Remote</option>
                                    <option>New York, NY</option>
                                    <option>San Francisco, CA</option>
                                </select>
                            </div>
                            <div>
                                <select 
                                    className="w-full py-2 px-3 border rounded-md"
                                    value={typeFilter}
                                    onChange={(e) => setTypeFilter(e.target.value)}
                                >
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
                            Showing {filteredJobs.length} of {jobListings.length} jobs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {filteredJobs.map((job, index) => (
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

                                    <button 
                                        onClick={() => !appliedJobs.has(job._id) && handleApply(job._id)} 
                                        disabled={appliedJobs.has(job._id) || (currentUserId && job.createdBy === currentUserId)}
                                        className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                                            appliedJobs.has(job._id)
                                                ? 'bg-blue-300 text-white cursor-not-allowed'
                                                : (currentUserId && job.createdBy === currentUserId)
                                                ? 'bg-gray-400 text-white cursor-not-allowed'
                                                : 'bg-blue-600 text-white hover:bg-blue-700'
                                        }`}
                                    >
                                        {appliedJobs.has(job._id) 
                                            ? 'Applied!' 
                                            : (currentUserId && job.createdBy === currentUserId)
                                            ? 'Your Job'
                                            : 'Apply Now'
                                        }
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