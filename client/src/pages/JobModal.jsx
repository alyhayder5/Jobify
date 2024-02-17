import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import {FaBagShopping} from 'react-icons/fa6';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const JobModal = () => {
    const [job, setJobData] = useState([])
    const { id } = useParams()
    const fetchData = async () => {
        try {
            const { data } = await axios.get('http://localhost:3000/job/' + id)
            setJobData(...data)
            console.log(data)
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            <PageHeader title={"Job Details Page"} path={"Job Details"} />
            <div className="container mx-auto py-8">
                <div className="flex flex-col space-y-5">
                    <div className="flex flex-row">
                        <div className="w-1/4">
                            <p className="text-black">Job ID: <span>{String(job._id).toUpperCase().substring(0,10)}</span></p>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div>
                            <p className="text-blue text-xl">Job Details</p>
                            <p className="text-black italic font-mono">{job.jobTitle}</p>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div>
                            <p className="text-black font-bold flex items-center justify-center"><FaBagShopping className='mr-2'/> Job type</p>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <button className="bg-sky-500 text-white py-2 px-4 rounded mr-4">Temporary</button>
                        <button className="bg-purple-800 text-white py-2 px-4 rounded">Apply Now</button>
                    </div>
                </div>
                <div className="container mx-auto py-8">
                    <div className="flex flex-row space-x-8">
                        <div className="w-1/3">
                            <div className="mb-4">
                                <h2 className="text-xl font-bold">Skills</h2>
                                <p className="text-gray-600">Here are the skills you'll gain:</p>
                            </div>
                            <ul className="list-decimal">
                                <li>Proficiency in front-end technologies such as HTML, CSS, and JavaScript</li>
                                <li>Experience with modern front-end frameworks like React or Vue.js</li>
                                <li>Back-end development skills using Node.js, Python, or Java</li>
                                <li>Database management with SQL and NoSQL databases</li>
                                <li>Version control with Git</li>
                                <li>Understanding of RESTful APIs and GraphQL</li>
                                <li>Deployment and DevOps practices</li>
                                <li>Testing and debugging techniques</li>
                                <li>UI/UX design principles</li>
                                <li>Continuous learning and adaptation to new technologies</li>
                            </ul>
                        </div>

                        <div className="w-1/3">
                            <div className="mb-4">
                                <h2 className="text-xl font-bold">Projects</h2>
                                <p className="text-gray-600">Explore projects you'll work on:</p>
                            </div>
                            <p className="text-gray-600">You'll be involved in developing responsive and scalable web applications from scratch, implementing features and functionality across the entire stack. You'll also participate in project planning, code reviews, and collaboration with cross-functional teams to deliver high-quality software solutions.</p>
                        </div>

                        <div className="w-1/3">
                            <div className="mb-4">
                                <h2 className="text-xl font-bold">Career Growth</h2>
                            </div>
                            <p className="text-gray-600">As a full-stack developer, you'll have the opportunity to expand your expertise in both front-end and back-end technologies, making you a versatile and valuable asset to any development team. You can explore specialized roles such as technical lead, architect, or even pursue entrepreneurship by launching your own projects.</p>
                            <p className="text-gray-600">Continuous learning and keeping up with industry trends will enable you to stay competitive and advance your career in the ever-evolving field of full-stack development.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobModal;
