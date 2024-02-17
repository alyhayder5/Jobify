import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import axios from 'axios';

const Salary = () => {
  const [searchText, setSearchText] = useState("");
  const [salary, setSalary] = useState([]);


  const fetchData = async () => {
    try {
      const { data } = await axios.get('salary.json')
      setSalary(data)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  const handleSearch = () => {
    if(searchText.length < 1){
      fetchData()
    }else{
      const filterJobs = salary.filter((job) => job.title.toLowerCase().includes(searchText.toLowerCase()))
      setSalary(filterJobs)
    }
  }
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      <PageHeader title={"Estimate Salary"} path={"Salary"} />

      <div className='mt-5'>
        <div className='search-box p-2 text-center mb-2'>
          <input onChange={(e) => setSearchText(e.target.value)} type='text' name='search' id='search' className='py-2 pl-3 border focus:outline-none lg:w-6/12 w-full mb-4' />
          <button onClick={handleSearch} className='bg-blue text-white font-semibold px-8 py-2 rounded mb-4 rounded-sm'>Search</button>
        </div>
      </div>

      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 my-12 items-center'>
        {salary.map((data) => (
          <div key={data.title} className='shadow px-4 py-8'>
            <h4 className='font-semibold text-xl'>{data.title}</h4>
            <p className='my-2 font-medium text-blue text-lg'>{data.salary}</p>
            <div className='flex flex-wrap gap-4'>
              <a href="/" className='underline'>{data.status}</a>
              <a href="/" className='underline'>{data.skills}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Salary