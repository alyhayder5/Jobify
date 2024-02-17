import React,{ useState } from 'react';
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';
import FileBase64 from 'react-file-base64';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const CreateJob = () => {
    let navigate = useNavigate()
    const [base64,setBase64] = useState('')
    const [selectedOption,setSelectedOption] = useState('');
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = async(data)=>{
        try{
            data.skills = selectedOption;
            data.companyLogo = base64
            await axios.post('http://localhost:3000',data)
            return navigate("/")
            
        }catch(error){
            console.log(error.message)
        }
    }
    const options = [
        {value: 'JavaScript',label: 'JavaScript'},
        {value: 'C++', label: 'C++'},
        {value: 'Html', label: 'Html'},
        {value: 'Css', label: 'Css'},
        {value: 'React', label: 'React'},
        {value: 'Node', label: 'Node'},
        {value: 'Python', label: 'Python'},
        {value: 'Ruby', label: 'Ruby'},
    ]

    
  return (
    <div className='max-w-screen-2xl container mx-auto xl:p-2 p-4'>
        <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16'>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                <div className='create-job-flex'>
                    <div className='lg:w-1/2 w-full'>
                        <label className='label-job-field'>Job Title</label>
                        <input className='create-job-input' type="text" defaultValue='Web Developer' {...register("jobTitle")} />
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <label className='label-job-field'>Company Name</label>
                        <input className='create-job-input' placeholder='Ex: Microsoft' type="text" {...register("companyName")} />
                    </div>
                </div>
                <div className='create-job-flex'>
                    <div className='lg:w-1/2 w-full'>
                        <label className='label-job-field'>Minimum Salary</label>
                        <input className='create-job-input' type="text" placeholder='20k' {...register("minPrice")} />
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <label className='label-job-field'>Maximum Salary</label>
                        <input className='create-job-input' placeholder='100k' type="text" {...register("maxPrice")} />
                    </div>
                </div>
                <div className='create-job-flex'>
                    <div className='lg:w-1/2 w-full'>
                        <label className='label-job-field'>Salary Type</label>
                        <select className='create-job-input' {...register("salaryType")}>
                            <option value="">Choose your salary</option>
                            <option value="Hourly">Hourly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                        </select>
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <label className='label-job-field'>Job Location</label>
                        <input className='create-job-input' placeholder='Ex: New York' type="text" {...register("jobLocation")} />
                    </div>
                </div>
                <div className='create-job-flex'>
                    <div className='lg:w-1/2 w-full'>
                        <label className='label-job-field'>Job Posting Date</label>
                        <input className='create-job-input' placeholder='Ex: 2024-02-09' type="date" {...register("postingDate")} />
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <label className='label-job-field'>Experience Level</label>
                        <select className='create-job-input' {...register("experienceLevel")}>
                            <option value="">Select Your Experience Level</option>
                            <option value="Any Experience">Any</option>
                            <option value="Internship">Internship</option>
                            <option value="Work Remotely">Work Remotely</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label className='label-job-field'>Required Skill Set:</label>
                    <CreatableSelect  onChange={setSelectedOption} options={options} defaultInputValue={selectedOption} isMulti isOptionSelected={true} className='create-job-input py-4'/>
                </div>
                <div className='create-job-flex'>
                    <div className='lg:w-1/2 w-full'>
                        <label className='label-job-field'>Job Posting Date</label>
                        <div>
                            <FileBase64  type="file" multiple={false} onDone={({base64})=> setBase64(base64)}/>
                        </div>
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <label className='label-job-field'>Experience Level</label>
                        <select className='create-job-input' {...register("employmentType")}>
                            <option value="">Choose your experience</option>
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Temporary">Temporary</option>
                        </select>
                    </div>
                </div>
                <div className='w-full'>
                    <label className='label-job-field'>Job Description:</label>
                    <textarea className='w-full px-10 pt-5 pb-1.5 focus:outline-none placeholder:text-gray-700' defaultValue='Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis neque iusto assumenda quae natus obcaecati, sed sit distinctio ducimus fugit.' placeholder='describe more about your job' rows={6} {...register("description")}/>
                </div>
                <div>
                    <label className='label-job-field'>Job Posted By</label>
                    <input type="email" className='create-job-input' placeholder='jake@mail.com' {...register("postedBy")}/>
                </div>
                <input type="submit" className='block mt-12 text-white bg-blue font-semibold px-8 py-1.5 rounded-sm cursor-pointer' />
            </form>
        </div>
    </div>
  )
}

export default CreateJob