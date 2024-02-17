import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {workExp, salaryType,employment} from '../constants/index.js'
import FileBase64 from 'react-file-base64';
import CreatableSelect from 'react-select/creatable';
import { DNA } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateJobs = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [base64, setBase64] = useState('')
    const [selectedOption, setSelectedOption] = useState('');
    const [updatedata, setupdateData] = useState({
        "companyName": "",
        "jobTitle": "",
        "companyLogo": "",
        "minPrice": "",
        "maxPrice": "",
        "salaryType": "",
        "jobLocation": "",
        "postingDate": "",
        "experienceLevel": "",
        "employmentType": "",
        "description": "",
        "postedBy": "",
        "skills": selectedOption        
    })
    console.log(updatedata)
    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const { data } = await axios.get('http://localhost:3000/edit-job/' + id);

                const formatDate = (date)=>{
                    date = new Date(date)
                    return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}`
                }
                setupdateData({
                    "companyName": data.companyName,
                    "jobTitle": data.jobTitle,
                    "companyLogo": data.companyLogo,
                    "minPrice": data.minPrice,
                    "maxPrice": data.maxPrice,
                    "salaryType": data.salaryType,
                    "jobLocation": data.jobLocation,
                    "postingDate": formatDate(data.postingDate),
                    "experienceLevel": data.experienceLevel,
                    "employmentType": data.employmentType,
                    "description": data.description,
                    "postedBy": data.postedBy,
                    "skills": data.skills
                  });                  
                setIsLoading(false) 
            } catch (error) {
                console.log(error.message)
                setIsLoading(false)
            }
        }
        fetchData()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.patch('http://localhost:3000/edit-job/'+id, updatedata)
            navigate('/')
        } catch (error) {
            console.log(error.message)
        }
    }


    const options = [
        { value: 'JavaScript', label: 'JavaScript' },
        { value: 'C++', label: 'C++' },
        { value: 'Html', label: 'Html' },
        { value: 'Css', label: 'Css' },
        { value: 'React', label: 'React' },
        { value: 'Node', label: 'Node' },
        { value: 'Python', label: 'Python' },
        { value: 'Ruby', label: 'Ruby' },
    ]

    return (
        isLoading ? (
            <div className='flex w-full items-center justify-center h-[60vh]'>
                <DNA
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper" />
            </div>
        ) : (
            <div className='max-w-screen-2xl container mx-auto xl:p-2 p-4'>
                <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16'>
                    <form onSubmit={handleSubmit} className='space-y-5'>
                        <div className='create-job-flex'>
                            <div className='lg:w-1/2 w-full'>
                                <label className='label-job-field'>Job Title</label>
                                <input className='create-job-input' type="text" value={updatedata.jobTitle} onChange={(e)=> setupdateData({...updatedata,jobTitle: e.target.value})}/>
                            </div>
                            <div className='lg:w-1/2 w-full'>
                                <label className='label-job-field'>Company Name</label>
                                <input className='create-job-input' value={updatedata.companyName} placeholder='Ex: Microsoft' type="text"  onChange={(e)=> setupdateData({...updatedata,companyName: e.target.value})}/>
                            </div>
                        </div>
                        <div className='create-job-flex'>
                            <div className='lg:w-1/2 w-full'>
                                <label className='label-job-field'>Minimum Salary</label>
                                <input className='create-job-input' type="text" placeholder='20k'  value={updatedata.minPrice} onChange={(e)=> setupdateData({...updatedata,minPrice: e.target.value})}/>
                            </div>
                            <div className='lg:w-1/2 w-full'>
                                <label className='label-job-field'>Maximum Salary</label>
                                <input className='create-job-input' placeholder='100k' type="text" value={updatedata.maxPrice} onChange={(e)=> setupdateData({...updatedata,maxPrice: e.target.value})} />
                            </div>
                        </div>
                        <div className='create-job-flex'>
                            <div className='lg:w-1/2 w-full'>
                                <label className='label-job-field'>Salary Type</label>
                                <select className='create-job-input' value={updatedata.salaryType} onChange={(e)=> setupdateData({...updatedata,salaryType: e.target.value})}> 
                                    <option value="">Choose your salary</option>
                                    {salaryType.map((salary,index)=>(
                                        <option key={index} value={salary.name}>{salary.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='lg:w-1/2 w-full'>
                                <label className='label-job-field'>Job Location</label>
                                <input className='create-job-input' placeholder='Ex: New York' type="text"  value={updatedata.jobLocation} onChange={(e)=> setupdateData({...updatedata,jobLocation: e.target.value})}/>
                            </div>
                        </div>
                        <div className='create-job-flex'>
                            <div className='lg:w-1/2 w-full'>
                                <label className='label-job-field'>Job Posting Date</label>
                                <input className='create-job-input' placeholder='Ex: 2024-02-09' type="date" value={updatedata.postingDate} onChange={(e)=> setupdateData({...updatedata,postingDate: e.target.value})}/>
                            </div>
                            <div className='lg:w-1/2 w-full'>
                                <label className='label-job-field'>Experience Level</label>
                                <select className='create-job-input' value={updatedata.experienceLevel} onChange={(e)=> setupdateData({...updatedata, experienceLevel: e.target.value})}>
                                    <option value="">Select Your Experience Level</option>
                                    {workExp.map((exp,index)=>(
                                        <option key={index} value={exp.name}>{exp.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className='label-job-field'>Required Skill Set:</label>
                            <CreatableSelect onChange={(selectedOption)=> setSelectedOption({selectedOption})} options={options} value={updatedata.skills} isMulti isOptionSelected={true} className='create-job-input py-4' />
                        </div>
                        <div className='create-job-flex'>
                            <div className='lg:w-1/2 w-full'>
                                <label className='label-job-field'>Job Posting Date</label>
                                <div>
                                    <FileBase64 type="file" multiple={false} onDone={({ base64 }) => setBase64(base64)} />
                                </div>
                            </div>
                            <div className='lg:w-1/2 w-full'>
                                <label className='label-job-field'>Employment Type</label>
                                <select className='create-job-input' value={updatedata.employmentType} onChange={(e) => setupdateData({...updatedata, employmentType: e.target.value})}>
                                    {employment.map((employ, index) => (
                                        <option key={index} value={employ.name}>{employ.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className='w-full'>
                            <label className='label-job-field'>Job Description:</label>
                            <textarea className='w-full px-10 pt-5 pb-1.5 focus:outline-none placeholder:text-gray-700' value={updatedata.description} onChange={(e)=> setupdateData({...updatedata,description: e.target.value})} rows={6}  />
                        </div>
                        <div>
                            <label className='label-job-field'>Job Posted By</label>
                            <input disabled type="email" value={updatedata.postedBy} className='create-job-input opacity-70' placeholder='jake@mail.com'  />
                        </div>
                        <input type="submit" className='block mt-12 text-white bg-blue font-semibold px-8 py-1.5 rounded-sm cursor-pointer' />
                    </form>
                </div>
            </div>
        )
    )
}

export default UpdateJobs

