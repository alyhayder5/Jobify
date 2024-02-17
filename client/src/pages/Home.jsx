import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Sidebar from './Sidebar';
import axios from 'axios';
import Jobs from './Jobs';
import Newsletter from './Newsletter';

const Home = () => {
    const [oneTimeData,setoneTimeData] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [jobs, setJobs] = useState([]);
    const [query, setQuery] = useState("");
    const itemsPerPage = 6;

    useEffect(() => {
        const fetchJobs = async () => {
            setIsLoading(true)
            try {
                const { data } = await axios.get('http://localhost:3000');
                setJobs(data);
                setoneTimeData(data)
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false);
            }
        };

        fetchJobs();
    }, [])

    const handleInputChange = (e) => {
        setQuery(e.target.value)
    }

    const handleLocation = (e) => {
        setSelectedLocation(e.target.value)
    }

    const handleClick = (e) => {
        setSelectedCategory(e.target.value)
    }

    const handleChange = (e) => {
        setSelectedCategory(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault();
        setCurrentPage(1);

        if (selectedLocation === "") {
            setJobs(oneTimeData);
        } else {
            const filteredJobs = jobs.filter(job => job.jobLocation.toLowerCase().includes(selectedLocation.toLowerCase()));
            setJobs(filteredJobs);
        }
    }

    // Calculate index range for pagination
    const calculatePageRange = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return { startIndex, endIndex };
    }

    // Function for the next page
    const nextPage = () => {
        if (currentPage < Math.ceil(jobs.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1)
        }
    }

    // Function for the previous page
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    // Filter jobs based on selected category and query
    const filterItems = jobs.filter(job => job.jobTitle.toLowerCase().includes(query.toLowerCase()));

    // Main function to filter and render jobs
    const filterData = (jobs,selected,query) => {
        let filterJobs = jobs;
        
        if(query){
            filterJobs = filterItems
        }

        if (selected) {
            filterJobs = filterJobs.filter(({ jobLocation, maxPrice, salaryType, employmentType,postingDate,experienceLevel}) => {
                return (
                    (selected.toLowerCase() === 'all') || 
                    (jobLocation.toLowerCase() === selected.toLowerCase()) || 
                    (postingDate >= selected) ||
                    (parseInt(maxPrice) === parseInt(selected)) || 
                    (experienceLevel.toLowerCase() === selected.toLowerCase()) ||
                    (salaryType.toLowerCase() === selected.toLowerCase()) || 
                    (employmentType.toLowerCase() === selected.toLowerCase())
                );
            });
        }
        
        const {startIndex,endIndex} = calculatePageRange()
        filterJobs = filterJobs.slice(startIndex,endIndex)
        return filterJobs.map((data,i)=> <Card key={i} data={data}/>)
    }

    const result = filterData(jobs,selectedCategory,query)

    return (
        <>
            <Banner query={query} selectedLocation={selectedLocation} handleInputChange={handleInputChange} handleLocation={handleLocation} handleSearch={handleSearch} />

            <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-4 lg:px-24 px-4 py-12'>
                <div className='bg-white p-4 rounded h-min'><Sidebar handleClick={handleClick} handleChange={handleChange} /></div>
                <div className='col-span-2 bg-white p-4 rounded-sm'>
                    {isLoading ? (
                        <p className='font-medium'>Loading...</p>
                    ) : result.length ? (
                        <Jobs data={result} />
                    ) : (
                        <>
                            <h3 className='text-lg font-bold mb-2'>{result.length} Jobs</h3>
                            <p>No data found!</p>
                        </>
                    )}
                    {
                        result.length > 0 ? (
                            <div className='flex justify-center mt-4 space-x-8'>
                                <button onClick={prevPage} disabled={currentPage === 1} className='hover:underline'>Previous</button>
                                <span>Page {currentPage} of {Math.ceil(filterItems.length / itemsPerPage)}</span>
                                <button onClick={nextPage} disabled={currentPage === Math.ceil(filterItems.length / itemsPerPage)} className='hover:underline'>Next</button>
                            </div>
                        ) : ""
                    }
                </div>
                <div className='bg-white p-4 rounded h-min'><Newsletter /></div>
            </div>
        </>
    )
}

export default Home;
