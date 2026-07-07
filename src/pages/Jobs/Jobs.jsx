import React from "react";
import { useNavigate } from "react-router-dom";
import "./Jobs.css";

const jobs = [
    {
        id: 1,
        company: "Accenture",
        role: "Network & Services Operation Associate",
        salary: "₹4 - ₹6 LPA (Approx)",
        rating: 4.3,
        location: "Chennai",
        applyLink: "https://www.accenture.com/in-en/careers/jobdetails?id=AIOC-S01645507_en&title=Network+%26+Svcs+Operation+Associate"
    },
    {
        id: 2,
        company: "Livine",
        role: "Java Full Stack Developer",
        salary: "₹6 - ₹12 LPA (Expected)",
        rating: 4.5,
        location: "Bengaluru",
        applyLink: "https://www.linkedin.com/jobs/view/4404279646/"
    },
    {
        id: 3,
        company: "Wipro",
        role: "Software QA Engineer",
        salary: "₹4 - ₹7.5 LPA (Expected)",
        rating: 4.1,
        location: "Bengaluru",
        applyLink: "https://www.wipro.com/careers/job/Software-QA-Engineer/33942-en_US/"
    },
    {
        id: 4,
        company: "Accenture",
        role: "Procurement Operations New Associate",
        salary: "₹4 - ₹6 LPA (Approx)",
        rating: 4.4,
        location: "Mumbai",
        applyLink: "https://www.accenture.com/in-en/careers/jobdetails?id=AIOC-S01650306_en&title=Procurement+Operations+New+Associate"
    },
    {
        id: 6,
        company: "CGI",
        role: "Software Developer",
        salary: "₹5 - ₹10 LPA (Expected)",
        rating: 4.2,
        location: "Pan India",
        applyLink: "https://cgi.njoyn.com/corp/xweb/xweb.asp?NTKN=c&clid=21001&Page=JobDetails&Jobid=J0426-0132&BRID=1286654&lang=1"
    },
    {
        id: 6,
        company: "Cognizant",
        role: "Java Developer",
        salary: "₹5 - ₹8 LPA",
        rating: 4.3,
        location: "Hyderabad",
        applyLink: "https://careers.cognizant.com/"
    },
    {
        id: 7,
        company: "HCLTech",
        role: "Software Developer",
        salary: "₹4.5 - ₹8 LPA",
        rating: 4.0,
        location: "Noida",
        applyLink: "https://www.hcltech.com/careers"
    },
    {
        id: 8,
        company: "Tech Mahindra",
        role: "Full Stack Developer",
        salary: "₹4 - ₹7 LPA",
        rating: 4.1,
        location: "Pune",
        applyLink: "https://careers.techmahindra.com/"
    }
];

const Jobs = () => {
    const navigate = useNavigate();
    return (
        <div className="jobs-container">
            <button
                className="back-btn"
                onClick={() => navigate("/")}
            >
                ← Back to Home
            </button>
            <h1>Latest Java Full Stack Jobs</h1>

            <div className="job-grid">
                {jobs.map((job) => (
                    <div className="job-card" key={job.id}>

                        <span className="fresher-badge">
                            Fresher Can Apply
                        </span>

                        <h2>{job.company}</h2>

                        <p><strong>Role:</strong> {job.role}</p>

                        <p>💰 <strong>Salary:</strong> {job.salary}</p>

                        <p>⭐ <strong>Rating:</strong> {job.rating}/5</p>

                        <p>📍 <strong>Location:</strong> {job.location}</p>

                        <a
                            href={job.applyLink}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button className="apply-btn">
                                Apply Now
                            </button>
                        </a>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Jobs;