import React, { useState, useEffect } from 'react';
import Header from './Header';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Applicants() {
    const [myJobs, setMyJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMyJobs();
    }, []);

    const fetchMyJobs = async () => {
        try {
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${Cookies.get('token')}`
                }
            };
            
            const response = await fetch('https://job-web-application-ktk3.onrender.com/api/jobs/my-applicants', options);
            const data = await response.json();

            if (response.ok) {
                setMyJobs(data.jobs || []);
            } else {
                toast.error(data.message || "Failed to fetch your jobs");
            }
        } catch (error) {
            console.error("Error fetching jobs:", error);
            toast.error("An error occurred while fetching your jobs");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <>
                <Header />
                <div className="flex justify-center items-center h-64">
                    <div className="text-lg">Loading your jobs...</div>
                </div>
            </>
        );
    }

    return (
        <>
            <Header />
            <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} />
            <div className="bg-gray-50 py-12 mt-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">My Posted Jobs & Applicants</h1>
                    
                    {myJobs.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-600 text-lg">You haven't posted any jobs yet.</p>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            {myJobs.map((job) => (
                                <div key={job._id} className="bg-white border border-gray-200 rounded-lg p-6">
                                    <div className="mb-4">
                                        <h2 className="text-xl font-bold text-gray-900">{job.title}</h2>
                                        <p className="text-gray-600">{job.company} • {job.location}</p>
                                        <p className="text-sm text-gray-500 mt-1">
                                            Posted: {new Date(job.postedDate).toLocaleDateString()}
                                        </p>
                                    </div>
                                    
                                    <div className="mb-4">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                            Applicants ({job.applicants.length})
                                        </h3>
                                        
                                        {job.applicants.length === 0 ? (
                                            <p className="text-gray-500 italic">No applicants yet</p>
                                        ) : (
                                            <div className="space-y-2">
                                                {job.applicants.map((applicant, index) => (
                                                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                                                        <div>
                                                            <p className="font-medium text-gray-900">
                                                                {applicant.username || applicant.email}
                                                            </p>
                                                            <p className="text-sm text-gray-600">{applicant.email}</p>
                                                        </div>
                                                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                                                            View Profile
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Applicants;