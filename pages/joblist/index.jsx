import { getAllJobs } from "../../services/job"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "react-jwt";
export default function JobList() {
    const [jobList, setJobList] = useState([]);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getAllJobs().then((res) => {
            setJobList(res.data);
            setIsLoading(false);
        });
    }, []);
    const routeToJobDetail = (id) =>{
        navigate(`/list/${id}`);
    }
    const isEditable = (creatorId) => {
        const token = localStorage.getItem("token");
        if (!token) {
            return false; // Token is missing, so user can't edit
        }

        const decoded = decodeToken(token);
        if (!decoded || !decoded.id) {
            return false; // Token is invalid or couldn't be decoded
        }

        // Return true if the decoded user's ID matches the job's creator ID
        return decoded.id === creatorId;
    };
    
    return (
        <>
        <p>Job List</p>
        {isLoading ? <p>Loading...</p> : jobList.map((job, index)=> <p key={index}>{job.name} <span> &nbsp; {job.salary} </span> 
        {job._id ? <button onClick = {()=>routeToJobDetail(job._id)}> View </button> : null}
        {isEditable(job.creator)? <button> Edit </button> : null}
        </p>)}

        
        </>
        
    )
}